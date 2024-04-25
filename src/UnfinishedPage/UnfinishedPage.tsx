import { Helmet } from "react-helmet";
import React from "react";

import bloberm from "../assets/bloberm.png";

const UnfinishedPage = () => {
  return (
    <>
      <Helmet>
        <title>Under construction</title>
      </Helmet>
      <div className="c-page-layout">
        <img src={bloberm} />
        <br />
        This page has not been finished yet.
      </div>
    </>
  )
}

export default UnfinishedPage;
