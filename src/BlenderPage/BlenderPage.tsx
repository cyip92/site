import { Helmet, HelmetProvider } from "react-helmet-async";
import React from "react";

import "./styles/BlenderPage.css";

import week1 from "../assets/blender/01-blob.png";
import BlenderEntry from "./BlenderEntry";
import BlenderIntro from "./BlenderIntro";

export const BlenderEntryContent: Array<BlenderEntryType> = [
  {
    week: 1,
    title: "Blob",
    date: "20 October 2024",
    short: `A simple, blocky Google Blob for my first Blender project`,
    description: `This was the first thing I made, and it was something based off of the
      <a href="https://en.wikipedia.org/wiki/Blob_emoji">Google Blob emoji</a>. This was pretty much entirely
      because the first people I told about my Blender commitment were people I first met online, and my
      "online personality" has in some ways become centred around these Blobs. It looks super blocky, but at
      this point I was happy enough with it that I called it done.`,
    technical: `This model was basically entirely meshwork. I extruded the facial features outward because I
      thought it would be funny to come back to this and 3D print a Blob in the future. These bits wouldn't
      really show up on a physical object if they were flat to the body instead, but honestly that was a weak
      reason at best.`,
    image: week1,
  },
];

export type BlenderEntryType = {
  week: number;
  title: string;
  date: string;
  short: string;
  description: string;
  technical?: string;
  image: string;
};

const BlenderPage = () => {
  return (
    <>
      <HelmetProvider>
        <Helmet>
          <title>3D Modeling</title>
        </Helmet>
      </HelmetProvider>
        <div className="c-page-layout c-grayscale-content-bg">
        <div className="c-image-bg c-blender-bg" />
        <BlenderIntro />
        <br/>
        <h2>My Blender projects</h2>
        <div className="c-projects">
          { BlenderEntryContent.map(p => <BlenderEntry entryInfo={p} key={p.week} />) }
        </div>
      </div>
    </>
  )
}

export default BlenderPage;
