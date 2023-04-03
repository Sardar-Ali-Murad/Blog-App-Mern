// Using the Register.js CSS

import React from "react";
import { Link } from "react-router-dom";
// import { setupUserRegisternApi, removeAlert } from "../../features/userSlice";
import { useDispatch, useSelector } from "react-redux";
// import Alert from "../Alert/UserAlert";
import CircularProgress from "@mui/material/CircularProgress";
import LightNavbar from "../componenets/CommonComponents/LightNavbar";
import Footer from "../componenets/CommonComponents/Footer";

const Register = () => {
  let { showAlert, isLoading } = useSelector((state) => state.store);
  let dispatch = useDispatch();
  let alert = React.useRef(null);
  let [data, setData] = React.useState({
    firstName: "",
    lastName: "",
    email: "",
    phoneNo: "",
    categories: "",
    password: "",
  });

  function handleChange(e) {
    setData((pre) => {
      return {
        ...pre,
        [e.target.name]: e.target.value,
      };
    });
  }

  function Send() {

  }

  return (
    <div>
      <LightNavbar signIn={true} getStarted={true} />
      <div className="registerBigMian">
        <div className="registerMain" ref={alert}>
          {isLoading && <CircularProgress />}
          <div className="divCenter">{showAlert && <Alert />}</div>
          <div>
            <h1 className="authHead">Submit a request</h1>
            <p className="authPara">
              Enter your email address or username and password to <br /> access
              account..
            </p>
          </div>

          <div className="registerTextFields">
            <div className="TextFields">
              <p>Name</p>
              <input
                className="textarea"
                name="firstName"
                value={data.firstName}
                onChange={handleChange}
              />
            </div>
            <div className="TextFields">
              <p>Email</p>
              <input
                className="textarea"
                name="lastName"
                value={data.lastName}
                onChange={handleChange}
              />
            </div>
            <div className="TextFields">
              <p>Contact</p>
              <input
                className="textarea"
                name="email"
                value={data.email}
                onChange={handleChange}
              />
            </div>
            <div className="TextFields">
              <p>What can we help you with?</p>
              <select
                className="textarea categoryField"
                name="categories"
                value={data.categories}
                onChange={handleChange}
              >
                <option value="Choose Reason"></option>
                <option value="SelfImprovement">Self Improvement</option>
                <option value="Technology">Technology</option>
              </select>
            </div>
            <div className="TextFields">
              <p>Message</p>
              <textarea
                className="textarea"
                type="password"
                style={{ height: "150px" }}
                name="password"
                value={data.password}
                onChange={handleChange}
              ></textarea>
            </div>

            <button className="authBlueBtn" onClick={Send}>
              Send
            </button>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Register;
