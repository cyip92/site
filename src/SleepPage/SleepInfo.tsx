import React from "react";
import TimeManager from "./TimeManager.js";
import { useState, useEffect } from "react";

export const SleepInfo = () => {
  const [data, setData] = useState(TimeManager.fullSleepData());
  useEffect(() => {
    const interval = setInterval(() => {
      setData(TimeManager.fullSleepData());
    }, 1000);
    return () => clearInterval(interval);
  }, []);

  return (
    <>
      <div>
        I am currently <b>{ data.isSleeping ? "sleeping" : "awake"}</b> and
        will be until <b>{ TimeManager.toDateTimeString(data.nextChangeAt) }</b> in your time zone.
        (This is in { TimeManager.toDurationString(data.nextChangeIn) }.)
      </div>
    </>
  )
}

export default SleepInfo;
