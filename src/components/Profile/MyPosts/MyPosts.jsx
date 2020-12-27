import React from "react";
import { addPostActionCreator, updateNewPostTextActionCreator } from "../../../redux/state";
import "./MyPosts.css";
import Post from "./Post/Post";

// let addPostActionCreator = () => {
//   return {
//     type: 'ADD-POST'
//   }
// }

// let updateNewPostTextActionCreator = (text) => {
//   return { type: 'UPDATE-NEW-POST-TEXT', newText: text};
// }

const MyPosts = (props) => {
  // let posts = [
  //   { id: 1, post: "Hello, there", likesCount: 12 },
  //   { id: 2, post: "Its my first post", likesCount: 10 },
  //   { id: 3, post: "ts my second post", likesCount: 5 },
  // ];

  let postsElements = props.posts.map((p) => (
    <Post message={p.post} likesCount={p.likesCount} />
  ));

let newPostElement = React.createRef();

let addPost = () => {
  props.dispatch(addPostActionCreator()); //addPost
  // props.updateNewPostText('');
}

let onPostChange = () => {
  let text = newPostElement.current.value;
  //props.updateNewPostText(text)
let action = updateNewPostTextActionCreator(text);
  props.dispatch(action); //updateNewPostText
}
  return (
    <div className="postsblock">
      <h2>My posts</h2>
      <div>
        <div>
          <textarea 
          onChange={onPostChange} 
          ref={newPostElement}
          value={props.newPostText}
          ></textarea>
        </div>
        <div>
          <button onClick={addPost}>Add Post</button>
        </div>
      </div>
      <div className="items">{postsElements}</div>
    </div>
  );
};

export default MyPosts;
