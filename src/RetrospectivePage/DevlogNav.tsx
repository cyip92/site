import React from "react";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";

import LogEntries from "./index.js";

const DevlogNav = props => {
  const prevEntry = LogEntries[props.entry.prev];
  const nextEntry = LogEntries[props.entry.next];

  return (
    <div className="c-footer-nav">
      {
        prevEntry
          ? <div className="o-footer-left">
              ← Previous Entry
              <br />
              <Link to={`/ADdevlog${prevEntry.route}`}>{ prevEntry.title }</Link>
            </div>
          : <div />
      }
      {
        nextEntry
          ? <div className="o-footer-right">
              Next Entry →
              <br />
              <Link to={`/ADdevlog${nextEntry.route}`}>{ nextEntry.title }</Link>
            </div>
          : null
      }
    </div>
  )
};

DevlogNav.propTypes = {
  entry: PropTypes.object
};

export default DevlogNav;
