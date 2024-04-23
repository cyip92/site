import { Helmet } from "react-helmet";
import React from 'react';
import blobdead from '../assets/blobdead.png';

export const ErrorPage = () => {
  return (
    <>
      <Helmet>
        <title>Page not found</title>
      </Helmet>
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
