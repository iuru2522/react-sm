import React from "react";
// import { NavLink } from "react-router-dom";
import DialogItem from "./DialogItem/DialogItem";
import Message from "./Message/Message";
import "./Dialogs.css";
import {
  sendMessageCreator,
  updateNewMessageBodyCreator,
} from "../../redux/messages-reducer";
import { Redirect } from "react-router-dom";
import { Field, reduxForm } from "redux-form";

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

  let state = props.messagesPage;

  // let state = props.store.getState().messagesPage;

  let dialogElements = state.dialogsData.map((d) => (
    <DialogItem name={d.name} key={d.id} id={d.id} />
  ));

  let messagesElements = state.messagesData.map((m) => (
    <Message message={m.message} key={m.id} />
  ));

  let newMessageBody = state.newMassagesBody;

  // let onSendMessageClick = () => {
  //   props.sendMessage();
  //   props.store.dispatch(sendMessageCreator());
  // };

  // let onNewMessageChange = (e) => {
  //   let body = e.target.value;
  //   props.updateNewMessageBody(body);
  //   props.store.dispatch(updateNewMessageBodyCreator(body));
  // };

  let addNewMessage = (values) => {
    props.sendMessage(values.newMessageBody);
  };

  if (!props.isAuth) return <Redirect to={"/login"} />;

  return (
    <div className="dialogz">
      <div className="dialogs-item">{dialogElements}</div>
      <div className="messages">
        <div>{messagesElements}</div>

      </div>
      <AddMessageFormRedux onSubmit={addNewMessage} />
    </div>
  );
};

const AddMessageForm = (props) => {
  return (
    <form onSubmit={props.handleSubmit}>
      <div>
        <Field component="textarea" name="newMessageBody" placehonder="Enter your msg" />
      </div>
      <div>
        <button>Send</button>
      </div>
    </form>
  )
}

const AddMessageFormRedux = reduxForm({form: "dialogAddMessageForm"})(AddMessageForm);

export default Dialogs;
