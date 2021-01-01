// import "./index.css";
// import App from "./App";
import registerServiceWorker from "./registerServiceWorker";
import store from "./redux/redux-store";
import React from "react";
import ReactDOM, { render } from "react-dom";
import "./index.css";
import App from "./App";
import { BrowserRouter } from "react-router-dom";

let rerenderEntireTree = (state) => {
  ReactDOM.render(
    <BrowserRouter>
      <App
        state={store.getState()}
        dispatch={store.dispatch.bind(store)}
        // updateNewPostText={store.updateNewPostText.bind(store)}
        store={store}
      />
      ,
    </BrowserRouter>,
    document.getElementById("root")
  );
};

rerenderEntireTree(store.getState());

store.subscribe( () => {
  let state = store.getState;
  rerenderEntireTree(state)
});



// store.subscribe(rerenderEntireTree);

// registerServiceWorker();
