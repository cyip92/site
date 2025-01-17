import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import React from "react";

/**
 * Hook for a box representing a single project, with data pulled from the Projects object above
 */
const SingleProjectCard = props => {
  const proj = props.project;
  return (
    <>
      <div className="c-single-project">
        <img src={proj.cardImg} className="c-img-fixed-size" />
        <div className="o-project-card-title">  
          <b>{ proj.title }</b>
        </div>
        <i>{ proj.category }</i>
        <i>{ proj.date }</i>
        <i>{ proj.fields }</i>
        <br />
        { proj.description }
        <br />
        { proj.note
          ? <i><br />{ proj.note }</i>
          : "" }
        <br />
        <div>
          {
            proj.component
              ? <Link to={`/projects/${proj.id}`}><button>More Information</button></Link>
              : <button disabled>More Info Unavailable</button>
          }
        </div>
      </div>
    </>
  )
};

SingleProjectCard.propTypes = {
  project: PropTypes.object.isRequired,
};

export default SingleProjectCard;
