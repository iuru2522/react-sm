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
  
  // stateCopy.messagesData = [...state.messagesData];

   let stateCopy;
  switch (action.type) {
    case UPDATE_NEW_MESSAGE_BODY:
      return {
        ...state,
        newMessageBody: action.body
      };
    case SEND_MESSAGE:
      let body = state.newMessageBody;  
    return {
        ...state,
        newMessageBody: "",
        messagesData: [...state.messagesData, { id: 6, message: body }]
      };
    default:
      return state;
  }

};


export const sendMessageCreator = () => ({ type: SEND_MESSAGE });

export const updateNewMessageBodyCreator = (body) => ({
  type: UPDATE_NEW_MESSAGE_BODY,
  body: body,
});

export default messagesReducer;
