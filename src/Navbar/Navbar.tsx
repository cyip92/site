import { Link, useLocation } from "react-router-dom";
import { useState } from "react";
import React from "react";

import "./Navbar.css";

const MainTabs = [
  {
    route: "/",
    text: "Home Page"
  },
  {
    route: "/about",
    text: "About Me"
  },
  {
    route: "/projects",
    text: "Long-term Projects"
  }
];

const TabGroups = [
  {
    name: "Side Projects",
    subtabs: [
      {
        route: "/sleep",
        text: "Weekly Sleep Pattern"
      },
      {
        route: "/ADdevlog/",
        text: "Antimatter Dimensions Retrospective"
      },
      {
        route: "/blob",
        text: "You can pat the blob"
      }
    ]
  }
];

const Navbar = () => {
  const currentRoute = useLocation().pathname;
  const matchedRoute = route => (route === "/"
    ? currentRoute === "/"
    : currentRoute.startsWith(route));

  // Subtab hover state tracking
  const [isHovering, setIsHovering] = useState(false);

  return (
    <>
      <div className="c-main-options">
        {
          MainTabs.map(tab =>
            <Link
              className={`o-single-option ${matchedRoute(tab.route) ? "o-current-option" : ""}`}
              to={tab.route}
              key={tab.text}
            >
              { tab.text }
            </Link>
          )
        }
        <div className="c-tab-group">
          {
            TabGroups.map(group =>
              <div key={group.name}>
                <div
                  className="o-single-option o-tab-group"
                  onMouseEnter={e => { setIsHovering(true) }}
                  onMouseLeave={e => { setIsHovering(false) }}
                >
                  ⇃ { group.name }
                </div>
                <div
                  className="c-subtab-group"
                  onMouseEnter={e => { setIsHovering(true) }}
                  onMouseLeave={e => { setIsHovering(false) }}
                  style={{ display: isHovering ? "block" : "none" }}
                >
                  {
                    group.subtabs.map(tab =>
                      <Link
                        className={`o-subtab-option ${matchedRoute(tab.route) ? "o-current-subtab" : ""}`}
                        to={tab.route}
                        key={tab.text}
                      >
                        { tab.text }
                      </Link>
                    )
                  }
                </div>
              </div>
            )
          }
        </div>
      </div>
    </>
  )
}

export default Navbar;
