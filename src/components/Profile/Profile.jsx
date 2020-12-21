import React from "react";
import MyPosts from "./MyPosts/MyPosts";
import "./Profile.css";
import ProfileInfo from "./ProfileInfo/ProfileInfo";

const Profile = (props) => {
  // let posts = [
  //   { id: 1, post: "Hello, there", likesCount: 12 },
  //   { id: 2, post: "Its my first post", likesCount: 10 },
  //   { id: 3, post: "ts my second post", likesCount: 5 },
  // ];


  return (
    <div className="content">
      <ProfileInfo />
      <MyPosts posts={props.state.posts} addPost={props.addPost}/>
    </div>
  );
};

export default Profile;
