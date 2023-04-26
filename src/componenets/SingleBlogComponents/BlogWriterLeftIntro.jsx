import React from "react";
import "./index.css";
import { SlCalender } from "react-icons/sl";
import { BiCircle } from "react-icons/bi";

import { CiTwitter } from "react-icons/ci";
import { CiFacebook } from "react-icons/ci";
import { AiOutlineLinkedin } from "react-icons/ai";
import { BiLinkAlt } from "react-icons/bi";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import moment from "moment";

const BlogWriterLeftIntro = () => {
  let { singleBlog } = useSelector((state) => state.blog);
  return (
    <div className="blogsWriterLeftIntroMain">
      {/*  */}
      <div>
        {/*  */}
        <div className="blogWriterLeftIntroFlex">
          <Link to={`/WriterPublicProfile/${singleBlog?.writer?._id}`}>
            <img
              src={singleBlog?.writer?.photo}
              style={{ height: "70px", width: "70px", borderRadius: "50%" }}
            />
          </Link>
          <div>
            <h1 className="writerName" style={{ color: "#FAF9F6" }}>
              {singleBlog?.writer?.name}
            </h1>
            <div className="singleBlogFlex">
              <SlCalender style={{ color: "#FAF9F6" }} />
              <p style={{ color: "#FAF9F6" }}>
                {" "}
                {moment(singleBlog?.createdAt).format("DD/MM/YYYY")}
              </p>
              <div className="blogLine"></div>
              <BiCircle style={{ color: "#FAF9F6" }} />
              <p style={{ color: "#FAF9F6" }}>3 Min To read</p>
            </div>
          </div>
        </div>
        {/*  */}
      </div>
      {/*  */}
      <div className="blogIconsMain">
        <CiTwitter className="blogIcons" style={{ color: "#FAF9F6" }} />
        <CiFacebook className="blogIcons" style={{ color: "#FAF9F6" }} />
        <AiOutlineLinkedin className="blogIcons" style={{ color: "#FAF9F6" }} />
        <BiLinkAlt className="blogIcons" style={{ color: "#FAF9F6" }} />
      </div>
    </div>
  );
};

export default BlogWriterLeftIntro;
