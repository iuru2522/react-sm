import React from "react";
import "./Dialogs.css";

const Dialogs = () => {
  return (
    <div className="dialogz">
      <div className="dialogs-item">
        <div className="dialog" className="active">
          Julia
        </div>
        <div className="dialog">Romko</div>
        <div className="dialog">Dima</div>
        <div className="dialog">Olia</div>
      </div>
      <div className="messages">
        <div className="message">Hi</div>
        <div className="message">How are you?</div>
        <div className="message">Yooo</div>
      </div>
    </div>
  );
};

export default Dialogs;
