// Using the Register.js CSS

import React from "react";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import CircularProgress from "@mui/material/CircularProgress";
import LightNavbar from "../componenets/CommonComponents/LightNavbar";
import Footer from "../componenets/CommonComponents/Footer";
import {removeAlert,dispalyAlert}  from "../features/writerRequest/writerRequestSlice"
import axios from "axios";
import {BACK_END_URL}  from "../utils"
import Alert from "../componenets/Alert/WriterRequestAlert"
import PopUp from "../componenets/CommonComponents/PopUp"

const writerRequest = () => {

  let { showAlert, isLoading } = useSelector((state) => state.writerRequest);
  let dispatch = useDispatch();
  let alert = React.useRef(null);
  let [open,setOpen]=React.useState(false)
  let [data, setData] = React.useState({
    name: "",
    age: "",
    city: "",
    province: "",
    country: "",
    qualifications: "",
    email: "",
    contactNumber: "",
    designation: "",
    purpose: "",
  });

  function handleChange(e) {
    setData((pre) => {
      return {
        ...pre,
        [e.target.name]: e.target.value,
      };
    });
  }

  let token=(JSON.parse(localStorage.getItem("token")))
  

  const Send=async ()=>{
    alert.current.scrollIntoView({ behavior: "smooth" });
    try {
     await axios.post(`${BACK_END_URL}/writer`,{name:data.name,age:data.age,city:data.city,province:data.province,country:data.country,qualifications:data.qualifications,email:data.email,contactNumber:data.contactNumber,designation:data.designation,purpose:data.purpose},{
      headers: {
        authorization: `Bearer ${token}`,
      },
    })

    setOpen(true)

    } catch (error) {
     dispatch(dispalyAlert({showAlert:true,alertType:"danger",alertText:error.response.data.msg}))
    }
    setTimeout(()=>{
      dispatch(removeAlert())
    },3000)

  }

  return (
    <div>
      <PopUp open={open} setOpen={setOpen}/>
      <LightNavbar signIn={true} getStarted={true} />
      <div className="registerBigMian">
        <div className="registerMain" ref={alert}>
          {/* {isLoading && <CircularProgress />} */}
          <div className="divCenter">{showAlert && <Alert />}</div>
          <div>
            <h1 className="authHead">Writer Sign Up</h1>
            <p className="authPara">Enter your Details to Create Account.</p>
          </div>

          <div className="registerTextFields">
            <div className="TextFields">
              <p>Name</p>
              <input
                className="textarea"
                name="name"
                value={data.name}
                onChange={handleChange}
              />
            </div>
            <div className="TextFields">
              <p>Age</p>
              <input
                className="textarea"
                name="age"
                value={data.age}
                onChange={handleChange}
              />
            </div>
            {/*  */}
            <div className="TextFields">
              <p>City</p>
              <select
                className="textarea categoryField"
                name="city"
                value={data.city}
                onChange={handleChange}
              >
                <option value="Choose City"></option>
                <option value="Bahawalpur">Bahawalpur</option>
                <option value="Lahore">Lahore</option>
                <option value="Other">Other</option>
              </select>
            </div>
            {/*  */}
            <div className="TextFields">
              <p>Province</p>
              <select
                className="textarea categoryField"
                name="province"
                value={data.province}
                onChange={handleChange}
              >
                <option value="Choose Province"></option>
                <option value="Punjab">Punjab</option>
                <option value="Sindh">Sindh</option>
                <option value="Other">Other</option>
              </select>
            </div>
            {/*  */}
            <div className="TextFields">
              <p>Country</p>
              <select
                className="textarea categoryField"
                name="country"
                value={data.country}
                onChange={handleChange}
              >
                <option value="Choose Country"></option>
                <option value="Pakistan">Pakistan</option>
                <option value="Other">Other</option>
              </select>
            </div>
            {/*  */}

            <div className="TextFields">
              <p>Qualifications</p>
              <input
                className="textarea"
                name="qualifications"
                value={data.qualifications}
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
              <p>Contact Number</p>
              <input
                className="textarea"
                name="contactNumber"
                value={data.contactNumber}
                onChange={handleChange}
              />
            </div>
            <div className="TextFields">
              <p>Designation (if any)</p>
              <input
                className="textarea"
                name="designation"
                value={data.designation}
                onChange={handleChange}
              />
            </div>
            <div className="TextFields">
              <p>Why do I want to become an author on Howsquare?</p>
              <input
                className="textarea"
                name="purpose"
                value={data.purpose}
                onChange={handleChange}
              />
            </div>

            <button className="authBlueBtn" onClick={Send}>
              Send
            </button>
            <p className="alreadyAuth">
              Don't have an account?
              <Link to="/register">
                <span>Sign Up</span>
              </Link>
            </p>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default writerRequest;
