import React from "react";
import { Field, reduxForm } from "redux-form";
import "./MyPosts.css";
import Post from "./Post/Post";
import { maxLengthCreator, required } from "../../../utils/validators/validators";
import { Textarea } from "../../common/FormsControls/FormsControls";

const maxLength10 = maxLengthCreator(10);


function AddNewPostForm(props) {
  return (
    <form onSubmit={props.handleSubmit}>
      <div>
        <Field name="newPostText" component={Textarea} validate={[required, maxLength10]} placeholder={"Post message"} />
      </div>
      <div>
        <button>Add Post</button>
      </div>
    </form>
  )
}

let AddNewPostFormRedux = reduxForm({ form: "ProfileAddNewPostForm" })(AddNewPostForm);

const MyPosts = React.memo(props => {

  console.log("RENDER YO");

  let postsElements =
  // [...props.posts]
  // .reverse()
    props.posts.map(p => <Post message={p.message} likesCount={p.likesCount} />);

  let newPostElement = React.createRef();

  let onAddPost = (values) => {
    props.addPost(values.newPostText);

  };

  return (
    <div className="postsblock">
      <h2>My posts</h2>

      <AddNewPostFormRedux onSubmit={onAddPost} />
      {/* <AddNewPostForm onSubmit={onAddPost} /> */}
      <div className="items">{postsElements}</div>
    </div>
  );
})




export default MyPosts;
