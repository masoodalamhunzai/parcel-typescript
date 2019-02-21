import * as React from "react";
import { Link } from "react-router-dom";

const NavBar = () => {
  return (
    <section className="side-bar">
      <ul>
        {/* <li>
          <Link to="/">Home</Link>
        </li> */}
        <li>
          <Link to="/todo">To Do</Link>
        </li>
        <li>
          <Link to="/registration">Registration</Link>
        </li>
      </ul>
     </section>
  );
};
export default NavBar;
