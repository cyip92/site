import React from "react";
import PropTypes from "prop-types";

import TimeManager from "../TimeManager";

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
};

SingleSleep.propTypes = {
  offset: PropTypes.number.isRequired
};

export default SingleSleep;