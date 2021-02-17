import React, { Component } from 'react'
import "./App.css";
import Navbar from "./components/Navbar/Navbar";
import { Route, withRouter } from "react-router-dom";
import DialogsContainer from "./components/Dialogs/DialogsContainer";
import UsersContainer from "./components/Users/UsersContainer";
import ProfileContainer from "./components/Profile/ProfileContainer";
import HeaderContainer from "./components/Header/HeaderContainer";
import LoginPage from "./components/Login/Login";
import { connect } from "react-redux";
import { initializedApp } from "./redux/app-reducer";
import { compose } from "redux";
import Preloader from "./components/common/Preloader/Preloader";
import store from "./redux/redux-store";
import { BrowserRouter } from "react-router-dom";
import { Provider } from 'react-redux';

class App extends Component {
  componentDidMount() {
    this.props.initializedApp();
  }
  render() {

    if (!this.props.initialized) {
      return <Preloader />
    }

    return (

      <div className="app-wrapper">
        <HeaderContainer />
        <Navbar />
        <div className="app-wrapper-content">
          <Route path="/dialogs" render={() => <DialogsContainer />} />
          <Route path="/profile/:userId?" render={() => <ProfileContainer />} />
          <Route path="/users" render={() => <UsersContainer />} />
          <Route path="/login" render={() => <LoginPage />} />
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  initialized: state.app.initialized
})


let AppContainer = compose(
  withRouter,
  connect(mapStateToProps, { initializedApp }))(App);


const SamuraiJsApp = (props) => {
  return  <BrowserRouter>
  <Provider store={store}>
    <AppContainer />
  </Provider>
</BrowserRouter>
}

export default SamuraiJsApp;