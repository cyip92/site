import TimeManager from "./TimeManager.js";
import "./SleepInfo.css";

export const SleepInfo = () => {
  const sleepData = TimeManager.fullSleepData();

  return (
    <>
      <div className="c-sleep-info">
        I am currently <b>{ sleepData.isSleeping ? "sleeping" : "awake"}</b> and
        will be until <b>{ TimeManager.toDateTimeString(sleepData.nextChangeAt) }</b> in your time zone.
        (This is in { TimeManager.toDurationString(sleepData.nextChangeIn) }.)
      </div>
    </>
  )
}

export default SleepInfo;
