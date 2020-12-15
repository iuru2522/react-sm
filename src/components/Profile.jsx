import React from "react";
import './Profile.module.css'


const Profile = () => {
  return (
    <div clasName="content">
      <div className='insidec'>
        <img src="https://ak.picdn.net/shutterstock/videos/32692618/thumb/1.jpg" />
      </div>

      <div>Ava + Description</div>

      <div>
        My posts
        <div>New Post</div>
        <div className = 'posts'>
          <div className = 'items'>
            Post 1
            </div>

          <div>
            Post 2

          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;
