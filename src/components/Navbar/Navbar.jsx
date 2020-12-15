import React from "react";
// import classes from './Navbar.module.css';
import './Navbar.css';



const Navbar = () => {
  return (
    <nav className="nav">
      <div className='itemz'>
        <a>Profile</a>
      </div>

      <div className='itemz'>
        <a>Messages</a>
      </div>

      <div className='itemz'>
        <a>News</a>
      </div>

      <div className='itemz'>
        <a>Music</a>
      </div>

      <div className='itemz'>
        <a>Settings</a>
      </div>
    </nav>
  );
};

export default Navbar;
