import React from "react";
import { Link } from "react-router-dom";

import { LogEntryType } from "./index.js";
import LogEntries from "./index.js";

const DevlogNav = ({ entry, routeCallback } : { entry: LogEntryType, routeCallback: (arg: string) => void }) => {
  const prevEntry = LogEntries[entry.prev!];
  const nextEntry = LogEntries[entry.next!];

  return (
    <div className="c-footer-nav">
      {
        prevEntry
          ? <div className="o-footer-left">
              ← Previous Entry
              <br />
              <Link
                to={`/ADdevlog${prevEntry.route}`}
                onClick={() => routeCallback(prevEntry.route)}
              >
                { prevEntry.title }
              </Link>
            </div>
          : <div />
      }
      {
        nextEntry
          ? <div className="o-footer-right">
              Next Entry →
              <br />
              <Link
                to={`/ADdevlog${nextEntry.route}`}
                onClick={() => routeCallback(nextEntry.route)}
              >
                { nextEntry.title }
              </Link>
            </div>
          : null
      }
    </div>
  )
};

export default DevlogNav;
