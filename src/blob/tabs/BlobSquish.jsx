import { useState, useEffect } from 'react';
import blob from '../../assets/blob.png';
import "./BlobSquish.css";

const barValue = v => Math.abs(125 * Math.atan(v));
export const squishValue = val => {
  const barVal = barValue(val);
  return barVal < 100
    ? `${barVal.toFixed(2)}%`
    : <><b style={{ color: "red" }}>100.00%</b> <i>+{ (barVal - 100).toFixed(4) }%</i></>
};

export const BlobSquish = () => {
  useEffect(() => {
    document.title = "Pat the blob!";
    document.getElementById("favicon").setAttribute('href', `${window.rootURL}/favicon/blobpats.png`);
  }, []);

  // Set up saving and loading first
  const savedPats = Number(localStorage.getItem("total-pats")) ?? 0;
  let savedBestSquish = Number(localStorage.getItem("best-squish")) ?? 0;
  const saveData = () => {
    localStorage.setItem("total-pats", pats);
    localStorage.setItem("best-squish", Math.max(savedBestSquish, maxSquish));
  };
  const resetData = () => {
    if (!confirm("This is not an incremental game, resetting won't do anything special!")) return;
    localStorage.clear();
    setPats(() => 0);
    setMaxSquish(() => 0);
    savedBestSquish = 0;
  };
  useEffect(() => {
    window.addEventListener("unload", saveData)
    return () => { window.removeEventListener("unload", saveData); }
  });

  const [pats, setPats] = useState(savedPats);
  const [x, setX] = useState([0, 0]);
  const [lastSquish, setLastSquish] = useState([true, 0]);  // Inc/dec flag and value
  const [maxSquish, setMaxSquish] = useState(0);
  const [power, setPower] = useState(1);
  const [bump, setBump] = useState(false);

  /**
   * All these variable names come from Math and Physics nomenclature - this is the iterative solution
   * of the differential equation mx" = -kx - bx' with timestep dt. The three variables m, k, and b
   * correspond to blob's mass, innate springiness, and squish damping respectively. To iterate through
   * the solution for how squished blob is at any given time, we need to store values for the current
   * and previous timesteps (in x). T is the calculated value for natural period of oscillation.
   */
  const m = 2, k = 200, b = 3, dt = 0.03;
  const T = 2 * Math.PI * Math.sqrt(m / k);
  useEffect(() => {
    const interval = setTimeout(() => {
      const newXp1 = ((4*m - 2*k*dt*dt) * x[1] + (b*dt - 2*m) * x[0]) / (b*dt + 2*m) + (bump ? power : 0) / 8;
      const newX = x[1];
      if (Math.abs(newXp1) > maxSquish) setMaxSquish(() => Math.abs(newXp1));
      if (lastSquish[0] === (newXp1 < newX)) {
        setLastSquish([!lastSquish[0], newX]);
        // Save immediately if we break the old record
        if (maxSquish === newX && maxSquish > savedBestSquish) saveData();
      }
      if (bump) {
        setPower(() => 0);
        setBump(() => false);
      }
      setPower(p => Math.min(p + 1.35 * (dt / T), 1));
      setX(() => [newX, newXp1]);
    }, 1000 * dt);
    return () => clearTimeout(interval);
  });

  /**
   * Clicking blob adds to the pat count and toggles a flag to give blob a nudge on the next
   * calculation tick. Directly setting the value with setX when clicking can cause weird concurrency
   * issues otherwise.
   */
  const patTheBlob = () => {
    setBump(() => true);
    incPats();
  };
  const incPats = () => setPats(p => p + 1);
  const quantStr = c => c === 1 ? "time" : "times";

  // We preserve area for the blob image, but make sure that it stays reasonably square for arbitrary squishing
  const cap = val => Math.min(val, 100);
  const squishFactor = 1 + Math.atan(x[1]) / 4;

  // Set all the dynamic styles as needed
  const blobTransform = { transform: `scale(${squishFactor}, ${1 / squishFactor})` };
  const squishWidth = { width: `${cap(barValue(x[1]))}%` };
  const powerFill = { width: `${100 * power}%` };
  const lastLine = { left: `${cap(Math.max(barValue(lastSquish[1]), barValue(x[1])))}%` };
  const maxLine = { left: `${cap(barValue(maxSquish))}%` };

  return (
    <>
      <div>
        <img
          style={blobTransform}
          src={blob}
          onClick={patTheBlob}
        />
        <br />
        You have patted blob {pats} {quantStr(pats)}.
        <br />
        <br />
        <div className="c-squish-state">
          <div className="o-squish-bar" style={squishWidth} />
          <div className="o-last-indicator" style={lastLine} />
          <div className="o-max-indicator" style={maxLine} />
        </div>
        Best Squish: { squishValue(maxSquish) }
        <br />
        Last Squish: { squishValue(lastSquish[1]) }
        <br />
        <br />
        <div className="c-power-bar">
          <div className="o-power-bar" style={powerFill} />
        </div>
        Pat Power: { (100 * power).toFixed(0) }%
        <br />
        <br />
        <b>
          Best ever squish: { squishValue(Math.max(savedBestSquish, maxSquish)) }
        </b>
        <br />
        <div className="c-stat-buttons">
          <button onClick={saveData}>Save data</button>
          <button onClick={resetData}>Reset all stats</button>
        </div>
        <br />
        <br />
        (More blob to come in the future, probably)
      </div>
    </>
  )
}

export default BlobSquish;
