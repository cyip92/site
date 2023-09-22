import { Link } from "react-router-dom";
import './Navbar.css';

export const Navbar = () => {
  const rootDir = "/sleep-page";
  return (
    <>
      <div className="c-main-options">
        <Link className="o-single-option" to={rootDir}>Homepage</Link>
        <Link className="o-single-option" to={`${rootDir}/sleep`}>Weekly Sleep Pattern</Link>
        <Link className="o-single-option" to={`${rootDir}/blob`}>You can pat the blob</Link>
      </div>
    </>
  )
}

export default Navbar;
