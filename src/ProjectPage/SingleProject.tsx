import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import React from "react";

/**
 * Hook for a box representing a single project, with data pulled from the Projects object above
 */
const SingleProject = props => {
  const proj = props.project;

  return (
    <>
      <div className="c-single-project">
        {
          proj.image
            ? <img src={proj.image} className="c-img-fixed-size" />
            : null
        }
        <b>{ proj.title }</b>
        <i>{ proj.category }</i>
        <i>{ proj.date }</i>
        <i>{ proj.fields }</i>
        <br />
        { proj.description }
        <br />
        <br />
        <div>
          {
            proj.component
              ? <Link to={`/projects/${proj.id}`}><button>More Information</button></Link>
              : <button disabled>Info Unavailable</button>
          }
        </div>
      </div>
    </>
  )
};

SingleProject.propTypes = {
  project: PropTypes.object.isRequired,
};

export default SingleProject;
