import React from "react";
import img from "../../assets/trending.png";
import calender from "../../assets/calender.png";
import time from "../../assets/time.png";
import moment from "moment";

const BlogCard = ({ item }) => {
  return (
    <div>
      <div className="blogsPart1">
        <div>
          <div className="singleBlog">
            <img src={item?.posterImage} className="writerPrvateBlogsImage" />
            <div className="blogsContent">
              <div className="travelChip">
                <p>{item?.category}</p>
              </div>
              <div className="blogsHead">
                <p>{item?.title}</p>
              </div>
            
              <div className="trendingTime">
                <img src={calender} />
                <p>                       {moment(item?.createdAt).format("DD/MM/YYYY")}
</p>
                <img src={time} />
                <p>3 Min To Read</p>
              </div>
              <p className="trendingEnd">{item?.subTitle}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BlogCard;
