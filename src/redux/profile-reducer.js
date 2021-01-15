const ADD_POST = "ADD-POST";
const UPDATE_NEW_POST_TEXT = "UPDATE-NEW-POST-TEXT";
const SET_USER_PROFILE = "SET_USER_PROFILE";

let initialState = {
  posts: [
    { id: 1, post: "Hello, there", likesCount: 12 },
    { id: 2, post: "Its my first post", likesCount: 10 },
    { id: 3, post: "ts my second post", likesCount: 5 },
  ],

  newPostText: "",
  profile: null
};

const profileReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_POST: {
      let newPost = {
        id: 5,
        post: state.newPostText,
        likesCount: 12,
      };

      return {
        ...state,
        posts: [...state.posts, newPost],
        newPostText: "",
      };
    }
    case UPDATE_NEW_POST_TEXT: {
      return {
        ...state,
        newPostText: action.newText,
      };
    }

    case SET_USER_PROFILE: {
      return {
        ...state,
        profile: action.profile,
      };
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

export const addPostActionCreator = () => ({ type: ADD_POST });
export const setUserProfile = (profile) => ({
  type: SET_USER_PROFILE,
  profile,
});
export const updateNewPostTextActionCreator = (text) => ({
  type: UPDATE_NEW_POST_TEXT,
  newText: text,
});

export default profileReducer;
