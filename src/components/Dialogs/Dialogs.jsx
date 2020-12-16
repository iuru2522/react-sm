import React from "react";
import { NavLink } from "react-router-dom";
import "./Dialogs.css";

const DialogItem = (props) => {
  let path = "/dialogs/" + props.id;

  return (
    <div className="dialog" className="active">
      <NavLink to={path}> {props.name} </NavLink>
    </div>
  );
};

const Message = (props) => {
  return <div className="message"> {props.message} </div>;
};

const Dialogs = (props) => {
  return (
    <div className="dialogz">
      <div className="dialogs-item">
        <DialogItem name="Julia" id="1" />
        <DialogItem name="Romko" id="2" />
        <DialogItem name="Dima" id="3" />
        <DialogItem name="Olia" id="4" />
      </div>
      <div className="messages">
        <Message message="Hi" />
        <Message message="How are you?" />
        <Message message="Yooo" />
        <Message message="Wazzup" />
      </div>
    </div>
  );
};

export default Dialogs;
