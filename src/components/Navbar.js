import React from "react";
import "../styles/Navbar.css";

const Navbar = () => {
  return (
    <div className="navbar">
      <span className="logo">Chatrio</span>
      <div className="user">
        <img src="https://1.bp.blogspot.com/-mBoBIltF73U/WruDDr_BNHI/AAAAAAAAICw/ez51tiqwANw0hVkUjF80gTH0KEJMzVOiQCK4BGAYYCw/w0/edward_newgate_aka_whitebeard_by_bodskih-dc74zch.png" alt="" />
        <span>Raman</span>
        <button>Logout</button>
      </div>
    </div>
  );
};

export default Navbar;
