import React from "react";
import LightNavbar from "../componenets/CommonComponents/LightNavbar";
import LoginComponent from "../componenets/AuthComponents/Login";
import Footer from "../componenets/CommonComponents/Footer";
import { useNavigate } from "react-router-dom";
import { useSelector ,useDispatch} from "react-redux";
import {setupGetCurrentWriter}  from "../features/writerRequest/writerRequestSlice"

const Login = () => {
  // let user=JSON.parse(localStorage.getItem("user"))
  let dispatch=useDispatch()
  let {user}=useSelector((state)=>state.store)
  let navigate=useNavigate()

  React.useEffect(()=>{
     if(user && user!==null && user!==undefined){
      dispatch(setupGetCurrentWriter())
      setTimeout(()=>{
         navigate("/userProfile")
      },2000)
     }
  },[user,navigate])
  return (
    <div>
      <LightNavbar signIn={true} getStarted={true} />
      <LoginComponent />
      <Footer />
    </div>
  );
};

export default Login;
