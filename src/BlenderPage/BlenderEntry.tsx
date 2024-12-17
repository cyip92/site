import React, { useState } from "react";

import "./styles/BlenderPage.css";

const BlenderEntry = (props) => {
  const info = props.entryInfo;
  const [collapsed, setCollapsed] = useState(true);
  const toggleState = () => { setCollapsed(!collapsed);
  };

  return (
    <>
      {
        collapsed
          ?
            <div className="c-collapsed-entry">
              <img
                src={ info.image } 
                className="c-img" 
                onClick={toggleState}
              />
              <div className="c-collapsed-entry-info">
                <div>
                  <b>Week { info.week } - {info.title}</b> (<i>{ info.date }</i>)
                </div>
                <br />
                { info.short }
                <span
                  className="o-collapse-toggle"
                  onClick={toggleState}
                >
                  Show Details
                </span>
              </div>
            </div>
          : 
          <div className="c-expanded-entry">
            <h3>Week { info.week } - {info.title}</h3>
            <i>Made by { info.date }</i>
            <div
              className="o-collapse-toggle"
              onClick={toggleState}
            >
              Hide Details
            </div>
            <br />
            {
              /*
              Not good general practice as it's a potential XSS attack vulnerability, but this is safe
              in this limited case due to the raw HTML being strictly set strictly my own internal hard-coded
              strings here and not by any external sources.
              TODO: Update this if/when I move my content to an external CMS
              */
            }
            <div dangerouslySetInnerHTML={{ __html: info.description }} />
            <br />
            <img 
              src={ info.image } 
              className="c-img" 
              onClick={toggleState}
            />
            <br />
            <div dangerouslySetInnerHTML={{ __html: info.technical }} />
          </div>
      }
    </>
  )
}

export default BlenderEntry;
