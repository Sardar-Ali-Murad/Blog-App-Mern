import React from "react";
import { useSelector } from "react-redux";
import { SlCalender } from "react-icons/sl";
import { BiCircle } from "react-icons/bi";
import moment from "moment";
import { Link } from "react-router-dom";
import { Box, Pagination } from "@mui/material";

const WriterBlogs = () => {
  let { currentWritterBlogs } = useSelector((state) => state.blog);
  let totalPages = 4;
  let count = Math.ceil(currentWritterBlogs.length / totalPages);

  let [currentPage, setCurrentPage] = React.useState(1);

  function handlePagination(e, page) {
    setCurrentPage(page);
  }
  return (
    <div>
      {currentWritterBlogs.slice(currentPage*totalPages-totalPages,currentPage*totalPages).map((item) => {
        return (
          <Link to={`/blog/${item?._id}`}>
            <div className="blogsPart1">
              <div>
                <div className="singleBlog">
                  <img
                    src={item?.posterImage}
                    className="writerBlogsMainImage"
                  />
                  <div className="blogsContent">
                    <div className="Chips">
                      <p>{item?.category}</p>
                    </div>
                    <div className="blogsHead">
                      <p>{item?.title}</p>
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
              </div>
            </div>
          </Link>
        );
      })}
      <Box className="paginationBox">
        <Pagination
          count={count}
          color="secondary"
          value={currentPage}
          onChange={handlePagination}
        />
      </Box>
    </div>
  );
};

export default WriterBlogs;
