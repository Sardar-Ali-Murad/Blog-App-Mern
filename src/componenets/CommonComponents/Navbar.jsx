import React from "react";
import "./Navbar.css";
import { GiHamburgerMenu } from "react-icons/gi";
import { AiOutlineClose } from "react-icons/ai";
import Logo from "../../assets/Logo.png";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import Avatar from '@mui/material/Avatar';
import No from "../../assets/no.webp"

const Navbar = () => {
  let user=JSON.parse(localStorage.getItem("user"))
  let [ham, setHam] = React.useState(true);
  let {image,isLoading}=useSelector((state)=>state.writerRequest)

  return (
    <div className="nav">
      <div className="nav-main">
        <div className="nav-front">
          <img src={Logo} className="logoImage navBarLogo" />
        </div>

        <nav className="big-screen-nav">
          <ul>
          <li>
              <Link className="fancy-link" to="/">
                Home
              </Link>
            </li>
            <li>
              <Link className="fancy-link" to="/about">
                About Us
              </Link>
            </li>
            <li>
              <Link className="fancy-link" to="/courses">
                Courses
              </Link>
            </li>
            <li>
              <Link className="fancy-link" to="/WriterForm">
                Write
              </Link>
            </li>
            <li>
              <Link className="fancy-link" to="/Request">
                Contact Us
              </Link>
            </li>
            {
              (user?.writer && !isLoading) &&
              <li>
              <Link className="fancy-link" to="/writeBlog">
                Write Blog
              </Link>
            </li>
            }
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
          {
            user?.writer && 
            <Link to="WriterDetailForm">
             <Avatar alt="Remy Sharp" src={image?image:No} style={{cursor:"pointer"}} />
            </Link>
          }
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
              <Link className="links fancy-link" to="/" onClick={()=>setHam(true)}>
                Home
              </Link>
            </li>
            <li>
              <Link className="links fancy-link" to="/about" onClick={()=>setHam(true)}>
                About Us
              </Link>
            </li>
            <li>
              <Link className="links fancy-link" to="/courses" onClick={()=>setHam(true)}>
              Courses
              </Link>
            </li>
            <li>
              <Link className="links fancy-link" to="/WriterForm" onClick={()=>setHam(true)}>
                Write
              </Link>
            </li>
            <li>
              <Link className="links fancy-link" to="/Request" onClick={()=>setHam(true)}>
                Contact Us
              </Link>
            </li>
            {
              user?.writer &&
              <li>
              <Link className="fancy-link links" to="/writeBlog" onClick={()=>setHam(true)}>
                Write Blog
              </Link>
            </li>
            }
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
          {
          (user?.writer && !isLoading) &&
            <Link to="WriterDetailForm">
             <Avatar alt="Remy Sharp" src={image?image:No} style={{cursor:"pointer"}} />
            </Link>
          }
        </div>
      </div>
    </div>
  );
};

export default Navbar;
