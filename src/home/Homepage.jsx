import { useEffect } from 'react';
import blobthink from '../assets/blobthink.png';

export const HomePage = () => {
  useEffect(() => {
    document.title = "Website Home";
  }, []);

  return (
    <>
      <div className="c-page-layout c-vert-center">
        <h3>Home Page</h3>
        <br />
        <img src={blobthink} />
        <br />
        Welcome to my professional website!
        <br />
        <br />
        Almost everything is currently still being worked on, feel free to check back over the next
        few days to see as content gets filled out!
        <br />
        <br />
        The blobs will probably be mostly disappearing once the site is nearly finished (sorry)
      </div>
    </>
  )
}

export default HomePage;
