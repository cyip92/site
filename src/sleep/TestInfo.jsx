import TimeManager from "./TimeManager.js";

export const TestInfo = () => {
  const data = TimeManager.testTimeData;
  const difference = TimeManager.testTimePresentOffset;

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

export default TestInfo;
