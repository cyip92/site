import React, { useState, useEffect } from "react";

import { LogEntryType } from "./index.ts";
import { singleLink  } from "./DevlogSidebar";

const EntryGroup = ({ year, entries, currentRoute, routeCallback } :
    { year: number, entries: Array<LogEntryType>, currentRoute: string, routeCallback: (arg: string) => void }) => {
  const [hidden, setHidden] = useState(!entries.some(e => e.route === currentRoute));

  // Force the group to be visible when it contains the current route
  useEffect(() => {
    setHidden(!entries.some(e => e.route === currentRoute));
  }, [currentRoute]);
  const toggleHidden = () => {
    const containsCurrentRoute = entries.some(e => e.route === currentRoute);
    if (!containsCurrentRoute) setHidden(!hidden);
  };

  const styleObject = { display: hidden ? "none" : "" };
  const yearIndicator = hidden ? "▶" : "▼";

  return (
    <div className="o-current-sidebar-group">
      <span onClick={toggleHidden}>
        <b>{ year }</b>
      </span>
      <span className="o-current-sidebar-indicator">{ yearIndicator }</span>
      <div style={styleObject}>
        { entries.map(entry => singleLink(entry, `${entry.index} - ${entry.title}`, routeCallback)) }
      </div>
    </div>
  );
};

export default EntryGroup;