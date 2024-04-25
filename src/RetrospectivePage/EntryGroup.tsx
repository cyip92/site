import React, { useState, useEffect } from "react";

import { LogEntryType } from "./index.ts";
import { singleLink  } from "./DevlogSidebar";

const EntryGroup = ({ year, entries, initHide } :
    { year: number, entries: Array<LogEntryType>, initHide: boolean }) => {
  const [hidden, setHidden] = useState(initHide);

  const styleObject = { display: hidden ? "none" : "" };
  const yearIndicator = hidden ? "▶" : "▼";

  return (
    <div className="o-current-sidebar-group">
      <span onClick={() => setHidden(!hidden)}>
        <b>{ year }</b>
      </span>
      <span className="o-current-sidebar-indicator">{ yearIndicator }</span>
      <div style={styleObject}>
        { entries.map(entry => singleLink(entry, `${entry.index} - ${entry.title}`)) }
      </div>
    </div>
  );
};

export default EntryGroup;