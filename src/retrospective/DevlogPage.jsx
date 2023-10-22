import { Link } from "react-router-dom";
import { useEffect } from 'react';
import PropTypes from 'prop-types';

import LogEntries from './entries/index.js';
import DevlogSidebar from './DevlogSidebar.jsx';
import './styles/DevlogPage.css';

const DevlogNav = props => {
  const prevEntry = LogEntries[props.entry.prev];
  const nextEntry = LogEntries[props.entry.next];

  return (
    <div className="c-footer-nav">
      {
        prevEntry
          ? <div className="o-footer-left">
              🡄 Previous Entry
              <br />
              <Link to={`/ADdevlog${prevEntry.route}`}>{ prevEntry.title }</Link>
            </div>
          : <div />
      }
      {
        nextEntry
          ? <div className="o-footer-right">
              Next Entry 🡆
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
}

export const DevlogPage = props => {
  useEffect(() => {
    document.title = "The Reality Update";
  }, []);

  // The content for the text pane of this page is pulled from a file within the entries subfolder
  const entry = props.entry;

  return (
    <>
      <div className="c-page-layout c-devlog-full-page">
        <div className="c-devlog-sidebar">
          <DevlogSidebar />
        </div>
        <div className="c-devlog-main-content">
          <h1>{ entry.title }</h1>
          <div className="o-devlog-dates">
            <i>
              { entry.posted ? `Entry Posted: ${entry.posted}` : null }
              <br />
              { entry.span ? `Development: ${entry.span}` : null }
            </i>
          </div>
          <entry.content />
          <DevlogNav entry={entry} />
        </div>
      </div>
    </>
  )
}

DevlogPage.propTypes = {
  entry: PropTypes.object
}

export default DevlogPage;
