import { Helmet, HelmetProvider } from "react-helmet-async";
import React from "react";

import bloberm from "../assets/bloberm.png";

const UnfinishedPage = () => {
  return (
    <>
      <HelmetProvider>
        <Helmet>
          <title>Under construction</title>
        </Helmet>
      </HelmetProvider>
      <div className="c-page-layout">
        <img src={bloberm} />
        <br />
        This page has not been finished yet.
      </div>
    </>
  )
}

export default UnfinishedPage;
