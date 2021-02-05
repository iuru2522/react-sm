import React from "react";
import { connect } from "react-redux";
import Header from "./Header";
import * as axios from "axios";
// import { getAuthUserData } from "../../redux/auth-reducer";
import { authAPI } from "../../api/api";
import { logout } from "../../redux/auth-reducer"
// import { connect } from "react-redux";

class HeaderContainer extends React.Component {

  render() {
    return <Header {...this.props} />;
  }
}
const mapStateToProps = (state) => ({
  isAuth: state.auth.isAuth,
  login: state.auth.login,
});
export default connect(mapStateToProps, { logout })(HeaderContainer);
