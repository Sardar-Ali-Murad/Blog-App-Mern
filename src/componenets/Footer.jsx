import React from "react";
import "./Footer.css";
// import Img1 from "../assets/footer1.png";
// import Img3 from "../assets/footer3.png";
// import Img2 from "../assets/footer2.png";
import {CiTwitter}  from "react-icons/ci"
import {FaFacebookF}  from "react-icons/fa"
import {TbVectorBezierCircle} from "react-icons/tb"
import {IoLogoInstagram}  from "react-icons/io"
import "./Footer.css"
import Logo from "../assets/footerLogo.png"

const Footer = () => {
  return (
    <div className="footerBigMain">
      <div className="footerMain">
        {/*  */}
        <div className="footerPart1">
            <img src={Logo} style={{height:"80px",width:"150px"}}/>
          <p>
          Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.
          </p>
        </div>
        {/*  */}
        {/*  */}
        <div className="footerInfo footerLinksLast">
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
            <input placeholder="Your Email" className="footerTextField"/>
            <button className="sub">Subcribe</button>
            <p>follow on:</p>
          </div>
          <div className="footerIcons">
             <div className="footerTwitter">
               <CiTwitter/>
             </div>
             <div className="footerIconBoxes">
               <FaFacebookF/>
             </div>
             <div className="footerIconBoxes">
              <TbVectorBezierCircle/>
             </div>
             <div className="footerIconBoxes">
              <IoLogoInstagram/>
             </div>
          </div>
        </div>
        {/*  */}
      </div>

      <div className="line"></div>
      <div className="footerLastPart">
        <p className="copyright">Copyright © 2022 For All Doctors Inc. All Rights Reserved.</p>
      </div>
    </div>
  );
};

export default Footer;