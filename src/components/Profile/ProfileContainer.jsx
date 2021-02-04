import React from "react";
import Profile from "./Profile";
// import * as axios from "axios";
import { connect } from "react-redux";
import { getStatus, getUserProfile, updateStatus } from "../../redux/profile-reducer";
import {
  Redirect,
  withRouter
} from "react-router-dom";
import { withAuthRedirect } from "../../hoc/withAuthRedirect";
import { compose } from "redux";
// import { profileAPI, getStatus, updateStatus } from "../../api/api";

class ProfileContainer extends React.Component {
  componentDidMount() {
    let userId = this.props.match.params.userId;
    if (!userId) {
      userId = this.props.authorizedUserId;
    }
    this.props.getUserProfile(userId);
    this.props.getStatus(userId);
  }
  render() {

    if (!this.props.isAuth) return <Redirect to='/login' />


    return (
      <Profile
        {...this.props}
        props={this.props}
        profile={this.props.profile}
        status={this.props.status}
        updateStatus={this.props.updateStatus}
      />
    );
  }
}

let mapStateToProps = (state) => ({
  profile: state.profilePage.profile,
  isAuth: state.auth.isAuth,
  status: state.profilePage.status,
  authorizedUserId: state.auth.userId,
  isAuth: state.auth.isAuth,
});

export default compose(
  connect(mapStateToProps, { getUserProfile, getStatus, updateStatus }),
  withRouter,
  withAuthRedirect
)(ProfileContainer);  