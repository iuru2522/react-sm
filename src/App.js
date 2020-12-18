import React from "react";
import "./App.css";
import Header from "./components/Header/Header";
import Navbar from "./components/Navbar/Navbar";
import Profile from './components/Profile/Profile';
import Dialogs from "./components/Dialogs/Dialogs";
import { BrowserRouter, Route } from 'react-router-dom';

const App = (props) => {
  return (
    <BrowserRouter>
      <div className="app-wrapper">
        <Header />
        <Navbar />
        <Route path="/dialogs" component={Dialogs} />
        <Route path="/profile" component={Profile} />

        //lesson 27
        
{/*           
        <Route path="/dialogs" render={() => { SomeComponent } />
        <Route path="/profile" render={() => { <Profile /> } />  */}
        
        
       
        {/* <Route path="/news" component={News} />
        <Route path="/music" component={Music} />
        <Route path="/settings" component={Settings} /> */}
     
      </div>
    </BrowserRouter>
  );
};

export default App;
