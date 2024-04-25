import { Helmet, HelmetProvider } from "react-helmet-async";
import React from "react";

import blobdead from "../assets/blobdead.png";

const ErrorPage = () => {
  return (
    <>
      <HelmetProvider>
        <Helmet>
          <title>Page not found</title>
        </Helmet>
      </HelmetProvider>
      <div className="c-page-layout">
        <h1>Error 404</h1>
        <br />
        <img src={blobdead} />
        <br />
        There is no page here! Did you possibly mistype the URL?
      </div>
    </>
  )
};

export default ErrorPage;
