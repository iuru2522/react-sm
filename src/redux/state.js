import messagesReducer from "./messages-reducer";
import profileReducer from "./profile-reducer";
import sidebarReducer from "./sidebar-reducer";

// const ADD_POST = "ADD-POST";
// const UPDATE_NEW_POST_TEXT = "UPDATE-NEW-POST-TEXT";

// const UPDATE_NEW_MESSAGE_BODY = "UPDATE_NEW_MESSAGE_BODY";
// const SEND_MESSAGE = "SEND-MESSAGE";

let store = {
  _state: {
    profilePage: {
      posts: [
        { id: 1, post: "Hello, there", likesCount: 12 },
        { id: 2, post: "Its my first post", likesCount: 10 },
        { id: 3, post: "ts my second post", likesCount: 5 },
      ],

      newPostText: "",
    },
    messagesPage: {
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
    },
    sidebar: {},
  },

  getState() {
    return this._state;
  },

  subscribe(observer) {
    this._callSubscriber = observer;
  },

  _callSubscriber() {
    //rerenderEntireTree
    console.log("State changed");
  },

  // addPost() {
  //   let newPost = {
  //     id: 5,
  //     post: this._state.profilePage.newPostText,
  //     likesCount: 12,
  //   };
  //   this._state.profilePage.posts.push(newPost);
  //   this._state.profilePage.newPostText = '';
  //   this._callSubscriber(this._state);   //rerenderEntireTree
  // },

  // updateNewPostText(newText) {
  //   this._state.profilePage.newPostText = newText;
  //   this._callSubscriber(this._state); ////rerenderEntireTree
  // },

  dispatch(action) {
    //action ---- object {type: 'ADD_POST'}

    this._state.profilePage = profileReducer(this._state.profilePage, action);
    this._state.messagesPage = messagesReducer(
      this._state.messagesPage,
      action
    );

    this._state.profilePage = sidebarReducer(this._state.profilePage, action);



    // if (action.type === ADD_POST) {
    //   let newPost = {
    //     id: 5,
    //     post: this._state.profilePage.newPostText,
    //     likesCount: 12,
    //   };
    //   this._state.profilePage.posts.push(newPost);
    //   this._state.profilePage.newPostText = "";
    //   this._callSubscriber(this._state); //rerenderEntireTree
    // } else if (action.type === UPDATE_NEW_POST_TEXT) {
    //   this._state.profilePage.newPostText = action.newText;
    //   this._callSubscriber(this._state); ////rerenderEntireTree
    // } else if (action.type === UPDATE_NEW_MESSAGE_BODY) {
    //   this._state.messagesPage.newMessageBody = action.body;
    //   this._callSubscriber(this._state);
    // } else if (action.type === SEND_MESSAGE) {
    //   let body = this._state.messagesPage.newMessageBody;
    //   this._state.messagesPage.newMessageBody = "";
    //   this._state.messagesPage.messagesData.push({ id: 6, message: body });
    this._callSubscriber(this._state);
  },
};

// export const addPostActionCreator = () => {
//   return {
//     type: ADD_POST,
//   };
// };

// export const updateNewPostTextActionCreator = (text) => {
//   return { type: UPDATE_NEW_POST_TEXT, newText: text };
// };


// export const sendMessageCreator = () => ({ type: SEND_MESSAGE });

// export const updateNewMessageBodyCreator = (body) => ({
//   type: UPDATE_NEW_MESSAGE_BODY,
//   body: body,
// });

export default store;

window.store = store;
