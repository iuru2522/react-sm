import React from 'react';
import MyPosts from  './MyPosts/MyPosts';
import './Profile.css'


const Profile = () => {
  return (
    <div className="content">
      <div className='insidec'>
        <img src="https://ak.picdn.net/shutterstock/videos/32692618/thumb/1.jpg" />
      </div>

      <div>
        Ava + Description

      </div>

   <MyPosts />
    </div>
  );
};

export default Profile;
