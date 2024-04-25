import { useState } from "react";
import React from "react";
import { Helmet, HelmetProvider } from "react-helmet-async";

import BlobList from "./tabs/BlobList";
import BlobSquish from "./tabs/BlobSquish";
import "./BlobPage.css";

const BlobPage = () => {
  const [BlobTab, setTab] = useState(() => BlobList);
  const loadScores = () => {
    setTab(() => BlobList);
  };
  const loadSquish = () => {
    setTab(() => BlobSquish);
  };

  return (
    <>
      <HelmetProvider>
        <Helmet>
          <title>Blobs!</title>
        </Helmet>
      </HelmetProvider>
      <div className="c-blob-tabs">
        <button className="o-blob-button" onClick={loadScores}>Scores</button>
        <button className="o-blob-button" onClick={loadSquish}>Squish</button>
      </div>
      <div className="c-page-layout c-vert-center">
        <BlobTab />
      </div>
    </>
  )
}

export default BlobPage;
