import { Helmet, HelmetProvider } from "react-helmet-async";
import React from "react";

import SingleProject from "./SingleProjectCard";
import PhysicsProjectPage from "./entries/PhysicsProjectPage";
import AntimatterDimensionsProjectPage from "./entries/AntimatterDimensionsProjectPage";
import physicsCard from "../assets/projects/physics/vacuum_chamber.png";
import adCard from "../assets/projects/AD_loading.png";
import glydeCard from "../assets/projects/glyde_flight_path.png";
import ror2Card from "../assets/projects/ror2_mod.png";
import sokobanCard from "../assets/projects/sokoban_UE_editor.png";
import manaForestCard from "../assets/projects/mana_forest_curve.png";
import missingCard from "../assets/projects/no_image.png";
import "./ProjectPage.css";

export const CompletedProjects: Array<ProjectType> = [
  {
    id: "physics",
    title: "Rare Earth Atomic Physics",
    category: "Education (PhD)",
    date: "September 2014 to March 2021",
    fields: "Atomic/Optical Physics, Electronics, Python",
    description: `Doctoral academic research on the element Holmium, under the guidance of Dr. Mark Saffman. The
      goal was to control ultracold Holmium atoms for use in neutral-atom Quantum Computing, and through my work
      we demonstrated the first ever long-term optically trapped Holmium cloud with a kinetic temperature of around
      100 micro-Kelvin.`,
    component: PhysicsProjectPage,
    cardImg: physicsCard,
  },
  {
    id: "AD",
    title: "Antimatter Dimensions",
    category: "Game Development",
    date: "June 2018 to July 2023",
    fields: "HTML, CSS, Javascript, Vue.js",
    description: `An incremental game with multiple "prestige layers" of unlockable content, very thorough automation
      features, and many paradigm shifts which alter the gameplay loop. The final version of the game was released
      at the end of 2022 and has had over a million downloads over its lifetime. It is playable for free online on
      any modern web broswer, through Steam, and on Android devices.`,
    component: AntimatterDimensionsProjectPage,
    cardImg: adCard,
  },
];

export const OngoingProjects: Array<ProjectType> = [
  {
    id: "glyde",
    title: "Glyde",
    category: "Game Development",
    date: "Ongoing, intermittent development started April 2024",
    fields: "Unreal Engine 5, Unreal Blueprints",
    description: `A casual and relaxing flight-based open world exploration game, based in a sky environment
      with numerous floating islands. Still in the early prototype stage of development; intended initial
      release is Summer 2025.`,
    note: `Collaborative work with my partner and possibly a few others.`,
    cardImg: glydeCard,
  },
  {
    id: "ror2",
    title: "Risk of Rain 2 Mod (unnamed)",
    category: "Game Development",
    date: "Ongoing, intermittent development started October 2024",
    fields: "Unity, C#, Blender",
    description: `A relatively simple mod for the roguelike game Risk of Rain 2, centred around a combination of
      the item printing mechanic and void items. Due to the lack of a 3D modeler in our team, I am also using this
      as an opportunity to learn Blender.`,
    note: `Collaborative work with a few online friends.`,
    cardImg: ror2Card,
  },
  {
    id: "sokoban",
    title: "Sokoban EX",
    category: "Game Development",
    date: "Ongoing, development started December 2024",
    fields: "Unreal Engine 5, Unreal Blueprints",
    description: `A simple sokoban (block-pusher puzzle) game made in Unreal Engine 5, primarily with the goal
      to self-teach skills for game development within UE5. Upon release the game will have will have additional
      mechanics beyond simply pushing crates onto goal tiles, adding to the depth of puzzle design.`,
    note: `Collaborative work with my partner.`,
    cardImg: sokobanCard,
  },
  {
    id: "mana_forest",
    title: "Mana Forest Idle",
    category: "Game Development",
    date: "Currently on pause; previous development occurred during May/June 2024",
    fields: "HTML, CSS, Javascript, Vue.js",
    description: `An web incremental game built around a relatively unique resource system which we have not seen in
      other incrementals. Currently not in active development, but we wish to continue at some point in the future.`,
    note: `Collaborative work with the Lead Design Consultant and one of the art designers for Antimatter Dimensions.`,
    cardImg: manaForestCard,
  },
];

export type ProjectType = {
  id: string;
  title: string;
  category: string;
  date: string;
  fields: string;
  description: string;
  note?: string;
  component?: () => React.JSX.Element;
  cardImg: string;
};

export const ProjectPage = () => {
  return (
    <>
      <HelmetProvider>
        <Helmet>
          <title>Long-term Projects</title>
        </Helmet>
      </HelmetProvider>
      <div className="c-page-layout c-project-layout c-grayscale-content-bg">
        <div className="c-image-bg c-project-list-bg" />
        <h1>Completed Projects</h1>
        <div className="c-project-cards">
          { CompletedProjects.map(p => <SingleProject project={p} key={p.id} />) }
        </div>
        <h1>Ongoing Projects</h1>
        <div className="c-project-cards">
          { OngoingProjects.map(p => <SingleProject project={p} key={p.id} />) }
        </div>
      </div>
    </>
  )
};
