import React from "react";
import { NavLink, useLocation } from "react-router-dom";
import "./styles.scss";

const NavBar = () => {
  const currentLocation = useLocation().pathname;

  return (
    <ul className="nav-bar">
      <li className="nav-bar__item">
        <NavLink
          exact
          to="/"
          className={currentLocation === "/" ? "selected" : ""}
        >
          Landing
        </NavLink>
      </li>
      <li className="nav-bar__item">
        <NavLink
          to="/cool-video"
          className={currentLocation === "/cool-video" ? "selected" : ""}
        >
          Cool Videos
        </NavLink>
      </li>
    </ul>
  );
};

export default NavBar;
