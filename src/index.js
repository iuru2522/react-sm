// import "./index.css";
// import App from "./App";
import registerServiceWorker from "./registerServiceWorker";
import state, { subscribe } from "./redux/state";
import React from "react";
import ReactDOM, { render } from "react-dom";
import "./index.css";
import App from "./App";
import {addPost, updateNewPostText} from "./redux/state";
import {BrowserRouter} from "react-router-dom";


let rerenderEntireTree = (state) => {
ReactDOM.render(
  <BrowserRouter>
    <App state={state} addPost={addPost} updateNewPostText={updateNewPostText}/>,
  </BrowserRouter>,
  document.getElementById("root"));
};

subscribe();
rerenderEntireTree(state);
registerServiceWorker();
