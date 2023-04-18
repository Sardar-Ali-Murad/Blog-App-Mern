import React from "react";
import moment from "moment";
import { SlCalender } from "react-icons/sl";
import { Link } from "react-router-dom";
import { BiCircle } from "react-icons/bi";
import axios from "axios";
import { BACK_END_URL } from "../../utils";

const BlogCard = ({ item,getAllSavedBlogs }) => {
  let token = JSON.parse(localStorage.getItem("token"));
  const remove = async () => {
    try {
      await axios.delete(`${BACK_END_URL}/saveBlog/deleteSavedBlog/${item?._id}`, {
        headers: {
          authorization: `Bearer ${token}`,
        },
      });
      getAllSavedBlogs()
    } catch (error) {
      console.log(error?.response?.data?.msg);
    }
  };
  return (
    <div>
      <div className="singleBlogUser">
        <div className="">
          <Link to={`/blog/${item?.blog?._id}`}>
            <img src={item?.blog?.posterImage} className="HomeBlogsMainImage" />
          </Link>
        </div>

        <div className="blogsContent">
          <div style={{ display: "flex", gap: "10px", alignItems: "center" }}>
            <div className="Chips">
              <p>{item?.blog?.category}</p>
            </div>
            <div
              className="Chips"
              style={{ background: "rgb(214, 91, 91)", color: "white",cursor:"pointer" }}
              onClick={remove}

            >
              <p>remove</p>
            </div>
          </div>
          <div className="blogsHead">
            <p>{item?.blog?.title}</p>
          </div>
          <div className="trendingFlex">
            <Link to={`/WriterPublicProfile/${item?.blog?.writer?._id}`}>
              <img
                src={item?.blog?.writer?.photo}
                style={{
                  height: "30px",
                  width: "30px",
                  borderRadius: "50%",
                }}
              />
            </Link>
            <p className="paraColor" style={{ color: "#FAF9F6" }}>
              {item?.blog?.writer?.name}
            </p>
          </div>
          <div className="trendingTime">
            <SlCalender style={{ color: "#FAF9F6" }} />
            <p className="paraColor" style={{ color: "#FAF9F6" }}>
              {" "}
              {moment(item?.blog?.createdAt).format("DD/MM/YYYY")}
            </p>
            <BiCircle style={{ color: "#FAF9F6" }} />
            <p className="paraColor" style={{ color: "#FAF9F6" }}>
              3 min to Read
            </p>
          </div>
          <p className="trendingEnd paraColor">{item?.blog?.subTitle}</p>
        </div>
      </div>
    </div>
  );
};

export default BlogCard;
