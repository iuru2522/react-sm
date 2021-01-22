import React from "react";
import Profile from "./Profile";
import * as axios from "axios";
import { connect } from "react-redux";
import { getUserProfile } from "../../redux/profile-reducer";
import { Redirect, withRouter } from "react-router-dom";
// import { usersAPI } from "../../api/api";

class ProfileContainer extends React.Component {
  componentDidMount() {
    let userId = this.props.match.params.userId;

    if (!userId) {
      userId = 2;
    }

    this.props.getUserProfile(userId);

    // usersAPI.getProfile(userId).then((response) => {
    //     this.props.setUserProfile(response.data.items);
    //   });
  }

  render() {
    if (!this.props.isAuth) return <Redirect to='/login'/>




    return (
      <Profile
        {...this.props}
        props={this.props}
        profile={this.props.profile}
      />
    );
  }
}

let mapStateToProps = (state) => ({
  profile: state.profilePage.profile,
  isAuth: state.auth.isAuth
});

let WithUrlDataContainerComponent = withRouter(ProfileContainer);

export default connect(mapStateToProps, { getUserProfile })(
  WithUrlDataContainerComponent
);