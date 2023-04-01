import React from "react";
import "./Register.css";
import { Link } from "react-router-dom";

const Register = () => {
  return (
    <div className="registerBigMian">
      <div className="registerMain">
        <div>
          <h1 className="authHead">Sign Up</h1>
          <p className="authPara">Enter your Details to Create Account.</p>
        </div>

        <div className="registerTextFields">
          <div className="TextFields">
            <p>First name</p>
            <input className="textarea" />
          </div>
          <div className="TextFields">
            <p>Last Name</p>
            <input className="textarea" />
          </div>
          <div className="TextFields">
            <p>Email</p>
            <input className="textarea" />
          </div>
          <div className="TextFields">
            <p>Phone Number</p>
            <input className="textarea" />
          </div>
          <div className="TextFields">
            <p>Categories</p>
            <select className="textarea categoryField">
              <option></option>
              <option>Self Improvement</option>
              <option>Technology</option>
            </select>
          </div>
          <div className="TextFields">
            <p>Password</p>
            <input className="textarea" type="password" />
          </div>

          <button className="authBlueBtn">Sign In</button>

          <p className="alreadyAuth">
            You have an account?
            <Link to="/login">
              <span>Sign In</span>
            </Link>
          </p>

        </div>
      </div>
    </div>
  );
};

export default Register;
