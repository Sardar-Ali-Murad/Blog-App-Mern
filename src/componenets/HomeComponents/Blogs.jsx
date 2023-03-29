import React from "react";
import "./Blogs.css";
import { blogsData } from "../data";
import img from "../../assets/trending.png";
import calender from "../../assets/calender.png";
import time from "../../assets/time.png";
import RightComponent from "../CommonComponents/RightComponent";

const Blogs = () => {
  return (
    <div className="blogsMain">
      {/*  */}
      <div className="blogsPart1">
        <div>
          {blogsData.slice(0, 3).map((item) => {
            return (
              <div className="singleBlog">
                <img src={item?.img} />
                <div className="blogsContent">
                  <div className="travelChip">
                    <p>Travel</p>
                  </div>
                  <div className="blogsHead">
                    <p>Design is the Mix of emotions</p>
                  </div>
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
                  <p className="trendingEnd">{item?.lastText}</p>
                </div>
              </div>
            );
          })}
        </div>
        <div className="addHere">
          <h1>Add Here</h1>
        </div>
        <div className="blogsPart1">
          {blogsData.slice(3, -1).map((item) => {
            return (
              <div className="singleBlog">
                <img src={item?.img} />
                <div className="blogsContent">
                  <div className="travelChip">
                    <p>Travel</p>
                  </div>
                  <div className="blogsHead">
                    <p>Design is the Mix of emotions</p>
                  </div>
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
                  <p className="trendingEnd">{item?.lastText}</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
      {/*  */}

      <div className="BlogsPart2">
        <RightComponent />
      </div>
    </div>
  );
};

export default Blogs;
