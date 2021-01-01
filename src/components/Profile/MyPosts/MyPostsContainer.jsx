import React from "react";
import {
  addPostActionCreator,
  updateNewPostTextActionCreator,
} from "../../../redux/profile";
import MyPosts from "./MyPosts";
// import "./MyPosts.css";
// import Post from "./Post/Post";

// let addPostActionCreator = () => {
//   return {
//     type: 'ADD-POST'
//   }
// }

// let updateNewPostTextActionCreator = (text) => {
//   return { type: 'UPDATE-NEW-POST-TEXT', newText: text};
// }

const MyPostsContainer = (props) => {
  // let posts = [
  //   { id: 1, post: "Hello, there", likesCount: 12 },
  //   { id: 2, post: "Its my first post", likesCount: 10 },
  //   { id: 3, post: "ts my second post", likesCount: 5 },
  // ];
  let addPost = () => {
    props.store.dispatch(addPostActionCreator()); //addPost
    // props.updateNewPostText('');
  };

  let onPostChange = (text) => {
    // let text = newPostElement.current.value;
    //props.updateNewPostText(text)
    let action = updateNewPostTextActionCreator(text);
    props.store.dispatch(action); //updateNewPostText
  };
  return <MyPosts updateNewPostText={onPostChange} addPost={addPost} post={props.posts}/>;
};

export default MyPostsContainer;
