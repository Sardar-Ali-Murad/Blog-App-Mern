import React from "react";
import "./index.css";
import LightNavbar from "../componenets/CommonComponents/LightNavbar";
import Footer from "../componenets/CommonComponents/Footer";
import IntroLeft from "../componenets/SingleBlogComponents/BlogWriterLeftIntro";
import IntroRight from "../componenets/SingleBlogComponents/BlogWriterRightIntro";
import BlogContent from "../componenets/SingleBlogComponents/BlogContent";
import BlogChips from "../componenets/SingleBlogComponents/WriterBlogChips";
import BlogComments from "../componenets/SingleBlogComponents/BlogComments";
import RightComponent from "../componenets/CommonComponents/RightComponent";
import Image from "../assets/blogWriter.png";
import SingleWriter from "../componenets/CommonComponents/SingleWriter";
import { writers } from "./data";

const SingleBlog = () => {
  let arr = [
    "Productivity",
    "2022 In Review",
    "Artificial Intelligence",
    "Technology",
    "Machine Learning",
  ];
  return (
    <div>
      <LightNavbar signIn={true} getStarted={true} />
      <div className="singleBlogMain">
        {/*  */}
        <div className="singleBlogContent">
          <IntroLeft
            image={Image}
            name="Cassie Kozyrkov"
            date="02 december 2022"
            time="3 min. to read"
          />
          <BlogContent />
          <BlogChips chips={arr} />
          <SingleWriter writer={writers[0]} />
          <BlogComments />
        </div>
        {/*  */}
        <div className="singleBlogSideBar">
          <IntroRight />
          <RightComponent />
        </div>
        {/*  */}
      </div>
      <Footer />
    </div>
  );
};

export default SingleBlog;
