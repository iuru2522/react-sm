import React from "react";
import { NavLink } from "react-router-dom";
import DialogItem from "./DialogItem/DialogItem";
import Message from "./Message/Message";
import "./Dialogs.css";

// const DialogItem = (props) => {
//   let path = "/dialogs/" + props.id;

//   return (
//     <div className="dialog" className="active">
//       <NavLink to={path}> {props.name} </NavLink>
//     </div>
//   );
// };

// const Message = (props) => {
//   return <div className="message"> {props.message} </div>;
// };

const Dialogs = (props) => {
  
  //moved data from Dialogs to index.js
  
  // let dialogsData = [
  //   { id: 1, name: "Julia" },
  //   { id: 2, name: "Romko" },
  //   { id: 3, name: "Dima" },
  //   { id: 4, name: "Olia" },
  // ];
  
  // let messagesData = [
  //   { id: 1, message: "Hi" },
  //   { id: 2, message: "How are you" },
  //   { id: 3, message: "Yooo" },
  //   { id: 4, message: "Yaaaaw" },
  // ];

  let dialogElements = props.state.dialogsData.map((d) => (
    <DialogItem name={d.name} id={d.id} />
  ));

  let messagesElements = props.state.messagesData.map((m) => (
    <Message message={m.message} />
  ));

  return (
    <div className="dialogz">
      <div className="dialogs-item">{dialogElements}</div>
      <div className="messages">{messagesElements}</div>
    </div>
  );
};

export default Dialogs;
