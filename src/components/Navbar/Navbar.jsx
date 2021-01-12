import React from "react";
import { NavLink } from "react-router-dom";
// import classes from './Navbar.module.css';
import "./Navbar.css";

const Navbar = () => {
  return (
    <nav className="nav">
      <div className="itemz">
      <NavLink to="/profile">Profile</NavLink>
      </div>

      <div className="itemz">
        {/* <a href="/dialogs">Messages</a> */}
        <NavLink to="/dialogs">Messages</NavLink>
      </div>

      <div className="itemz">
        {/* <a href="/dialogs">Messages</a> */}
        <NavLink to="/users">Users</NavLink>
      </div>

      <div className="itemz">
        <a>News</a>
      </div>

      <div className="itemz">
        <a>Music</a>
      </div>

      <div className="itemz">
        <a>Settings</a>
      </div>
    </nav>
  );
};

export default Navbar;
