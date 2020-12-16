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
  let dialogsData = [
    { id: 1, name: "Julia" },
    { id: 2, name: "Romko" },
    { id: 3, name: "Dima" },
    { id: 4, name: "Olia" }
  ];

  let messagesData = [
    { id: 1, message: "Hi" },
    { id: 2, message: "How are you" },
    { id: 3, nmessage: "Yooo" },
    { id: 4, message: "Wazzzup" }
  ];

  return (
    <div className="dialogz">
      <div className="dialogs-item">
        <DialogItem name={dialogsData[0].name} id={dialogsData[0].id} />
        <DialogItem name={dialogsData[1].name} id={dialogsData[1].id} />
        <DialogItem name="Dima" id="3" />
        <DialogItem name="Olia" id="4" />
      </div>
      <div className="messages">
        <Message message={messagesData[0].message} />
        <Message message={messagesData[1].message} />
      </div>
    </div>
  );
};

export default Dialogs;
