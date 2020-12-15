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
     <Post message='Hello, there' likesCount='5'/>
     <Post message='Its my first post' likesCount='10'/>
     <Post message='Its my second post' likesCount='15'/>
     
       
      </div>
    </div>
  )
};

export default MyPosts;
