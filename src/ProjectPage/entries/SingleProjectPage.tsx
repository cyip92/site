import { Helmet, HelmetProvider } from "react-helmet-async";
import { Link } from "react-router-dom";
import React from "react";

import { ProjectType } from "../ProjectPage";
import ".././ProjectPage.css";
import "./AntimatterDimensionsProjectPage.css";

const SingleProjectPage = ({ projectData } : { projectData: ProjectType }) => {
  return (
    <>
      <HelmetProvider>
        <Helmet>
          <title>Projects | { projectData.title }</title>
        </Helmet>
      </HelmetProvider>
      <div className="c-page-layout c-project-layout c-grayscale-content-bg">
        <Link to="/projects" className="o-return-link">
          <button>
            { `< Back to Project List` }
          </button>
        </Link>
        <div className="c-centered-image">
          <u><h1>{ projectData.title }</h1></u>
        </div>
        { projectData.component?.() }
      </div>
    </>
  )
}

export default SingleProjectPage;
