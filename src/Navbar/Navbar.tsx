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
        route: "/ADdevlog/intro",
        text: "Antimatter Dimensions Retrospective"
      },
      {
        route: "/blender",
        text: "3D Modeling"
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
        {
          TabGroups.map(group =>
            <div className="c-tab-group" key={group.name}>
              <div className="o-single-option">
                ⇃ { group.name }
              </div>
              <div className="c-subtab-group">
                {
                  group.subtabs.map(tab =>
                    <Link
                      className={`o-subtab-option ${matchedRoute(tab.route) ? "o-current-subtab" : ""}`}
                      to={tab.route}
                      key={tab.text}
                    >
                      <div className="o-subtab-text">
                        { tab.text }
                      </div>
                    </Link>
                  )
                }
              </div>
            </div>
          )
        }
      </div>
    </>
  )
}

export default Navbar;
