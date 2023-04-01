import React from "react";
import "./Register.css";
import { Link } from "react-router-dom";
import { setupUserLoginApi, removeAlert } from "../../features/userSlice";
import { useDispatch, useSelector } from "react-redux";
import Alert from "../Alert/UserAlert";
import GoogleLogin from "../GoogleAuth/GoogleLogin"
import CircularProgress from "@mui/material/CircularProgress";


const Login = () => {
  let dispatch = useDispatch();
  let { showAlert,isLoading } = useSelector((state) => state.store);
  let alert = React.useRef(null);
  let [data, setData] = React.useState({
    email: "",
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

  function LoginFun() {
    dispatch(setupUserLoginApi(data));
    setTimeout(() => {
      dispatch(removeAlert());
    }, 3000);
    alert.current.scrollIntoView({ behavior: "smooth" });
  }

  return (
    <div className="registerBigMian">
      <div className="registerMain" ref={alert}>
        {
          isLoading && <CircularProgress/>
        }
        {showAlert && <Alert />}
        <div>
          <h1 className="authHead">Sign In</h1>
          <p className="authPara">
            Enter your email address or username and password to <br />
            access account
          </p>
        </div>

        <div className="registerTextFields">
          <div className="TextFields">
            <p>Username or Email Address</p>
            <input
              className="textarea"
              name="email"
              value={data.email}
              onChange={handleChange}
            />
          </div>
          <div className="TextFields">
            <p>Password</p>
            <input
              className="textarea"
              name="password"
              value={data.password}
              onChange={handleChange}
              type="password"
            />
          </div>

          <div className="loginBtnsWrapper">
            <div className="authFlex">
              <div className="checkFlex">
                <input type="checkbox" />
                <p>Remember Me</p>
              </div>
              <Link to="/forgetPassword">
                <p className="forgerPassword">Forgot your password?</p>
              </Link>
            </div>
            <button className="authBlueBtn" onClick={LoginFun}>
              Sign In
            </button>

            <div>
              <p className="or">Or</p>
              {/* <button className="authRedBtn">Login With Google</button> */}
              <GoogleLogin/>
            </div>
            <p className="alreadyAuth">
              Don't have an account?
              <Link to="/register">
                <span>Sign Up</span>
              </Link>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
