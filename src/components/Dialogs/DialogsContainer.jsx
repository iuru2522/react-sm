import React from "react";
import {
  sendMessageCreator,
  // updateNewMessageBodyCreator,
} from "../../redux/messages-reducer";
import Dialogs from "./Dialogs";
import { connect } from "react-redux";
import { withAuthRedirect } from "../../hoc/withAuthRedirect";
import { compose } from "redux";

let mapStateToProps = (state) => {
  return {
    messagesPage: state.messagesPage,
  };
};
let mapDispatchToProps = (dispatch) => {
  return {
    sendMessage: (newMessageBody) => {
      dispatch(sendMessageCreator(newMessageBody));
    },
    // updateNewMessageBody: (body) => {
    //   dispatch(updateNewMessageBodyCreator(body));
    // },
  };
};

// compose(
//   connect(mapStateToProps, mapDispatchToProps),

//   withAuthRedirect)(Dialogs)

// let AuthRedirectComponent = withAuthRedirect(Dialogs);

// const DialogsContainer = connect(
//   mapStateToProps,
//   mapDispatchToProps
// )(AuthRedirectComponent);

export default compose(
  connect(mapStateToProps, mapDispatchToProps),

  withAuthRedirect)(Dialogs)