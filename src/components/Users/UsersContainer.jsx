import React from "react";
// import Users from "./UsersAPIComponent";
import { connect } from "react-redux";
import {
  follow,
  setCurrentPage,
  setTotalUsersCount,
  setUsers,
  toggleIsFetching,
  unfollow,
  toggleFollowingProgress,
  requestUsers
  // getUsers,
} from "../../redux/users-reducer";
// import UsersAPIComponent from "./UsersAPIComponent";
import Users from "./Users.js";
import * as axios from "axios";
import Preloader from "../common/Preloader/Preloader";
import { usersAPI } from "../../api/api";
import { compose } from "redux";
import {withAuthRedirect} from "../../hoc/withAuthRedirect";
import { getPageSize, getUsers, getTotalUsersCount, getCurrentPage, getIsFetching, getFollowingInProgress } from "../../redux/users-selectors";

class UsersContainer extends React.Component {
  componentDidMount() {
    // this.props.toggleIsFetching(true);
    this.props.getUsers(
      this.props.currentPage,
      this.props.pageSize
    );
    // usersAPI
    //   .getUsers(this.props.currentPage, this.props.pageSize)
    //   .then((data) => {
    //     this.props.toggleIsFetching(false);
    //     this.props.setUsers(data.items);
    //     this.props.setTotalUsersCount(data.totalCount);
    //   });
  }
  onPageChanged = (pageNumber) => {
    this.props.getUsers(pageNumber, this.props.pageSize);

    // this.props.setCurrentPage(pageNumber);
    // this.props.toggleIsFetching(true);
    // usersAPI
    //   .getUsers(this.props.currentPage, this.props.pageSize)
    //   .then((data) => {
    //     this.props.toggleIsFetching(false);
    //     this.props.setUsers(data.items);
    //   });
  };

  render() {
    // console.log("USERS");
    return (
      <div>
        {" "}
        {/* need to be fixed with <></>*/}
        {this.props.isFetching ? <Preloader /> : null}
        <Users
          totalUsersCount={this.props.totalUsersCount}
          pageSize={this.props.pageSize}
          currentPage={this.props.currentPage}
          onPageChanged={this.onPageChanged}
          users={this.props.users}
          follow={this.props.follow}
          unfollow={this.props.unfollow}
          toggleFollowingProgress={this.props.toggleFollowingProgress}
          followingInProgress={this.props.followingInProgress}
        />
      </div>
    )
  }
}

let mapStateToProps = (state) => {
  return {
    users: getUsers(state),
    pageSize: getPageSize(state),
    totalUsersCount: getTotalUsersCount(state),
    currentPage: getCurrentPage(state),
    isFetching: getIsFetching(state),
    followingInProgress: getFollowingInProgress(state),
  };
};
// let withRedirect = withAuthRedirect(UsersContainer);
export default compose(
  connect(mapStateToProps, {
    follow,
    unfollow,
    // setUsers,
    setCurrentPage,
    // setTotalUsersCount,
    // toggleIsFetching,
    toggleFollowingProgress,
    getUsers: requestUsers
  })
)(UsersContainer);
