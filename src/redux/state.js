// import {rerenderEntireTree} from "../render";

let rerenderEntireTree = () => {
  console.log("State changed");
}


let state = {
  profilePage: {
    posts: [
      { id: 1, post: "Hello, there", likesCount: 12 },
      { id: 2, post: "Its my first post", likesCount: 10 },
      { id: 3, post: "ts my second post", likesCount: 5 },
    ],

    newPostText: 'Julia',
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
};

window.state = state;

export const addPost = () => {
  let newPost = {
    id: 5,
    post: state.profilePage.newPostText,
    likesCount: 120,
  };

  state.profilePage.posts.push(newPost);
  state.profilePage.newPostText = '';

rerenderEntireTree();
};

export const updateNewPostText = (newText) => {
  state.profilePage.newPostText= newText;
rerenderEntireTree();

};

export const subscribe() {

  rerenderEntireTree = observer; //observer, publisher-observer


}
//addEventListener --> Observer
export default state;


//store
