import { Link, useLocation  } from "react-router-dom";
import './Navbar.css';

const Tabs = [
  {
    route: "/",
    text: "Home Page"
  },
  {
    route: "/about",
    text: "About Me"
  },
  {
    route: "/projects",
    text: "Long-term Projects"
  },
  {
    route: "/sleep",
    text: "Weekly Sleep Pattern"
  },
  {
    route: "/ADdevlog/",
    text: "Antimatter Dimensions Retrospective"
  },
  {
    route: "/blob",
    text: "You can pat the blob"
  },
];

export const Navbar = () => {
  const currentRoute = useLocation().pathname;

  return (
    <>
      <div className="c-main-options">
        {
          Tabs.map(tab =>
            <Link
              className={`o-single-option ${tab.route === currentRoute ? "o-current-option" : ""}`}
              to={tab.route}
              key={tab.text}
            >
              { tab.text }
            </Link>
          )
        }
      </div>
    </>
  )
}

export default Navbar;
