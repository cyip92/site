import { useState } from 'react';
import TimeManager from "./TimeManager.js";
import TestInfo from "./TestInfo";
import './TimeInput.css';

export const TimeInput = () => {
  // We want to make sure both are set when changing any of the settings, but also have to make sure they don't
  // call each other recursively
  const setTestTime = time => {
    TimeManager.testTime = Date.parse(time);
    setTime(time);
  };
  const setTestZone = (index, dir) => {
    const newIndex = index + dir;
    if (TimeManager.offsetList[newIndex] === undefined) return index;
    TimeManager.testZoneIndex = newIndex;
    TimeManager.testZone = TimeManager.offsetList[newIndex];
    return newIndex;
  };

  // Setting the time is straightforward, we just need to do some parsing to set the initial time to now
  // .toISOString() returns a specifically-formatted string in UTC, so we need to shift and reformat the string
  const nowString = new Date(Date.now() + TimeManager.localTimeZone * 3.6e6).toISOString().replace(/:.{7}$/, "");
  const [testTime, setTime] = useState(nowString);
  const [testZoneIndex, setZoneIndex] = useState(TimeManager.offsetList.indexOf(TimeManager.localTimeZone));

  // Functions passed into HTML elements, structured so that if one field is changed, the other gets the default value
  const updateTime = time => {
    setTestZone(testZoneIndex, 0);
    setTestTime(time);
  };
  const decZone = () => setZoneIndex(index => {
    setTestTime(testTime);
    return setTestZone(index, -1);
  });
  const incZone = () => setZoneIndex(index => {
    setTestTime(testTime);
    return setTestZone(index, 1);
  });
  const resetTest = () => {
    TimeManager.testTime = undefined;
    TimeManager.testZoneIndex = undefined;
    TimeManager.testZone = undefined;
    setZoneIndex(TimeManager.offsetList.indexOf(TimeManager.localTimeZone));
    setTime(nowString);
  }

  return (
    <>
      <div>
        <b>Test Time Options:</b>
        <br />
        You can check my sleep at some other specific time in any time zone
        by adjusting the options below.
        <br />
        <div className="c-single-option">
          Selected Date and Time:
          <input
            type="datetime-local"
            name="inputTime"
            min="1970-01-01T00:00"
            max="9999-12-31T00:00"
            value={testTime}
            onChange={e => updateTime(e.target.value)}
          />
        </div>
          <div className="c-single-option">
          Time zone:
          <span className="c-time-zone">
            <button className="o-time-zone-btn" onClick={decZone}>-</button>
            <span>
              { TimeManager.formatUTCString(TimeManager.offsetList[testZoneIndex]) }
            </span>
            <button className="o-time-zone-btn" onClick={incZone}>+</button>
          </span>
        </div>
        <button className="o-reset-btn" onClick={resetTest}>Reset to current time</button>
        <div className="c-results">
          <b>Result: </b>
          {
            TimeManager.hasTestTime
              ? <TestInfo />
              : <i>Test options have not been changed and are set to right now and your time zone.</i>
          }
        </div>
      </div>
    </>
  )
}

export default TimeInput;
