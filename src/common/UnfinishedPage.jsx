import { useEffect } from 'react';
import bloberm from '../assets/bloberm.png';

export const UnfinishedPage = () => {
  useEffect(() => {
    document.title = "Under construction";
  }, []);

  return (
    <>
      <div className="c-page-layout">
        <img src={bloberm} />
        <br />
        This page has not been finished yet.
      </div>
    </>
  )
}

export default UnfinishedPage;
