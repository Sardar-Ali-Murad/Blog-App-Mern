import React from "react";
import "./LightNavbar.css";
import { GiHamburgerMenu } from "react-icons/gi";
import { AiOutlineClose } from "react-icons/ai";
import Logo from "../../assets/writerNavLogo.png";
import writerMan from "../../assets/writerMan.png";
import { Link } from "react-router-dom";

const Navbar = ({ signIn, getStarted, person }) => {
  let [ham, setHam] = React.useState(true);
  return (
    <div className="nav bigScreenNavWriter">
      <div className="nav-main" id="nav-main-writer">
        {/* <div className="nav-front">
          <img src={Logo} className="logoImage navBarLogo" />
        </div> */}

        <nav className="big-screen-nav">
          <ul>
            <li>
              <Link className="fancy-link" to="/">
                home1
              </Link>
            </li>
            <li>
              <Link className="fancy-link" to="/home2">
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

            {/*  */}

            <li>
              <Link className="fancy-link" to="/courses">
                courses
              </Link>
            </li>
            <li>
              <Link className="fancy-link" to="/FAQ">
                faq
              </Link>
            </li>
            <li>
              <Link className="fancy-link" to="/WriterForm">
                writer form
              </Link>
            </li>
            <li>
              <Link className="fancy-link" to="/Write">
                write
              </Link>
            </li>
            <li>
              <Link className="fancy-link" to="/Request">
                request
              </Link>
            </li>


          </ul>
        </nav>

        <div className="navBtnsBigScreen">
          {/*  */}
          {signIn && (
            <Link to="/register">
              <button className="signUp" style={{ background: "#0065FD" }}>
                Sign In
              </button>
            </Link>
          )}
          {/* <button className="login">Get Started</button> */}

          {/*  */}
          {getStarted && (
            <Link to="/getStarted">
              <button className="getStartedWriter">Get Started</button>
            </Link>
          )}
          {person && (
            <div className="writerPerson">
              <img src={writerMan} />
            </div>
          )}
          {/*  */}
        </div>

        <GiHamburgerMenu
          className="ham hamWriter"
          onClick={() => setHam(false)}
        />
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


            {/*  */}
            <li>
              <Link
                className="fancy-link links"
                to="/courses"
                onClick={() => setHam(true)}
              >
                courses
              </Link>
            </li>
            <li>
              <Link
                className="fancy-link links"
                to="/FAQ"
                onClick={() => setHam(true)}
              >
                faq
              </Link>
            </li>
            <li>
              <Link
                className="fancy-link links"
                to="/WriterForm"
                onClick={() => setHam(true)}
              >
                writer form
              </Link>
            </li>
            <li>
              <Link
                className="fancy-link links"
                onClick={() => setHam(true)}
                to="/Write"
              >
                write
              </Link>
            </li>
            <li>
              <Link
                className="fancy-link links"
                to="/Request"
                onClick={() => setHam(true)}
              >
                request
              </Link>
            </li>
          </ul>
        </nav>
        <div className="navBtnsSmallScreen navBtnsSmallScreenWriter">
          <Link to="/getStarted">
            <button className="getStartedWriter"> Get Started</button>
          </Link>
          <div className="writerPerson">
            <img src={writerMan} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
