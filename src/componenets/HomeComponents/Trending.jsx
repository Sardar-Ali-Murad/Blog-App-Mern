import React from "react";
import "./Trending.css";
import img from "../../assets/trending.png";
import calender from "../../assets/calender.png";
import time from "../../assets/time.png";
import { trendingData } from "../data";

const Trending = () => {
  return (
    <div className="trendingMain">
      <div className="trendingText">
        <h2 className="fancyDectorationTrading">tranding</h2>

        <div className="trendingGrid">
          {trendingData.map((item) => {
            return (
              <div className="trendingContainer">
                <a className="trendingHead">{item?.head1}</a>
                <a className="trendingHead">{item?.head2}</a>
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
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Trending;
