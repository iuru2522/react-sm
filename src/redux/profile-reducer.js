const ADD_POST = "ADD-POST";
const UPDATE_NEW_POST_TEXT = "UPDATE-NEW-POST-TEXT";

export const profileReducer = (state, action) => {
  switch (action.type) {
    case ADD_POST:
      let newPost = {
        id: 5,
        post: state.newPostText,
        likesCount: 12,
      };
      state.posts.push(newPost);
      state.newPostText = "";
      return state;

    case UPDATE_NEW_POST_TEXT:
      state.newPostText = action.newText;
      return state;
    default:
      return state;

    // if (action.type === ADD_POST) {

    // let newPost = {
    //   id: 5,
    //   post: state.newPostText,
    //   likesCount: 12,
    // };
    // state.posts.push(newPost);
    // state.newPostText = "";
    // this._callSubscriber(this._state); //rerenderEntireTree
    //   } else if (action.type === UPDATE_NEW_POST_TEXT) {
    //     state.newPostText = action.newText;
    // this._callSubscriber(this._state); ////rerenderEntireTree
  }
};


export const addPostActionCreator = () => {
    return {
      type: ADD_POST,
    };
  };
  
  export const updateNewPostTextActionCreator = (text) => {
    return { type: UPDATE_NEW_POST_TEXT, newText: text };
  };

export default profileReducer;
