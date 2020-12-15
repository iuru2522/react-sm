import React from "react";
import './MyPosts.css';
import Post from './Post/Post';

const MyPosts = () => {
  return (
    <div>
      
      My posts
      <div>
        <textarea></textarea>
        <button>Add Post</button>
        <button>Remove</button>
      </div>
      
        <div className="items">
     <Post />
     <Post />
     <Post />
     <Post />
       
      </div>
    </div>
  )
};

export default MyPosts;
