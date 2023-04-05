import React from "react";
import "./Register.css";
import { Link } from "react-router-dom";
import { setupUserRegisternApi, removeAlert } from "../../features/user/userSlice";
import { useDispatch, useSelector } from "react-redux";
import Alert from "../Alert/UserAlert";
import CircularProgress from "@mui/material/CircularProgress";

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

  function RegisterFun() {
    dispatch(setupUserRegisternApi(data));
    alert.current.scrollIntoView({ behavio: "smooth" });
    setTimeout(() => {
      dispatch(removeAlert());
    }, 3000);
  }

  return (
    <div className="registerBigMian">
      <div className="registerMain" ref={alert}>
        {isLoading && <CircularProgress />}
        <div className="divCenter">{showAlert && <Alert />}</div>
        <div>
          <h1 className="authHead">Sign Up</h1>
          <p className="authPara">Enter your Details to Create Account.</p>
        </div>

        <div className="registerTextFields">
          <div className="TextFields">
            <p>First name</p>
            <input
              className="textarea"
              name="firstName"
              value={data.firstName}
              onChange={handleChange}
            />
          </div>
          <div className="TextFields">
            <p>Last Name</p>
            <input
              className="textarea"
              name="lastName"
              value={data.lastName}
              onChange={handleChange}
            />
          </div>
          <div className="TextFields">
            <p>Email</p>
            <input
              className="textarea"
              name="email"
              value={data.email}
              onChange={handleChange}
            />
          </div>
          <div className="TextFields">
            <p>Phone Number</p>
            <input
              className="textarea"
              name="phoneNo"
              value={data.phoneNo}
              onChange={handleChange}
            />
          </div>
          <div className="TextFields">
            <p>Categories</p>
            <select
              className="textarea categoryField"
              name="categories"
              value={data.categories}
              onChange={handleChange}
            >
              <option value=""></option>
              <option value="SelfImprovement">Self Improvement</option>
              <option value="Technology">Technology</option>
            </select>
          </div>
          <div className="TextFields">
            <p>Password</p>
            <input
              className="textarea"
              type="password"
              name="password"
              value={data.password}
              onChange={handleChange}
            />
          </div>

          <button className="authBlueBtn" onClick={RegisterFun}>
            Sign In
          </button>

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
