import { Link, useLocation } from "react-router-dom";

import LogEntries from './entries/index.js';
import './styles/DevlogPage.css';

function singleLink(route, current, text, key) {
  const isCurrentRoute = current === route;
  return (
    <div key={key}>
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
      { singleLink("/ADdevlog", currentRoute, "Introduction", "intro") }
      { singleLink("/ADdevlog/FAQ", currentRoute, "FAQ Page", "faq") }
      <div>
        Entries:
        <br />
        {
          Object.keys(LogEntries.Entries).map(key =>
            singleLink(`/ADdevlog/${key}`, currentRoute, `${key} - ${LogEntries.Entries[key].title}`, `entry${key}`)
          )
        }
      </div>
    </>
  )
}

export default DevlogSidebar;
