import React from "react";
import "./Post.css";

const Post = (props) => {


  return (
    <div className="items">
      <img src="https://www.blexar.com/avatar.png" />
      {props.message}
      <div>
        <span>Like {props.likesCount}</span>
      </div>
    </div>
  );
};



export default Post;
