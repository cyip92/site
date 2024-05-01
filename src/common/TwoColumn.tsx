import React, { CSSProperties } from "react";
import PropTypes from "prop-types";

import useWindowDimensions from "./WindowManager";

const TwoColumn = props => {
  // Force the content to be a single column if the viewport is too narrow (~85% of the intended web resolution)
  const { width } = useWindowDimensions();
  const isNarrow = width < 1200;
  const containerStyle: CSSProperties = {
    position: "relative",
    display: "flex",
    flexDirection: isNarrow ? "column" : "row",
    justifyContent: "space-between",
    alignItems: isNarrow ? "flex-start" : "center",
    width: "100%",
  };

  // Keep any column a fixed size if it contains only an image
  const totalWeight = props.leftWeight + props.rightWeight;
  const styleLeft: CSSProperties = {
    position: "relative",
    width: (isNarrow && props.children[0].type !== "img")
      ? "100%"
      : `${100 * props.leftWeight / totalWeight}%`,
    marginRight: isNarrow ? "0" : "0.5rem",
    marginBottom: isNarrow ? "0.5rem" : "0",
    border: props.leftBorder ? "0.15rem solid #888" : "",
    padding: props.leftBorder ? "0.5rem" : "",
  };
  const styleRight: CSSProperties = {
    position: "relative",
    width: (isNarrow && props.children[1].type !== "img")
      ? "100%"
      : `${100 * props.rightWeight / totalWeight}%`,
    marginLeft: isNarrow ? "0" : "0.5rem",
    marginBottom: isNarrow ? "0.5rem" : "0",
    border: props.rightBorder ? "0.15rem solid #888" : "",
    padding: props.rightBorder ? "0.5rem" : "",
  };

  return (
    <>
      <div style={containerStyle}>
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
