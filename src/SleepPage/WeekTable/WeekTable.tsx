import React from "react";

import TimeManager from "../TimeManager.js";
import SingleDay from "./SingleDay.js";
import SingleSleep from "./SingleSleep.js";
import TimeIndicator from "./TimeIndicator.js";
import "../styles/WeekTable.css";

/**
 * Hook for the entire week calendar
 */
const WeekTable = () => {
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
