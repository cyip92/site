import { useEffect } from 'react';
import PropTypes from 'prop-types';

import LogEntries from './entries/index.js';
import DevlogSidebar from './DevlogSidebar.jsx';
import './styles/DevlogPage.css';

export const DevlogPage = props => {
  useEffect(() => {
    document.title = "The Reality Update";
  }, []);

  // The content for the text pane of this page is pulled from a file within the entries subfolder
  const ContentObject = props.specialKey
    ? LogEntries[props.specialKey]
    : LogEntries.Entries[props.entryKey];

  return (
    <>
      <div className="c-devlog-full-page">
        <div className="c-devlog-sidebar">
          <DevlogSidebar />
        </div>
        <div className="c-devlog-main-content">
          <h1>{ ContentObject.title }</h1>
          <div className="o-devlog-dates">
            <i>
              { ContentObject.posted ? `Entry Posted: ${ContentObject.posted}` : null }
              <br />
              { ContentObject.span ? `Development: ${ContentObject.span}` : null }
            </i>
          </div>
          <ContentObject.content />
        </div>
      </div>
    </>
  )
}

DevlogPage.propTypes = {
  specialKey: PropTypes.string,
  entryKey: PropTypes.number
}

export default DevlogPage;
