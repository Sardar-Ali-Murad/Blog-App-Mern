import React from "react";
import "./Footer.css";
import { CiTwitter } from "react-icons/ci";
import { FaFacebookF } from "react-icons/fa";
import { TbVectorBezierCircle } from "react-icons/tb";
import { IoLogoInstagram } from "react-icons/io";
import "./Footer.css";
import Logo from "../../assets/Logo.png";
import axios from "axios";
import { BACK_END_URL } from "../../utils";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


const Footer = () => {
  let [email,setEmail]=React.useState('')
  const Subscribe=async ()=>{
    if(!email){
      toast.error("Please Provide the email to proceed", {
        position: toast.POSITION.TOP_CENTER
    });
    }
    try {
      await axios.post(`${BACK_END_URL}/newsLetter/${email}`)
      toast.success('ThankYou For Subscribing to Our NewLetter!', {
        position: toast.POSITION.TOP_CENTER
    });
    } catch (error) {
      toast.error(error?.response?.data?.msg, {
        position: toast.POSITION.TOP_CENTER
    });
    }
  }


  return (
    <div className="footerBigMain">
      <ToastContainer/>
      <div className="footerMain">
        {/*  */}
        <div className="footerPart1">
          <img src={Logo} className="logoImage navBarLogo" />
          <p>
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s, when an unknown printer took a galley of type
            and scrambled it to make a type specimen book.
          </p>
        </div>
        {/*  */}
        {/*  */}
        <div className="footerInfo">
          <a>Quick Links</a>
          <p>About Us</p>
          <p>Our Services</p>
          <p>Contact Us </p>
          <p>Terms of Service Privacy Policy </p>
          <p>Site Map </p>
        </div>
        {/*  */}
        {/*  */}
        <div className="footerInfo footerLast">
          <p>Subscribe for newsletter</p>
          <div className="footerInputWrapper footerInputWrapperBtn footerLast">
            <input placeholder="Your Email" className="footerTextField" onChange={(e)=>setEmail(e.target.value)} />
            <button className="sub" onClick={Subscribe}>Subcribe</button>
            <p>follow on:</p>
          </div>
          <div className="footerIcons">
            <div className="footerTwitter">
              <CiTwitter />
            </div>
            <div className="footerIconBoxes">
              <FaFacebookF />
            </div>
            <div className="footerIconBoxes">
              <TbVectorBezierCircle />
            </div>
            <div className="footerIconBoxes">
              <IoLogoInstagram />
            </div>
          </div>
        </div>
        {/*  */}
      </div>

      <div className="footerLine"></div>
      <div className="footerLastPart">
        <p className="copyright">Copyright © 2022 All Rights Reserved.</p>
      </div>
    </div>
  );
};

export default Footer;
