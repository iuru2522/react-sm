import registerServiceWorker from "./registerServiceWorker";
import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import SamuraiJsApp from "./App";


ReactDOM.render(
 <SamuraiJsApp/>,
  document.getElementById("root")
);

registerServiceWorker();
