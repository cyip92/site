import { useLocation } from "react-router-dom";
import { Helmet, HelmetProvider } from "react-helmet-async";
import PropTypes from "prop-types";
import React, { useState } from "react";

import DevlogSidebar from "./DevlogSidebar.jsx";
import DevlogNav from "./DevlogNav.js";
import HeaderDateInfo from "./HeaderDateInfo.js";
import "./styles/DevlogPage.css";
import "./styles/Entries.css";

const DevlogPage = props => {
  // The state of DevlogSidebar needs to be changed when DevlogNav is interacted with; this is the first
  // common parent component they have. Note that the substring(9) comes from the full route starting with
  // "/ADdevlog", which is an extra 9 characters.
  const [currentRoute, setCurrentRoute] = useState(useLocation().pathname.substring(9));
  const routeCallback = (route: string) => setCurrentRoute(route);

  // The content for the text pane of this page is pulled from a file within the entries subfolder
  const entry = props.entry;

  const containerClass = `c-page-layout c-devlog-full-page
    ${useLocation().pathname !== "/ADdevlog/" ? "c-grayscale-content-bg" : ""}`;
  const bgStyle = {
    backgroundImage: `url("${window.rootURL}/bg/${entry.bgImage}")`,
    filter: entry.bgFilter,
  };

  return (
    <>
      <HelmetProvider>
        <Helmet>
          <title>
            {
              entry.posted
                ? `AD Devlog | ${entry.title}`
                : "Reality Update Retrospective"
            }
          </title>
        </Helmet>
      </HelmetProvider>
      <div className={containerClass}>
        <div
          className="c-image-bg"
          style={bgStyle}
        />
        <DevlogSidebar
          currentRoute={currentRoute}
          routeCallback={routeCallback}
        />
        <div className="c-devlog-main-content">
          <h1>{ entry.title }</h1>
          {
            entry.posted || entry.span
              ? <div className="o-devlog-dates">
                  <HeaderDateInfo
                    name="Entry Posted"
                    info={entry.posted}
                  />
                  <br />
                  <HeaderDateInfo
                    name="Development Period"
                    info={entry.span}
                  />
                </div>
              : null
          }
          <entry.content />
          <DevlogNav
            entry={entry}
            routeCallback={routeCallback}
          />
        </div>
      </div>
    </>
  )
};

DevlogPage.propTypes = {
  entry: PropTypes.object
};

export default DevlogPage;
