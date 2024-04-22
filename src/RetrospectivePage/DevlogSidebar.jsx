import { Link, useLocation } from "react-router-dom";

import LogEntries from './entries/index.js';
import './styles/DevlogPage.css';

function singleLink(entry, current, text) {
  const route = `/ADdevlog${entry.route}`;
  const isCurrentRoute = current === route;
  return (
    <div key={route}>
      {
        isCurrentRoute
          ? <span className="o-current-sidebar-indicator">▶</span>
          : null
      }
      <Link to={route}>{text}</Link> 
    </div>
  )
}

export const DevlogSidebar = () => {
  const currentRoute = useLocation().pathname;
  return (
    <>
      { singleLink(LogEntries.Introduction, currentRoute, "Introduction") }
      { singleLink(LogEntries.FAQ, currentRoute, "FAQ Page") }
      <div>
        Entries:
        <br />
        {
          Object.values(LogEntries)
            .filter(entry => entry.posted)
            .map(entry => singleLink(entry, currentRoute, `${entry.index} - ${entry.title}`))
        }
      </div>
    </>
  )
}

export default DevlogSidebar;
