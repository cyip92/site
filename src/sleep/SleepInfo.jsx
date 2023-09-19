import TimeManager from "./TimeManager.js";
import TimeInput from "./TimeInput";
import { useState, useEffect } from "react";
import "./SleepInfo.css";

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
      <div className="c-sleep-info">
        I am currently <b>{ data.isSleeping ? "sleeping" : "awake"}</b> and
        will be until <b>{ TimeManager.toDateTimeString(data.nextChangeAt) }</b> in your time zone.
        (This is in { TimeManager.toDurationString(data.nextChangeIn) }.)
        <br />
        <br />
        <TimeInput />
      </div>
    </>
  )
}

export default SleepInfo;
