// import React from 'react';
// import ReactDOM from "react-dom";
// import "./index.css";
// import App from "./App";
import registerServiceWorker from "./registerServiceWorker";
import {rerenderEntireTree} from './render';
import state from "./redux/state";


rerenderEntireTree(state);


registerServiceWorker();
