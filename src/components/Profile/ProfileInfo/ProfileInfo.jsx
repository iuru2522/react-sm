import React from "react";
import Preloader from "../../common/Preloader/Preloader";
import "./ProfileInfo.css";
import ProfileStatus from "./ProfileStatus"

const ProfileInfo = (props) => {


  if (!props.profile) {
    return <Preloader />

  }


  return (
    <div className="content">
      <div className="insidec">
        <img src="https://ak.picdn.net/shutterstock/videos/32692618/thumb/1.jpg" />
      </div>

      <div className='description'>
        <img src={props.profile.photos.small} />
        <ProfileStatus
          status={props.status}
          updateStatus={props.updateStatus}
        />
      </div>
    </div>


  );
};

export default ProfileInfo;
