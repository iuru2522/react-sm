import React from "react";
import { NavLink } from "react-router-dom";
import "./Dialogs.css";

const Dialogs = (props) => {
  return (
    <div className="dialogz">
      <div className="dialogs-item">
        <div className="dialog" className="active">
         <NavLink to='/dialogs/1'>Julia</NavLink>
        </div>
        <div className="dialog">
        <NavLink to='/dialogs/2'>Romko</NavLink>
        </div>
        <div className="dialog">
        <NavLink to='/dialogs/3'>Dima</NavLink>
            </div>
        <div className="dialog">
        <NavLink to='/dialogs/4'>Olia</NavLink>
            </div>
      </div>
      <div className="messages">
        <div className="message">Hi</div>
        <div className="message">How are you?</div>
        <div className="message">Yooo</div>
      </div>
    </div>
  );
};

export default Dialogs;
