import { useEffect } from 'react';
import { Link } from "react-router-dom";
import PropTypes from 'prop-types';
import "./ProjectPage.css";

import research from '../assets/projects/physics/vacuum_chamber.png';
import logoAD from '../assets/projects/AD_loading.png';
import noImg from '../assets/projects/no_image.png';

import PhysicsProjectPage from './entries/PhysicsProjectPage';
import AntimatterDimensionsProjectPage from './entries/AntimatterDimensionsProjectPage';

export const Projects = [
  {
    id: "physics",
    image: research,
    title: "Rare Earth Laser Physics",
    category: "Education",
    date: "September 2014 to March 2021",
    fields: "Atomic/Optical Physics, Electronics, Python",
    description: `Research on the element Holmium, under the guidance of Mark Saffman, with the intent to
      control ultracold Holmium atoms for use in Quantum Computing.`,
    component: PhysicsProjectPage,
  },
  {
    id: "AD",
    image: logoAD,
    title: "Antimatter Dimensions",
    category: "Game Development",
    date: "June 2018 to July 2023",
    fields: "HTML, CSS, Javascript, Vue.js",
    description: `An incremental game with multiple layers of unlockable content, very thorough automation
      features, and many paradigm shifts which alter the gameplay loop.`,
    component: AntimatterDimensionsProjectPage,
  },
  {
    id: "platformer",
    image: noImg,
    title: "2D Puzzle Platformer",
    category: "Game Development",
    date: "Ongoing, rewriting due to Unity changes",
    fields: "Godot, GDScript",
    description: `A 2D puzzle platformer game with a movement gimmick and set of mechanics which we would
      rather remain confidential until we can present a Minimum Viable Product.`
  },
  {
    id: "incremental",
    image: noImg,
    title: "Idle/Incremental Webgame",
    category: "Game Development",
    date: "Ongoing, design drafting started February 2023",
    fields: "HTML, CSS, Javascript, Vue.js",
    description: `An incremental game centered around a resource system which appears to be novel and
      not seen in other incrementals, together the Lead Design Consultant for Antimatter Dimensions.`
  },
];

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
}

SingleProject.propTypes = {
  project: PropTypes.object.isRequired,
}

export const ProjectPage = () => {
  useEffect(() => {
    document.title = "Long-term Projects";
    document.getElementById("favicon").setAttribute('href', `${window.rootURL}/favicon/stack.png`);
  }, []);

  return (
    <>
      <div className="c-page-layout c-project-layout c-grayscale-content-bg">
        <div className="c-image-bg c-project-list-bg" />
        <h1>Long-term Projects</h1>
        <div className="o-project-intro">
          Here is a list of the larger projects which I have worked on.
          <br />
          Some have been completed, while others are under ongoing development:
        </div>
        <br />
        <div className="c-project-cards">
          { Projects.map(p => <SingleProject project={p} key={p.title} />) }
        </div>
      </div>
    </>
  )
}

export default ProjectPage;
