import SingleDay from "./SingleDay";
import SingleSleep from "./SingleSleep";
import TimeIndicator from "./TimeIndicator";
import TimeManager from "./TimeManager.js";
import './WeekTable.css';

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
        <TimeIndicator />
      </div>
    </>
  )
}

export default WeekTable;
