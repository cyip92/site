import { useState } from 'react';
import TimeManager from "./TimeManager.js";
import './styles/TimeInput.css';

/**
 * Hook for all the text shown for the results of a given input time (separated out for readability)
 */
const OutputInfo = () => {
  const data = TimeManager.inputTimeData;
  const difference = TimeManager.inputTimePresentOffset;

  return (
    <>
      The specified time is <i>{ TimeManager.toDurationStringApprox(difference) }</i>.
      <br />
      <span>
        For this time I { difference > 0 ? "will be " : "was "}
        <b>{ data.isSleeping ? "sleeping" : "awake" }</b> and
        { difference > 0 ? " will be " : " would have been "}
        until <b>{ TimeManager.toDurationString(data.nextChangeIn) }</b> later.
        <br />
        <i>{ data.extra ? `Note: ${data.extra}` : "" }</i>
      </span>
    </>
  )
}

/**
 * Hook for all the input fields for custom time checking
 */
export const TimeInput = () => {
  // We want to make sure both are set when changing any of the settings, but also have to make sure they don't
  // call each other recursively
  const setInputTime = time => {
    TimeManager.inputTime = Date.parse(time);
    setTime(time);
  };
  const setInputZone = (index, dir) => {
    const newIndex = index + dir;
    if (TimeManager.offsetList[newIndex] === undefined) return index;
    TimeManager.inputZoneIndex = newIndex;
    TimeManager.inputZone = TimeManager.offsetList[newIndex];
    return newIndex;
  };

  // Setting the time is straightforward, we just need to do some parsing to set the initial time to now
  // .toISOString() returns a specifically-formatted string in UTC, so we need to shift and reformat the string
  const nowString = new Date(Date.now() + TimeManager.localTimeZone * 3.6e6).toISOString().replace(/:.{7}$/, "");
  const [inputTime, setTime] = useState(nowString);
  const [inputZoneIndex, setZoneIndex] = useState(TimeManager.offsetList.indexOf(TimeManager.localTimeZone));

  // Functions passed into HTML elements, structured so that if one field is changed, the other gets the default value
  const updateTime = time => {
    setInputZone(inputZoneIndex, 0);
    setInputTime(time);
  };
  const decZone = () => setZoneIndex(index => {
    setInputTime(inputTime);
    return setInputZone(index, -1);
  });
  const incZone = () => setZoneIndex(index => {
    setInputTime(inputTime);
    return setInputZone(index, 1);
  });
  const resetInput = () => {
    TimeManager.inputTime = undefined;
    TimeManager.inputZoneIndex = undefined;
    TimeManager.inputZone = undefined;
    setZoneIndex(TimeManager.offsetList.indexOf(TimeManager.localTimeZone));
    setTime(nowString);
  }

  return (
    <>
      <div>
        <b>Input Time Options:</b>
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
            value={inputTime}
            onChange={e => updateTime(e.target.value)}
          />
        </div>
          <div className="c-single-option">
          Time zone:
          <span className="c-time-zone">
            <button className="o-time-zone-btn" onClick={decZone}>-</button>
            <span>
              { TimeManager.formatUTCString(TimeManager.offsetList[inputZoneIndex]) }
            </span>
            <button className="o-time-zone-btn" onClick={incZone}>+</button>
          </span>
        </div>
        <button className="o-reset-btn" onClick={resetInput}>Reset to current time</button>
        <div className="c-results">
          <b>Result: </b>
          {
            TimeManager.hasInputTime
              ? <OutputInfo />
              : <i>Input options have not been changed and are set to right now and your time zone.</i>
          }
        </div>
      </div>
    </>
  )
}

export default TimeInput;
