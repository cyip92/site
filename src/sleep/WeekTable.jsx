import { useState, useEffect } from "react";
import PropTypes from 'prop-types';

import TimeManager from "./TimeManager.js";
import './styles/WeekTable.css';

/**
 * Hook for a single day in a 7-day week, to be displayed within the weeklong calendar
 */
const SingleDay = props => {

  return (
    <>
      <div className="c-single-day">
        { props.day }
      </div>
    </>
  )
}

SingleDay.propTypes = {
  day: PropTypes.string.isRequired
}

/**
 * Hook for a box representing a single sleep interval on the calendar
 */
const SingleSleep = props => {
  const shortenedString = hr => {
    return TimeManager.toDateTimeString(hr).replace(/(...).*day/, "$1");
  }

  return (
    <>
      <div
        className="c-single-sleep"
        style={{ left: `${100 * (props.offset / 168)}%` }}
      >
        <span className={`o-sleep-box-tooltip o-sleep-box-tooltip--${props.offset < 84 ? "left" : "right"}`}>
          { shortenedString(props.offset) } to { shortenedString(props.offset + 4) } 
        </span>
      </div>
    </>
  )
}

SingleSleep.propTypes = {
  offset: PropTypes.number.isRequired
}

/**
 * Hook for the line (and its tooltip) indicating the current time of week on the calendar
 */
const TimeIndicator = props => {
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
};

/**
 * Hook for the entire week calendar
 */
export const WeekTable = () => {
  return (
    <>
      <div className="c-full-week">
        <div className="c-days">
          { TimeManager.days.map(d => <SingleDay day={d} key={d} />) }
        </div>
        <div className="c-sleep">
          { TimeManager.sleepTimes.map(o => <SingleSleep offset={o} key={o} />) }
        </div>
        <TimeIndicator color="red" />
      </div>
    </>
  )
}

export default WeekTable;
