import { Link, useLocation } from "react-router-dom";
import React from "react";

import LogEntries from "./index.ts";
import { LogEntryType } from "./index.ts";
import EntryGroup from "./EntryGroup.tsx";
import "./styles/DevlogPage.css";

export function singleLink(entry, text, callback) {
  const route = `/ADdevlog${entry.route}`;
  const isCurrentRoute = useLocation().pathname === route;
  return (
    <div key={route}>
      {
        isCurrentRoute
          ? <span className="o-current-sidebar-indicator">◆</span>
          : null
      }
      <Link
        to={route}
        onClick={() => callback(entry.route)}
      >
        {text}
      </Link> 
    </div>
  )
};

// Hard-coded groupings by year; code is simpler to read than dynamically regex-matching dates (note zero-indexing)
const startYear = 2018;
const startIndex = [0, 4, 16, 23, 28, 32];

const DevlogSidebar = ({ currentRoute, routeCallback } :
  { currentRoute: string, routeCallback: (arg: string) => void }) => {

  const listEntries = Object.values(LogEntries).filter(entry => entry.posted);
  const listGroups: Array<Array<LogEntryType>> = [];
  for (let i = 0; i < startIndex.length - 1; i++) {
    listGroups.push(listEntries.slice(startIndex[i], startIndex[i+1]));
  }

  return (
    <div className="c-devlog-sidebar">
      { singleLink(LogEntries.Introduction, "Introduction", routeCallback) }
      { singleLink(LogEntries.FAQ, "FAQ Page", routeCallback) }
      <br />
      <div className="o-divider" />
      <div>
        <h3>Entries:</h3>
        {
          listGroups.map((group, index) => 
            <EntryGroup
              key={group[0].key}
              year={startYear + index}
              entries={group}
              currentRoute={currentRoute}
              routeCallback={routeCallback}
            />
          )
        }
      </div>
      <div className="o-divider" />
      <br />
      { singleLink(LogEntries.Epilogue, "Epilogue", routeCallback) }
    </div>
  )
};

export default DevlogSidebar;
