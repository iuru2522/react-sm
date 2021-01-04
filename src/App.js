import React from "react";
import "./App.css";
import Header from "./components/Header/Header";
import Navbar from "./components/Navbar/Navbar";
import Profile from "./components/Profile/Profile";
import Dialogs from "./components/Dialogs/Dialogs";
import { BrowserRouter, Route } from "react-router-dom";
import DialogsContainer from "./components/Dialogs/DialogsContainer";

const App = () => {
  return (
    <BrowserRouter>
      <div className="app-wrapper">
        <Header />
        <Navbar />
        <Route
          path="/dialogs"
          render={() => (
            <DialogsContainer
              
            // store={props.store}
            
            // state={props.state.messagesPage}
              // messages={state.messagesData}
            />
          )}
        />
        <Route
          path="/profile"
          render={() => (
            <Profile

              // store={props.store}

              // profilePage={props.state.profilePage}
              // dispatch={props.dispatch}
              // updateNewPostText={props.updateNewPostText}
            />
          )}
        />
      </div>
    </BrowserRouter>
  );
};

export default App;
