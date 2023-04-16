

import React from "react";
import img from "../../assets/trending.png";
import calender from "../../assets/calender.png";
import time from "../../assets/time.png";
import { useSelector } from "react-redux";

const WriterBlogs = () => {
    let {  
        currentWritterBlogs}=useSelector((state)=>state.blog)
  return (
    <div>
        {
        currentWritterBlogs.map((item)=>{
            return(
                <div className="blogsPart1">
        <div>
          <div className="singleBlog">
            <img src={item?.posterImage} className="writerBlogsMainImage"/>
            <div className="blogsContent">
              <div className="travelChip">
                <p>{item?.category}</p>
              </div>
              <div className="blogsHead">
                <p>{item?.title}</p>
              </div>
              {/* <div className="trendingFlex">
                <img src={} />
                <p>{item?.name}</p>
              </div> */}
              <div className="trendingTime">
                <img src={calender} />
                <p>{item?.createdAt}</p>
                <img src={time} />
                <p>3 min</p>
              </div>
              <p className="trendingEnd">{item?.subTitle}</p>
            </div>
          </div>
        </div>
      </div>
    )
    })        
}
</div>
);
};

export default WriterBlogs;
