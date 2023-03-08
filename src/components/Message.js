import React from "react";
import "../styles/Message.css";

const Message = () => {
  return (
    <div className="message owner">
      <div className="messageInfo">
        <img
          src="https://1.bp.blogspot.com/-mBoBIltF73U/WruDDr_BNHI/AAAAAAAAICw/ez51tiqwANw0hVkUjF80gTH0KEJMzVOiQCK4BGAYYCw/w0/edward_newgate_aka_whitebeard_by_bodskih-dc74zch.png"
          alt=""
          id="userImage"
        />
        <span>Just now</span>
      </div>
      <div className="messageContent">
        <p className="owner" id="message">
          Hello
        </p>
        {/* <img
          src="https://1.bp.blogspot.com/-mBoBIltF73U/WruDDr_BNHI/AAAAAAAAICw/ez51tiqwANw0hVkUjF80gTH0KEJMzVOiQCK4BGAYYCw/w0/edward_newgate_aka_whitebeard_by_bodskih-dc74zch.png"
          alt=""
          id="dataImage"
        /> */}
      </div>
    </div>
  );
};

export default Message;
