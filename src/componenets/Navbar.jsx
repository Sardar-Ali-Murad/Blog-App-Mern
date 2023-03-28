import React from "react";
import "./Navbar.css";
import { GiHamburgerMenu } from "react-icons/gi";
import { AiOutlineClose } from "react-icons/ai";
import Logo from "../assets/Logo.png";

const Navbar = () => {
  let [ham, setHam] = React.useState(true);
  return (
    <div className="nav">
      <div className="nav-main">
        <div className="nav-front">
          <img src={Logo} className="logoImage" />
        </div>

        <nav className="big-screen-nav">
          <ul>
            <li>
              <a className="fancy-link" href="#home">
                HOME
              </a>
            </li>
            <li>
              <a className="fancy-link" href="#about">
                ABOUT US
              </a>
            </li>
            <li>
              <a className="fancy-link" href="#services">
                SERVICES
              </a>
            </li>
            <li>
              <a className="fancy-link" href="#faq">
                FAQ’s
              </a>
            </li>
            <li>
              <a className="fancy-link" href="#contact">
                CONTACT US
              </a>
            </li>
          </ul>
        </nav>

        <div className="navBtnsBigScreen">
         <button className="signUp" style={{background:'#0065FD'}}> Sign Up</button>
         <button className="login">Login</button>
        </div>

        <GiHamburgerMenu className="ham" onClick={() => setHam(false)} style={{color:"white"}} />
      </div>

      <div
        className={`smal-screen-nav ${!ham ? "small-screen-nav-active" : ""}`}
      >
        <AiOutlineClose
          onClick={() => setHam(true)}
          className="small-screen-close"
        />
        <nav>
          <ul>
            <li>
              <a
                className="links fancy-link"
                onClick={() => setHam(true)}
                href="#home"
              >
                HOME
              </a>
            </li>
            <li>
              <a
                className="links fancy-link"
                onClick={() => setHam(true)}
                href="#about"
              >
                ABOUT US
              </a>
            </li>
            <li>
              <a
                className="links fancy-link"
                onClick={() => setHam(true)}
                href="#services"
              >
                SERVICES
              </a>
            </li>
            <li>
              <a
                className="links fancy-link"
                onClick={() => setHam(true)}
                href="#faq"
              >
                FAQ’s
              </a>
            </li>
            <li>
              <a
                className="links fancy-link"
                onClick={() => setHam(true)}
                href="#contact"
              >
                CONTACT Us
              </a>
            </li>
          </ul>
        </nav>
        <div className="navBtnsSmallScreen">
         <button className="signUp" style={{background:"#0065FD"}}> Sign Up</button>
         <button className="login">Login</button>
        </div>

      </div>
    </div>
  );
};

export default Navbar;