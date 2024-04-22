import { useState, useEffect } from "react";
import React from "react";

import TimeManager from "../TimeManager.js";

/**
 * Hook for all the text shown for the results of a given input time (separated out for readability)
 */
const OutputInfo = () => {
  const data = TimeManager.inputTimeData;
  const diffInput = TimeManager.inputTimePresentOffset;
  const [diffNext, setDiffNext] = useState(diffInput + data.nextChangeIn);
  
  // One of the displayed values is in reference to the present time
  useEffect(() => {
    const interval = setInterval(() => {
      setDiffNext(TimeManager.inputTimePresentOffset + TimeManager.inputTimeData.nextChangeIn);
    }, 1000);
    return () => clearInterval(interval);
  }, []);

  return (
    <>
      Your input time is <i>{ TimeManager.toDurationStringApprox(diffInput) }</i>.
      <br />
      <span>
        I { diffInput > 0 ? "will be " : "was "} <b>{ data.isSleeping ? "sleeping " : "awake " }</b>
        at this time and
        { diffNext > 0 ? " will be " : " would have been "}
        until <b>{ TimeManager.toDurationString(data.nextChangeIn) }</b> later
        ({TimeManager.toDurationStringApprox(diffNext)}).
        <br />
        <i>{ data.extra ? `Note: This may not be true - ${data.extra}` : "" }</i>
      </span>
    </>
  )
};

export default OutputInfo;
