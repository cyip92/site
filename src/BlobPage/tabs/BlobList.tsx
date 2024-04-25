import { Helmet } from "react-helmet";
import { squishValue } from "./BlobSquish"
import blobnote from '../../assets/blobnote.gif';
import blobsquish from '../../assets/blobsquish.gif';
import blobpats from '../../assets/blobpats.gif';

import "./BlobList.css";
import React from "react";

export const BlobList = () => {
  const pats = Number(localStorage.getItem("total-pats")) ?? 0;
  const bestSquish = Number(localStorage.getItem("best-squish")) ?? 0;

  return (
    <>
      <Helmet>
        <title>Blobs!</title>
      </Helmet>
      <div>
        <img src={blobnote} />
        <br />
        <u>Squishy Blob Stats</u>
        <br />
        <div className="c-blob-stat-list">
          <span className="c-blob-stat-row">
            <img className="o-blob-stat-icon" src={blobpats} />
            <b>Pats: { pats }</b>
          </span>
          <span className="c-blob-stat-row">
            <img className="o-blob-stat-icon" src={blobsquish} />
            <b>Best Squish: { squishValue(bestSquish) }</b>
          </span>
        </div>
      </div>
    </>
  )
}

export default BlobList;
