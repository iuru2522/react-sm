import React from "react";
import { NavLink } from "react-router-dom";
import "./Header.css";

const Header = (props) => {
  return (
    <header className="header">
      <img src="https://www.logolynx.com/images/logolynx/03/03459664b36ef0ec4bcebaa4d6eec299.jpeg" />
      <div className="loginBlock">
        {props.isAuth
          ? <div>{props.login} <button onClick={props.logout}>Logout</button></div>
          : <NavLink to={"/login"}>Login</NavLink>}
      </div>
    </header>
  );
};

export default Header;
