import { Link } from "react-router-dom";
import './Navbar.css';

export const Navbar = () => {
  return (
    <>
      <div className="c-main-options">
        <Link className="o-single-option" to="/">Home Page</Link>
        <Link className="o-single-option" to="/about">About Me</Link>
        <Link className="o-single-option" to="/projects">Long-term Projects</Link>
        <Link className="o-single-option" to="/sleep">Weekly Sleep Pattern</Link>
        <Link className="o-single-option" to="/ADdevlog">Antimatter Dimensions Retrospective</Link>
        <Link className="o-single-option" to="/blob">You can pat the blob</Link>
      </div>
    </>
  )
}

export default Navbar;
