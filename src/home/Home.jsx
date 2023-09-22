import Navbar from "../common/Navbar";
import blob from '../assets/blob.png';
import './Home.css';

export const Home = () => {
  return (
    <>
      <div className="c-page-layout">
        <Navbar />
        <h3>Homepage</h3>
        <br />
        <img src={blob} />
        <br />
        This website is currently still under construction!
      </div>
    </>
  )
}

export default Home;
