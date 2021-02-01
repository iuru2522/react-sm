import React from "react";
import { Field, reduxForm } from "redux-form";
// import {
//   addPostActionCreator,
//   updateNewPostTextActionCreator,
// } from "../../../redux/profile-reducer";
import "./MyPosts.css";
import Post from "./Post/Post";
import {maxLengthCreator, required} from "../../../utils/validators/validators";
import { Textarea } from "../../common/FormsControls/FormsControls";

// let addPostActionCreator = () => {
//   return {
//     type: 'ADD-POST'
//   }
// }

// let updateNewPostTextActionCreator = (text) => {
//   return { type: 'UPDATE-NEW-POST-TEXT', newText: text};
// }

const maxLength10 = maxLengthCreator(10);

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

  let onAddPost = (values) => {
    props.addPost(values.newPostText  );

    // props.dispatch(addPostActionCreator()); //addPost
    // props.updateNewPostText('');
  };

  // let onPostChange = () => {
  //   let text = newPostElement.current.value;
  //   props.updateNewPostText(text)
  //   let action = updateNewPostTextActionCreator(text);
  //   props.dispatch(action); //updateNewPostText
  // };

  return (
    <div className="postsblock">
      <h2>My posts</h2>
      <AddNewPostForm onSubmit={onAddPost} />
      <div className="items">{postsElements}</div>
    </div>
  );
};

AddNewPostForm = reduxForm({ form: "ProfileAddNewPostForm" })(AddNewPostForm);

function AddNewPostForm (props) {
  return (
    <form onSubmit={props.handleSubmit}>
      <div>
        <Field name="newPostText" component={Textarea} validate={[required, maxLength10]} placeholder={"Post message"}/>
      </div>
      <div>
        <button>Add Post</button>
      </div>
    </form>
  )
}

export default MyPosts;
