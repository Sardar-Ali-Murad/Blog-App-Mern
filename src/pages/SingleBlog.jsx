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
import SingleWriter from "../componenets/CommonComponents/SingleWriter";
import { writers } from "./data";
import { useSelector, useDispatch } from "react-redux";
import {
  getSingleBlog,
  withoutFiltersBlogs,
} from "./../features/blog/blogSlice";
import CircularProgress from "@mui/joy/CircularProgress";
import { useParams } from "react-router-dom";
import axios from "axios";
import { BACK_END_URL } from "../utils";
import WriterEnd from "../componenets/SingleBlogComponents/WriterEnd";

const SingleBlog = () => {
  let [loading, setLoading] = React.useState(true);
  let dispatch = useDispatch();
  let { blogId } = useParams();
  React.useEffect(() => {
    let start = async () => {
      setLoading(true);
      let { data } = await axios.get(
        `${BACK_END_URL}/blog/singleBlog/${blogId}`
      );
      dispatch(getSingleBlog(data.Blog));
      setLoading(false);
    };
    start();
  }, [blogId]);

  React.useEffect(() => {
    dispatch(withoutFiltersBlogs());
  }, []);

  if (loading) {
    return <CircularProgress size="lg" />;
  }

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
          <IntroLeft />
          <BlogContent />
          <BlogChips chips={arr} />
          <WriterEnd />
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
