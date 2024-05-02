import React, { useState, useEffect, CSSProperties } from "react";

import { LogEntryType } from "./index.ts";
import { singleLink  } from "./DevlogSidebar";

const EntryGroup = ({ year, entries, currentRoute, routeCallback } :
    { year: number, entries: Array<LogEntryType>, currentRoute: string, routeCallback: (arg: string) => void }) => {
  const [hidden, setHidden] = useState(!entries.some(e => e.route === currentRoute));

  // Force the group to be visible when it contains the current route
  const containsCurrentRoute = entries.some(e => e.route === currentRoute);
  useEffect(() => {
    setHidden(!containsCurrentRoute);
  }, [currentRoute]);
  const toggleHidden = () => {
    if (!containsCurrentRoute) setHidden(!hidden);
  };

  const yearHeaderStyle: CSSProperties = {
    cursor: containsCurrentRoute ? "not-allowed" : "pointer",
    fontWeight: "bold",
    userSelect: "none",
    borderStyle: hidden ? "outset" : "inset",
  }
  const entryListStyle = {
    display: hidden ? "none" : ""
  };
  const yearIndicator = hidden ? "▶" : "▼";

  return (
    <div className="o-current-sidebar-group">
      <span
        style={yearHeaderStyle}
        className="o-sidebar-year"
        onClick={toggleHidden}
      >
        { year }
      </span>
      <span className="o-current-sidebar-indicator">{ yearIndicator }</span>
      <div style={entryListStyle}>
        { entries.map(entry => singleLink(entry, `${entry.index} - ${entry.title}`, routeCallback)) }
      </div>
    </div>
  );
};

export default EntryGroup;