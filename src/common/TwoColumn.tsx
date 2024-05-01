import React, { CSSProperties } from "react";
import PropTypes from "prop-types";

const TwoColumn = props => {
  const totalWeight = props.leftWeight + props.rightWeight;
  const styleLeft: CSSProperties = {
    position: "relative",
    width: `${100 * props.leftWeight / totalWeight}%`,
    marginRight: "0.5rem",
    border: props.leftBorder ? "0.15rem solid #888" : "",
    padding: props.leftBorder ? "0.5rem" : "",
  };
  const styleRight: CSSProperties = {
    position: "relative",
    width: `${100 * props.rightWeight / totalWeight}%`,
    marginLeft: "0.5rem",
    border: props.rightBorder ? "0.15rem solid #888" : "",
    padding: props.rightBorder ? "0.5rem" : "",
  };

  return (
    <>
      <div className="c-two-columns">
        <div style={styleLeft}>
          { props.children[0] }
        </div>
        <div style={styleRight}>
          { props.children[1] }
        </div>
      </div>
    </>
  );
};

TwoColumn.propTypes = {
  leftWeight: PropTypes.number.isRequired,
  rightWeight: PropTypes.number.isRequired,
  leftBorder: PropTypes.bool,
  rightBorder: PropTypes.bool,
  children: PropTypes.node.isRequired,
};

export default TwoColumn;
