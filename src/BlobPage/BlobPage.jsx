import { useState } from 'react';
import { Helmet } from "react-helmet";
import BlobList from "./tabs/BlobList";
import BlobSquish from "./tabs/BlobSquish";

import "./BlobPage.css";

export const BlobPage = () => {
  const [BlobTab, setTab] = useState(() => BlobList);
  const loadScores = () => {
    setTab(() => BlobList);
  };
  const loadSquish = () => {
    setTab(() => BlobSquish);
  };

  return (
    <>
      <Helmet>
        <title>Blobs!</title>
      </Helmet>
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
