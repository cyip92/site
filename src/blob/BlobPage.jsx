import { useState, useEffect } from 'react';
import blob from '../assets/blob.png';
import "./BlobPage.css";

export const BlobPage = () => {
  useEffect(() => {
    document.title = "Pat the blob!";
  }, []);
  const [pats, setCount] = useState(0);
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
      if (lastSquish[0] === (newXp1 < newX)) setLastSquish([!lastSquish[0], newX]);
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
  const incPats = () => setCount(p => p + 1);
  const quantStr = c => c === 1 ? "time" : "times";

  // We preserve area for the blob image, but make sure that it stays reasonably square for arbitrary squishing
  const squishFactor = 1 + Math.atan(x[1]) / 4;
  const blobTransform = {
    transform: `scale(${squishFactor}, ${1 / squishFactor})`,
  };
  const barValue = v => Math.min(Math.abs(125 * Math.atan(v)), 100);
  const squishWidth = {
    width: `${barValue(x[1])}%`,
  };
  const maxLine = {
    left: `${barValue(maxSquish)}%`,
  };
  const powerFill = {
    width: `${100 * power}%`,
  };

  return (
    <>
      <div className="c-page-layout">
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
          <div className="o-max-indicator" style={maxLine} />
          <div className="o-squish-bar" style={squishWidth} />
        </div>
        Best Squish: { barValue(maxSquish).toFixed(2) }%
        (Last: { Math.abs(barValue(lastSquish[1])).toFixed(2) }%)
        <br />
        <br />
        <div className="c-power-bar">
          <div className="o-power-bar" style={powerFill} />
        </div>
        Pat Power: { (100 * power).toFixed(0) }%
        <br />
        <br />
        (More blob to come in the future, probably)
      </div>
    </>
  )
}

export default BlobPage;
