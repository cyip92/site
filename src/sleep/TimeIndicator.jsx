import PropTypes from 'prop-types';
import TimeManager from "./TimeManager.js";
import { useState, useEffect } from "react";
import './TimeIndicator.css';

export const TimeIndicator = props => {
  const [time, setTime] = useState(TimeManager.currentTime);
  useEffect(() => {
    const interval = setInterval(() => {
      setTime(TimeManager.currentTime);
    }, 1000);
    return () => clearInterval(interval);
  }, []);

  return (
    <>
      <div
        className="o-time-indicator"
        style={
          {
            left: `${100 * time / 168}%`,
            backgroundColor: props.color,
          }
        }
      > 
        <span className={`o-time-indicator-text o-time-tooltip--${time < 84 ? "left" : "right"}`}>
          Current Time: { TimeManager.toDateTimeString(time) }
        </span>
      </div>
    </>
  )
}

TimeIndicator.propTypes = {
  color: PropTypes.string.isRequired
}

export default TimeIndicator;
