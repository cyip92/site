import { Link } from "react-router-dom";

export const DevlogSidebar = () => {
  return (
    <>
      <div>
        <Link to="/ADdevlog">Introduction</Link>
      </div>
      <div>
        <Link to="/ADdevlog/FAQ">FAQ Page</Link>
      </div>
      <div>
        <Link to="/ADdevlog/1">Entry 1</Link>
      </div>
    </>
  )
}

export default DevlogSidebar;
