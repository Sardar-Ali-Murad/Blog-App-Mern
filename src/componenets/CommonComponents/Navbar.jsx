import React from "react";
import "./Navbar.css";
import { GiHamburgerMenu } from "react-icons/gi";
import { AiOutlineClose } from "react-icons/ai";
import Logo from "../../assets/Logo.png";
import { Link } from "react-router-dom";

const Navbar = () => {
  let [ham, setHam] = React.useState(true);
  return (
    <div className="nav">
      <div className="nav-main">
        <div className="nav-front">
          <img src={Logo} className="logoImage navBarLogo" />
        </div>

        <nav className="big-screen-nav">
          <ul>
            <li>
              <Link to="/" className="fancy-link">
                home1
              </Link>
            </li>
            <li>
              <Link to="/home2" className="fancy-link">
                home2
              </Link>
            </li>
            <li>
              <Link className="fancy-link" to="/writer/123">
                writer profile
              </Link>
            </li>
            <li>
              <Link className="fancy-link" to="/category/DataScience">
                single category
              </Link>
            </li>
            <li>
              <Link className="fancy-link" to="/writersList">
                writers
              </Link>
            </li>
            <li>
              <Link className="fancy-link" to="/about">
                about
              </Link>
            </li>
          </ul>
        </nav>

        <div className="navBtnsBigScreen">
          <Link to="/register">
            <button className="signUp" style={{ background: "#0065FD" }}>
              Sign In
            </button>
          </Link>
          <Link to="/getStarted">
            <button className="login">Get Started</button>
          </Link>
        </div>

        <GiHamburgerMenu className="ham" onClick={() => setHam(false)} />
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
              <Link
                className="links fancy-link"
                onClick={() => setHam(true)}
                to="/"
              >
                home1
              </Link>
            </li>
            <li>
              <Link
                className="links fancy-link"
                onClick={() => setHam(true)}
                to="/home2"
              >
                home2
              </Link>
            </li>
            <li>
              <Link
                className="links fancy-link"
                onClick={() => setHam(true)}
                to="/writer/123"
              >
                writer profile
              </Link>
            </li>
            <li>
              <Link
                className="links fancy-link"
                onClick={() => setHam(true)}
                to="/category/DataScience"
              >
                single category
              </Link>
            </li>
            <li>
              <Link
                className="links fancy-link"
                onClick={() => setHam(true)}
                to="/writersList"
              >
                writers
              </Link>
            </li>
            <li>
              <Link
                className="links fancy-link"
                onClick={() => setHam(true)}
                to="/about"
              >
                about
              </Link>
            </li>
          </ul>
        </nav>
        <div className="navBtnsSmallScreen">
          <Link to="/register">
            <button className="signUp" style={{ background: "#0065FD" }}>
              {" "}
              Sign Up
            </button>
          </Link>
          <Link to="/login">
            <button className="login">Login</button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
