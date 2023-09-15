import TimeManager from "./TimeManager.js";
import './TimeIndicator.css';

export const TimeIndicator = () => {
  const time = TimeManager.currentTime;

  return (
    <>
      <div
        className="o-time-indicator"
        style={{ left: `${100 * time / 168}%` }}
      > 
        <span className={`o-time-indicator-text o-time-tooltip--${time < 84 ? "left" : "right"}`}>
          Current Time: { TimeManager.toDateTimeString(time) }
        </span>
      </div>
    </>
  )
}

export default TimeIndicator;
