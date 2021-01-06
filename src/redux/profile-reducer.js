const ADD_POST = "ADD-POST";
const UPDATE_NEW_POST_TEXT = "UPDATE-NEW-POST-TEXT";


let initialState = {
  posts: [
    { id: 1, post: "Hello, there", likesCount: 12 },
    { id: 2, post: "Its my first post", likesCount: 10 },
    { id: 3, post: "ts my second post", likesCount: 5 },
  ],

  newPostText: "",
}

const profileReducer = (state = initialState , action) => {
  switch (action.type) {
    case ADD_POST: {
      let newPost = {
        id: 5,
        post: state.newPostText,
        likesCount: 12,
      };

      let stateCopy = {...state};
      stateCopy.posts = [...state.posts]
      stateCopy.posts.push(newPost);
      // state.posts.push(newPost);
      // state.newPostText = "";
      stateCopy.newPostText = "";

      // return state;
      return stateCopy;
    }
    case UPDATE_NEW_POST_TEXT: {
      let stateCopy = {...state};
      stateCopy.newPostText = action.newText;
      return stateCopy;
  }
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
