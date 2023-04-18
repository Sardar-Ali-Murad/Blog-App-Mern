import React from "react";
import img from "../../assets/trending.png";
import calender from "../../assets/calender.png";
import time from "../../assets/time.png";
import { useSelector } from "react-redux";
import { SlCalender } from "react-icons/sl";
import { BiCircle } from "react-icons/bi";
import moment from "moment";
import { Link } from "react-router-dom";

const WriterBlogs = () => {
  let { currentWritterBlogs } = useSelector((state) => state.blog);
  return (
    <div>
      {currentWritterBlogs.map((item) => {
        return (
          <Link to={`/blog/${item?._id}`}>
          <div className="blogsPart1">
            <div>
              <div className="singleBlog">
                <img src={item?.posterImage} className="writerBlogsMainImage" />
                <div className="blogsContent">
                  <div className="Chips">
                    <p>{item?.category}</p>
                  </div>
                  <div className="blogsHead">
                    <p>{item?.title}</p>
                  </div>
                  {/* <div className="trendingTime">
                <img src={calender} />
                <p>{item?.createdAt}</p>
                <img src={time} />
                <p>3 min</p>
              </div> */}
                  <div className="trendingTime">
                    <SlCalender style={{ color: "#FAF9F6" }} />
                    <p style={{ color: "#FAF9F6" }}>
                      {" "}
                      {moment(item?.createdAt).format("DD/MM/YYYY")}
                    </p>
                    <BiCircle style={{ color: "#FAF9F6" }} />
                    <p style={{ color: "#FAF9F6" }}>3 min to Read</p>
                  </div>
                  <p className="trendingEnd" style={{ color: "#FAF9F6" }}>{item?.subTitle}</p>
                </div>
              </div>
            </div>
          </div>
      </Link>
        );
      })}
    </div>
  );
};

export default WriterBlogs;
