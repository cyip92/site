import { useEffect } from 'react';
import Navbar from "../common/Navbar";
import blob from '../assets/blob.png';
import './HomePage.css';

export const HomePage = () => {
  useEffect(() => {
    document.title = "Website Home";
  }, []);

  return (
    <>
      <div className="c-page-layout">
        <Navbar />
        <h3>Home Page</h3>
        <br />
        <img src={blob} />
        <br />
        This website is currently still under construction!
      </div>
    </>
  )
}

export default HomePage;
