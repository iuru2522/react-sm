import React from "react";
// import { NavLink } from "react-router-dom";
import DialogItem from "./DialogItem/DialogItem";
import Message from "./Message/Message";
import "./Dialogs.css";
import {
  sendMessageCreator,
  updateNewMessageBodyCreator,
} from "../../redux/messages-reducer";
import Dialogs from "./Dialogs";

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

const DialogsContainer = (props) => {
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

  let state = props.store.getState().messagesPage;

  // let dialogElements = state.dialogsData.map((d) => (
  //   <DialogItem name={d.name} id={d.id} />
  // ));
  // let messagesElements = state.messagesData.map((m) => (
  //   <Message message={m.message} />
  // ));
  // let newMessageBody = state.newMassagesBody;

  let onSendMessageClick = () => {
    props.store.dispatch(sendMessageCreator());
  };

  let onNewMessageChange = (body) => {
    // let body = e.target.value;
    props.store.dispatch(updateNewMessageBodyCreator(body));
  };

  return (
   <Dialogs 
   updateNewMessageBody={onNewMessageChange} 
   sendMessage={onSendMessageClick}
   dialogsPage={state}
   />
  );
};

export default DialogsContainer;
