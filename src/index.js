// import "./index.css";
// import App from "./App";
import registerServiceWorker from "./registerServiceWorker";
import store from "./redux/state";
import React from "react";
import ReactDOM, { render } from "react-dom";
import "./index.css";
import App from "./App";
import {BrowserRouter} from "react-router-dom";


let rerenderEntireTree = (state) => {
ReactDOM.render(
  <BrowserRouter>
    <App state={state} 
    addPost={store.addPost.bind(store)} 
    updateNewPostText={store.updateNewPostText.bind(store)}/>,
  </BrowserRouter>,
  document.getElementById("root"));
};

store.subscribe(rerenderEntireTree);
rerenderEntireTree(store.getState());




registerServiceWorker();
