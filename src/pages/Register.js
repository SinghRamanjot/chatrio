import React from "react";
import Add from "../assets/addAvatar.png";
import "./styles/Register.css";

const Register = () => {
  return (
    <div className="formContainer">
      <div className="formWrapper">
        <span className="logo">Chatrio</span>
        <span className="title">Register</span>
        <form className="">
          <input type="text" className="" placeholder="Display Name" />
          <input type="email" className="" placeholder="Email" />
          <input type="password" className="" placeholder="Password" />
          <input
            type="file"
            id="file"
            className=""
            placeholder="Add an avatar"
          />
          <label htmlFor="file">
            <img src={Add} alt="add avatar" />
            <span className="addAvatar">Add an Avatar</span>
          </label>
          <button>Sign Up</button>
        </form>
        <p>Do you have an account? Login</p>
      </div>
    </div>
  );
};

export default Register;
