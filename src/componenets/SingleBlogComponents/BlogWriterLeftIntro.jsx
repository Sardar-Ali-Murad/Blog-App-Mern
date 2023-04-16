import React from "react";
import "./index.css";
import calender from "../../assets/calender.png";
import time from "../../assets/time.png";

import { CiTwitter } from "react-icons/ci";
import { CiFacebook } from "react-icons/ci";
import { AiOutlineLinkedin } from "react-icons/ai";
import { BiLinkAlt } from "react-icons/bi";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

const BlogWriterLeftIntro = () => {
  let {singleBlog}=useSelector((state)=>state.blog)
  return (
    <div className="blogsWriterLeftIntroMain">
      {/*  */}
      <div>
        {/*  */}
        <div className="blogWriterLeftIntroFlex">
        <Link to={`/WriterPublicProfile/${singleBlog?.writer?._id}`}>
          <img src={singleBlog?.writer?.photo} style={{ height: "70px", width: "70px",borderRadius:'50%' }} />
        </Link>
          <div>
            <h1 className="writerName">{singleBlog?.writer?.name}</h1>
            <div className="singleBlogFlex">
              <img src={calender} />
              <p>{singleBlog?.createdAt}</p>
              <div className="blogLine"></div>
              <img src={time} />
              <p>3 Min To read</p>
            </div>
          </div>
        </div>
        {/*  */}
      </div>
      {/*  */}
      <div className="blogIconsMain">
        <CiTwitter className="blogIcons" />
        <CiFacebook className="blogIcons" />
        <AiOutlineLinkedin className="blogIcons" />
        <BiLinkAlt className="blogIcons" />
      </div>
    </div>
  );
};

export default BlogWriterLeftIntro;
