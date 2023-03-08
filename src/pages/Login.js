import React from "react";
import "../styles/Login.css";

const Login = () => {
  return (
    <div className="formContainer">
      <div className="formWrapper">
        <span className="logo">Chatrio</span>
        <span className="title">Login</span>
        <form className="">
          <input type="email" className="" placeholder="Email" />
          <input type="password" className="" placeholder="Password" />
          <button>Sign Up</button>
        </form>
        <p>Don't have an account? Register</p>
      </div>
    </div>
  );
};

export default Login;
