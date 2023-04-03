import React from "react";
import "./index.css";
import calender from "../../assets/calender.png";
import time from "../../assets/time.png";

import { CiTwitter } from "react-icons/ci";
import { CiFacebook } from "react-icons/ci";
import { AiOutlineLinkedin } from "react-icons/ai";
import { BiLinkAlt } from "react-icons/bi";

const BlogWriterLeftIntro = ({ name, image, date, time: timeData }) => {
  return (
    <div className="blogsWriterLeftIntroMain">
      {/*  */}
      <div>
        {/*  */}
        <div className="blogWriterLeftIntroFlex">
          <img src={image} style={{ height: "40px", width: "40px" }} />
          <div>
            <h1 className="writerName">{name}</h1>
            <div className="singleBlogFlex">
              <img src={calender} />
              <p>{date}</p>
              <div className="blogLine"></div>
              <img src={time} />
              <p>{timeData}</p>
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
