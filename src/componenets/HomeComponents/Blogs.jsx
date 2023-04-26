import React from "react";
import "./Blogs.css";
import RightComponent from "../CommonComponents/RightComponent";
import Add from "../CommonComponents/Add";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import moment from "moment";
import { SlCalender } from "react-icons/sl";
import { BiCircle } from "react-icons/bi";

import { Box, Pagination } from "@mui/material";

const Blogs = () => {
  let { withFilterBlogs } = useSelector((state) => state.blog);
  let totalPages = 7;
  let count = Math.ceil(withFilterBlogs.length / totalPages);

  let [currentPage, setCurrentPage] = React.useState(1);

  function handlePagination(e, page) {
    setCurrentPage(page);
  }

  return (
    <div className="blogsMain">
      {/*  */}
      <div>
        <div className="blogsPart1">
          {withFilterBlogs.slice(0, 1).map((item, i) => {
            return (
              <Link to={`/blog/${item?._id}`} key={i}>
                <div className="singleBlog">
                  <div className="singeBlogImages">
                    <img
                      src={item?.posterImage}
                      className="HomeBlogsMainImage"
                    />
                  </div>
                  <div className="blogsContent">
                    <div className="Chips">
                      <p style={{ color: "black" }}>{item?.category}</p>
                    </div>
                    <div className="blogsHead">
                      <p>{item?.title}</p>
                    </div>
                    <div className="trendingFlex">
                      <Link to={`/WriterPublicProfile/${item?.writer?._id}`}>
                        <img
                          src={item?.writer?.photo}
                          style={{
                            height: "30px",
                            width: "30px",
                            borderRadius: "50%",
                          }}
                        />
                      </Link>
                      <p className="paraColor" style={{ color: "#FAF9F6" }}>
                        {item?.writer?.name}
                      </p>
                    </div>
                    <div className="trendingTime">
                      <SlCalender style={{ color: "#FAF9F6" }} />
                      <p className="paraColor" style={{ color: "#FAF9F6" }}>
                        {" "}
                        {moment(item?.createdAt).format("DD/MM/YYYY")}
                      </p>
                      <BiCircle style={{ color: "#FAF9F6" }} />
                      <p className="paraColor" style={{ color: "#FAF9F6" }}>
                        3 min to Read
                      </p>
                    </div>
                    <p className="trendingEnd paraColor">{item?.subTitle}</p>
                  </div>
                </div>
              </Link>
            );
          })}
        </div>
        <div>
          <Add />
          {withFilterBlogs
            .slice(
              currentPage * totalPages - totalPages + 1,
              currentPage * totalPages
            )
            .map((item, i) => {
              return (
                <Link to={`/blog/${item?._id}`} key={i}>
                  <div className="singleBlog">
                    <div className="singeBlogImages">
                      <img
                        src={item?.posterImage}
                        className="HomeBlogsMainImage"
                      />
                    </div>
                    <div className="blogsContent">
                      <div className="Chips">
                        <p style={{ color: "black" }}>{item?.category}</p>
                      </div>
                      <div className="blogsHead">
                        <p>{item?.title}</p>
                      </div>
                      <div className="trendingFlex">
                        <Link to={`/WriterPublicProfile/${item?.writer?._id}`}>
                          <img
                            src={item?.writer?.photo}
                            style={{
                              height: "30px",
                              width: "30px",
                              borderRadius: "50%",
                            }}
                          />
                        </Link>
                        <p className="paraColor" style={{ color: "#FAF9F6" }}>
                          {item?.writer?.name}
                        </p>
                      </div>
                      <div className="trendingTime">
                        <SlCalender style={{ color: "#FAF9F6" }} />
                        <p style={{ color: "#FAF9F6" }}>
                          {" "}
                          {moment(item?.createdAt).format("DD/MM/YYYY")}
                        </p>
                        <BiCircle style={{ color: "#FAF9F6" }} />
                        <p style={{ color: "#FAF9F6" }}>3 min to Read</p>
                      </div>
                      <p className="trendingEnd" style={{ color: "#FAF9F6" }}>
                        {item?.subTitle}
                      </p>
                    </div>
                  </div>
                </Link>
              );
            })}
        </div>
        <Box className="paginationBox">
          <Pagination
            count={count}
            color="secondary"
            value={currentPage}
            onChange={handlePagination}
          />
        </Box>
      </div>
      {/*  */}

      <div className="blogsPart2">
        <RightComponent />
      </div>
    </div>
  );
};

export default Blogs;
