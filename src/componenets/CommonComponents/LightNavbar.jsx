import React from "react";
import "./LightNavbar.css";
import { GiHamburgerMenu } from "react-icons/gi";
import { AiOutlineClose } from "react-icons/ai";
import Logo from "../../assets/writerNavLogo.png";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import Logout from "./Logout";

const Navbar = () => {
  let [ham, setHam] = React.useState(true);
  let { user } = useSelector((state) => state.store);
  let { currentWriterInfo } = useSelector((state) => state.writerRequest);

  return (
    <div className="nav bigScreenNavWriter darkNav">
      <div className="nav-main" id="nav-main-writer">
        <div className="nav-front">
          <img src={Logo} className="logoImage navBarLogo" />
        </div>

        <nav className="big-screen-nav darkNavNavbar">
          <ul>
            <li>
              <Link
                className="fancy-link"
                to="/"
                style={{ color: "#FAF9F6", fontSize: "20px" }}
              >
                Home
              </Link>
            </li>
            <li>
              <Link
                className="fancy-link"
                to="/about"
                style={{ color: "#FAF9F6", fontSize: "20px" }}
              >
                About Us
              </Link>
            </li>
            <li>
              <Link
                className="fancy-link"
                to="/courses"
                style={{ color: "#FAF9F6", fontSize: "20px" }}
              >
                Courses
              </Link>
            </li>
            <li>
              <Link
                className="fancy-link"
                to="/WriterForm"
                style={{ color: "#FAF9F6", fontSize: "20px" }}
              >
                Write
              </Link>
            </li>
            <li>
              <Link
                className="fancy-link"
                to="/Request"
                style={{ color: "#FAF9F6", fontSize: "20px" }}
              >
                Contact Us
              </Link>
            </li>
            {user?.writer && (
              <li>
                <Link
                  className="fancy-link"
                  to="/writeBlog"
                  style={{ color: "#FAF9F6", fontSize: "20px" }}
                >
                  Write Blog
                </Link>
              </li>
            )}
          </ul>
        </nav>

        <div className="navBtnsBigScreen">
          {/*  */}
          {!user && (
            <Link to="/register">
              <button className="commonBtn">Sign In</button>
            </Link>
          )}
          {/* <button className="login">Get Started</button> */}

          {/*  */}
          {user?.writer && (
            <Link to={`/writer/${currentWriterInfo._id}`}>
              <button className="commonBtn">Writer Profile</button>
            </Link>
          )}
          {user && (
            <Link to="/userProfile">
              <button className="commonBtn">User Profile</button>
            </Link>
          )}
          {user && <Logout />}
        </div>

        <GiHamburgerMenu
          className="ham hamWriter"
          style={{ color: "#f1f1f1" }}
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
                to="/"
                onClick={() => setHam(true)}
              >
                Home
              </Link>
            </li>
            <li>
              <Link
                className="links fancy-link"
                to="/about"
                onClick={() => setHam(true)}
              >
                About Us
              </Link>
            </li>
            <li>
              <Link
                className="links fancy-link"
                to="/courses"
                onClick={() => setHam(true)}
              >
                Courses
              </Link>
            </li>
            <li>
              <Link
                className="links fancy-link"
                to="/WriterForm"
                onClick={() => setHam(true)}
              >
                Write
              </Link>
            </li>
            <li>
              <Link
                className="links fancy-link"
                to="/Request"
                onClick={() => setHam(true)}
              >
                Contact Us
              </Link>
            </li>
            {user?.writer && (
              <li>
                <Link
                  className="fancy-link links"
                  to="/writeBlog"
                  onClick={() => setHam(true)}
                >
                  Write Blog
                </Link>
              </li>
            )}
          </ul>
        </nav>
        <div className="navBtnsSmallScreen navBtnsSmallScreenWriter">
          {!user && (
            <Link to="/register">
              <button className="commonBtn">Sign In</button>
            </Link>
          )}
          {/* <button className="login">Get Started</button> */}

          {/*  */}
          {user?.writer && (
            <Link to={`/writer/${currentWriterInfo._id}`}>
              <button className="commonBtn">Writer Profile</button>
            </Link>
          )}
          {user && (
            <Link to="/userProfile">
              <button className="commonBtn">User Profile</button>
            </Link>
          )}
          {user && <Logout />}
        </div>
      </div>
    </div>
  );
};

export default Navbar;
