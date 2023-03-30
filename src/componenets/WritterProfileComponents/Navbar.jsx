import React from "react";
import "./Navbar.css";
import { GiHamburgerMenu } from "react-icons/gi";
import { AiOutlineClose } from "react-icons/ai";
import Logo from "../../assets/writerNavLogo.png";
import writerMan from "../../assets/writerMan.png"

const Navbar = () => {
  let [ham, setHam] = React.useState(true);
  return (
    <div className="nav bigScreenNavWriter">
      <div className="nav-main" id="nav-main-writer">
        <div className="nav-front">
          <img src={Logo} className="logoImage navBarLogo" />
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
                Our Story
              </a>
            </li>
            <li>
              <a className="fancy-link" href="#faq">
                Write
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
          <button className="getStartedWriter">
            Get Started
          </button>
          <div className="writerPerson">
          <img src={writerMan}/>
          </div>
        </div>

        <GiHamburgerMenu className="ham hamWriter" onClick={() => setHam(false)} />
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
                Our Story
              </a>
            </li>
            <li>
              <a
                className="links fancy-link"
                onClick={() => setHam(true)}
                href="#faq"
              >
                Write
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
        <div className="navBtnsSmallScreen navBtnsSmallScreenWriter">
          <button className="getStartedWriter">
            {" "}
            Get Started
          </button>
          <div className="writerPerson">
          <img src={writerMan}/>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
