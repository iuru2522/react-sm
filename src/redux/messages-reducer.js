const UPDATE_NEW_MESSAGE_BODY = "UPDATE_NEW_MESSAGE_BODY";
const SEND_MESSAGE = "SEND-MESSAGE";

let initialState = {
  dialogsData: [
    { id: 1, name: "Julia" },
    { id: 2, name: "Romko" },
    { id: 3, name: "Dima" },
    { id: 4, name: "Olia" },
  ],
  messagesData: [
    { id: 1, message: "Hi" },
    { id: 2, message: "How are you" },
    { id: 3, message: "Yooo" },
    { id: 4, message: "Yaaaaw" },
  ],
  newMessageBody: "",
}   

const messagesReducer = (state = initialState, action) => {
  switch (action.type) {
    case UPDATE_NEW_MESSAGE_BODY:
      state.newMessageBody = action.body;
      return state;
    case SEND_MESSAGE:
      let body = state.newMessageBody;
      state.newMessageBody = "";
      state.messagesData.push({ id: 6, message: body });
      return state;
    default:
      return state;
  }

  //     if (action.type === UPDATE_NEW_MESSAGE_BODY) {
  //     state.newMessageBody = action.body;
  //     // this._callSubscriber(this._state);
  //   } else if (action.type === SEND_MESSAGE) {
  //     let body = state.newMessageBody;
  //     state.newMessageBody = "";
  //     state.messagesData.push({ id: 6, message: body });
  //     // this._callSubscriber(this._state);
  //   }
};


export const sendMessageCreator = () => ({ type: SEND_MESSAGE });

export const updateNewMessageBodyCreator = (body) => ({
  type: UPDATE_NEW_MESSAGE_BODY,
  body: body,
});

export default messagesReducer;
