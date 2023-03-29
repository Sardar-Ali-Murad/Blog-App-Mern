import React from "react";
import "./RightComponent.css";
import { blogsData } from "../data";
import img from "../../assets/trending.png";
import calender from "../../assets/calender.png";
import time from "../../assets/time.png";
import { writers } from "../data";
import { FaFacebookF } from "react-icons/fa";
import { TbVectorBezierCircle } from "react-icons/tb";
import { IoLogoInstagram } from "react-icons/io";
import { CiTwitter } from "react-icons/ci";

const RightComponent = () => {
  return (
    <div className="rightSideBarMain">
      {/*  */}
      <div className="rightSideBarMainFlex">
        <h2>Top Stories</h2>
        <a>View All</a>
      </div>
      {/*  */}
      <div>
        {blogsData.slice(0, 3).map((item) => {
          return (
            <div className="singleBlog">
              <img src={item?.img} className="rightSideBarMainImage" />
              <div className="blogsContent">
                <div className="travelChip">
                  <p>Travel</p>
                </div>
                <p className="trendingEnd">
                  set video playback speed with javascript version
                </p>
                <div className="trendingFlex">
                  <img src={img} />
                  <p>{item?.name}</p>
                </div>
                <div className="trendingTime">
                  <img src={calender} />
                  <p>{item?.date}</p>
                  <img src={time} />
                  <p>{item?.time}</p>
                </div>
              </div>
            </div>
          );
        })}
      </div>
      {/*  */}
      <div className="rightSideBarMainFlex">
        <h2>Top Writers</h2>
        <a>View All</a>
      </div>
      {/*  */}
      <div>
        {writers.map((writer) => {
          return (
            <div className="writterWrapper">
              <img src={writer?.img} />
              <div className="writtersContent">
                <div>
                  <p className="writterName">{writer.name}</p>
                  <p className="writterBio">{writer?.bio}</p>
                </div>
                <div className="writtersIcons">
                  <div className="rightComponentWritersIcons">
                    <FaFacebookF />
                  </div>
                  <div className="rightComponentWritersIcons">
                    <TbVectorBezierCircle />
                  </div>
                  <div className="rightComponentWritersIcons">
                    <IoLogoInstagram />
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </div>
      {/*  */}
      <div>
        <div className="rightSideBarMainFlex rightSidebarFlexBoxes">
          <h2>Quick Start</h2>
        </div>
        <div className="numbers">
          <div className="numberSingle">
            <p className="amount">14</p>
            <p className="amountContent">New Post</p>
          </div>
          <div className="numberSingle">
            <p className="amount">480</p>
            <p className="amountContent">total visitors</p>
          </div>
          <div className="numberSingle">
            <p className="amount">29</p>
            <p className="amountContent">New subscribers</p>
          </div>
          <div className="numberSingle">
            <p className="amount">138</p>
            <p className="amountContent">blog read</p>
          </div>
        </div>
      </div>

      {/*  */}
      <div className="rightSideBarMainFlex rightSidebarFlexBoxes">
        <h2>Follow Us</h2>
      </div>
      <div className="writtersIcons">
        <div className=" rightSideBarBigIcons rightSideBarTwitter">
          <CiTwitter />
        </div>
        <div className="rightSideBarBigIcons">
          <FaFacebookF />
        </div>
        <div className="rightSideBarBigIcons">
          <TbVectorBezierCircle />
        </div>
        <div className="rightSideBarBigIcons">
          <IoLogoInstagram />
        </div>
      </div>
      {/*  */}
      <div className="rightSideBarMainFlex rightSidebarFlexBoxes">
        <h2>Categories </h2>
        <a>View All</a>
      </div>

      <div className="rightSideBarCategories">
        <div className="rightSideBarSingleCategory">
          <p>Travel</p>
        </div>
        <div className="rightSideBarSingleCategory">
          <p>lifestyle</p>
        </div>
        <div className="rightSideBarSingleCategory">
          <p>fashion</p>
        </div>
        <div className="rightSideBarSingleCategory active">
          <p>Data Science</p>
        </div>
        <div className="rightSideBarSingleCategory">
          <p>business</p>
        </div>
        <div className="rightSideBarSingleCategory">
          <p>design</p>
        </div>
        <div className="rightSideBarSingleCategory">
          <p>health</p>
        </div>
        <div className="rightSideBarSingleCategory">
          <p>food</p>
        </div>
        <div className="rightSideBarSingleCategory">
          <p>art</p>
        </div>
      </div>
      {/*  */}

      <div className="rightSideBarAdd">
        <h2>want to travel sikkim by car?</h2>
        <p>
          Did you come here for something in particular or just general
          Riker-bashing? And blowing into
        </p>
        <button className="addBtn">Visit Us</button>
      </div>
    </div>
  );
};

export default RightComponent;
