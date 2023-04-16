import React from "react";
import "./Blogs.css";
import { blogsData } from "../data";
import img from "../../assets/trending.png";
import calender from "../../assets/calender.png";
import time from "../../assets/time.png";
import RightComponent from "../CommonComponents/RightComponent";
import Add from "../CommonComponents/Add";
import {changeCategory,withFiltersBlogs}  from "../../features/blog/blogSlice"
import { useDispatch,useSelector } from "react-redux";
import CircularProgress from '@mui/joy/CircularProgress';
import { Link } from "react-router-dom";


const Blogs = () => {
  let dispatch=useDispatch()
  let {withFilterBlogs,filterLoading}=useSelector((state)=>state.blog)

  // if(filterLoading){
  //   return "Loading..."
  // }

  // console.log(withFilterBlogs)

  return (
    <div className="blogsMain">
      {/*  */}
      <div className="blogsPart1">
        <div>
          {withFilterBlogs.slice(0,3).map((item) => {
            return (
              <Link to={`/blog/${item?._id}`}>
              <div className="singleBlog">
                <img src={item?.posterImage}  className="HomeBlogsMainImage"/>
                <div className="blogsContent">
                  <div className="travelChip">
                    <p>{item?.category}</p>
                  </div>
                  <div className="blogsHead">
                    <p>{item?.title}</p>
                  </div>
                  <div className="trendingFlex">
                  <Link to={`/WriterPublicProfile/${item?.writer?._id}`}>
                    <img src={item?.writer?.photo} style={{height:"30px",width:"30px",borderRadius:'50%'}} />
                    <p>{item?.writer?.name}</p>
                    </Link>
                  </div>
                  <div className="trendingTime">
                    <img src={calender} />
                    <p>{item?.createdAt}</p>
                    <img src={time} />
                    <p>3 min to Read</p>
                  </div>
                  <p className="trendingEnd">{item?.subTitle}</p>
                </div>
              </div>
          </Link>
            );
          })}
        </div>
        <Add />
        <div>
          {withFilterBlogs.slice(3, -1).map((item) => {
            return (
              <Link to={`/blog/${item?._id}`}>
              <div className="singleBlog">
                <img src={item?.posterImage}  className="HomeBlogsMainImage"/>
                <div className="blogsContent">
                  <div className="travelChip">
                    <p>{item?.category}</p>
                  </div>
                  <div className="blogsHead">
                    <p>{item?.title}</p>
                  </div>
                  <div className="trendingFlex">
                  <Link to={`/WriterPublicProfile/${item?.writer?._id}`}>
                    <img src={item?.writer?.photo} style={{height:"30px",width:"30px",borderRadius:'50%'}} />
                    </Link>
                    <p>{item?.writer?.name}</p>
                  </div>
                  <div className="trendingTime">
                    <img src={calender} />
                    <p>{item?.createdAt}</p>
                    <img src={time} />
                    <p>3 min to Read</p>
                  </div>
                  <p className="trendingEnd">{item?.subTitle}</p>
                </div>
              </div>
              </Link>
            );
          })}
        </div>
    
      </div>
      {/*  */}

      <div className="blogsPart2">
        <RightComponent />
      </div>
    </div>
  );
};

export default Blogs;
