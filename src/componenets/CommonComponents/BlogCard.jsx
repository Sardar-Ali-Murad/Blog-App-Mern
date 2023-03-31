import React from "react";
import img from "../../assets/trending.png";
import calender from "../../assets/calender.png";
import time from "../../assets/time.png";

const BlogCard = ({ item }) => {
  return (
    <div>
      <div className="blogsPart1">
        <div>
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
        </div>
      </div>
    </div>
  );
};

export default BlogCard;
