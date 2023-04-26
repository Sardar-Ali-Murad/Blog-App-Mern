import React from "react";
import "./Trending.css";
import img from "../../assets/trending.png";
import calender from "../../assets/calender.png";
import time from "../../assets/time.png";
import { trendingData } from "../data";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import moment from "moment";

const Trending = () => {
  let { withOutFilterBlogs } = useSelector((state) => state.blog);
  return (
    <div className="trendingMain">
      <div className="trendingText">
        <h2 className="fancyDectorationTrading">tranding</h2>

        <div className="trendingGrid">
          {withOutFilterBlogs.slice(0, 6).map((item, i) => {
            return (
              <Link to={`/blog/${item?._id}`} key={i}>
                <div className="trendingContainer">
                  <div className="mainImageWrapper">
                    <img src={item?.posterImage} className="mainImage" />
                  </div>
                  <a className="trendingHead">{item?.title}</a>
                  <div className="trendingFlex">
                    <Link to={`/WriterPublicProfile/${item?.writer?._id}`}>
                      <img
                        src={item?.writer?.photo}
                        style={{
                          width: "30px",
                          height: "30px",
                          borderRadius: "50%",
                        }}
                      />
                    </Link>
                    <p>{item?.writer?.name}</p>
                  </div>
                  <div className="trendingTime">
                    <img src={calender} />
                    <p> {moment(item?.createdAt).format("DD/MM/YYYY")}</p>
                    <img src={time} />
                    <p>3 min to read</p>
                  </div>
                  <p className="trendingEnd">{item?.subTitle}</p>
                </div>
              </Link>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Trending;
