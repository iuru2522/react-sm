import React from "react";
import MyPosts from "./MyPosts/MyPosts";
import MyPostsContainer from "./MyPosts/MyPostsContainer";
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
      <MyPostsContainer

        // store={props.store}
      
        // posts={props.profilePage.posts}
        // newPostText={props.profilePage.newPostText}
        // dispatch={props.dispatch}
        // addPost={props.addPost}
      />
    </div>
  );
};

export default Profile;
