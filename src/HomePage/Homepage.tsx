import { Helmet } from "react-helmet";
import blobthink from '../assets/blobthink.png';

import "./HomePage.css";
import React from "react";

export const HomePage = () => {
  return (
    <>
      <Helmet>
        <title>Website Home</title>
      </Helmet>
      <div className="c-page-layout c-vert-center c-narrow-home">
        <img src={blobthink} />
        <br />
        <br />
        Welcome to my professional website!
        <br />
        <br />
        This is a portfolio site for all the major projects I have done in the past, as well as a hosting place
        for some of the more minor ones which don&apos;t make sense to host on a standalone site.
        <div className="c-blob-disclaimer">
          There are a few blob-styled emoji around the site, particularly on my side project pages. All of these
          are sourced from the <a href="https://blobs.gg/">Blob Emoji Discord Servers</a>, which were inspired by
          the <a href="https://en.wikipedia.org/wiki/Blob_emoji">Google Blob emoji</a> and are licensed 
          under the <a href="https://www.apache.org/licenses/LICENSE-2.0.html">Apache License 2.0</a> - allowing
          free use as long as the License is clearly and appropriately attributed.
        </div>
      </div>
    </>
  )
}

export default HomePage;
