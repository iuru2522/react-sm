import React from "react";
import "./App.css";
import Header from "./components/Header/Header";
import Navbar from "./components/Navbar/Navbar";
import Profile from "./components/Profile/Profile";
import Dialogs from "./components/Dialogs/Dialogs";
import { BrowserRouter, Route } from "react-router-dom";

const App = (props) => {
  return (
    <BrowserRouter>
      <div className="app-wrapper">
        <Header />
        <Navbar />
        <Route
          path="/dialogs"
          render={() => (
            <Dialogs
              state={props.state.messagesPage}
              messages={props.state.messagesData}
            />
          )}
        />
        <Route
          path="/profile"
          render={() => (
            <Profile 
            profilePage={props.state.profilePage} 
            addPost={props.addPost}
            updateNewPostText={props.updateNewPostText} />
          )}
        />
      </div>
    </BrowserRouter>
  );
};

export default App;
