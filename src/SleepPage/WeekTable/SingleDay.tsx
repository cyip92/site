import PropTypes from "prop-types";
import React from "react";

/**
 * Hook for a single day in a 7-day week, to be displayed within the weeklong calendar
 */
const SingleDay = props => {

  return (
    <>
      <div className="c-single-day">
        { props.day }
      </div>
    </>
  )
};

SingleDay.propTypes = {
  day: PropTypes.string.isRequired
};

export default SingleDay;
