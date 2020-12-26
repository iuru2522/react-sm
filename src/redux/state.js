let store = {
  _state: {
    profilePage: {
      posts: [
        { id: 1, post: "Hello, there", likesCount: 12 },
        { id: 2, post: "Its my first post", likesCount: 10 },
        { id: 3, post: "ts my second post", likesCount: 5 },
      ],

      newPostText: '',
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
    },
    sidebar: {},
  },

  getState(){
    return this._state; 
  },

  subscribe(observer) {
    this._callSubscriber = observer;
  },

  _callSubscriber() {   //rerenderEntireTree
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
      if (action.type === 'ADD-POST'){
        let newPost = {
          id: 5,
          post: this._state.profilePage.newPostText,
          likesCount: 12,
        };
        this._state.profilePage.posts.push(newPost);
        this._state.profilePage.newPostText = '';
        this._callSubscriber(this._state);   //rerenderEntireTree
      } else if (action.type === 'UPDATE-NEW-POST-TEXT') {
        this._state.profilePage.newPostText = action.newText;
        this._callSubscriber(this._state); ////rerenderEntireTree
      }
  }

};
export default store;

window.store = store;
