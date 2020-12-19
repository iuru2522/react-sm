import React from "react";
import "./App.css";
import Header from "./components/Header/Header";
import Navbar from "./components/Navbar/Navbar";
import Profile from './components/Profile/Profile';
import Dialogs from "./components/Dialogs/Dialogs";
import { BrowserRouter, Route } from 'react-router-dom';

const App = (props) => {

  // let posts = [
  //   { id: 1, post: "Hello, there", likesCount: 12 },
  //   { id: 2, post: "Its my first post", likesCount: 10 },
  //   { id: 3, post: "ts my second post", likesCount: 5 },
  // ];


  return (
    <BrowserRouter>
      <div className="app-wrapper">
        <Header />
        <Navbar />
        <Route path="/dialogs" 
        render={() => <Dialogs 
        state={props.state.profilePage} messages={props.state.messagesPage}/>}/>
        <Route path="/profile" 
        render={() => <Profile 
        state={props.state.profilePage} />}/>

       
        
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
