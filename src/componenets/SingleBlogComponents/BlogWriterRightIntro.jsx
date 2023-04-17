import React from "react";
import "./index.css";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

const BlogWriterRightIntro = () => {
  let { singleBlog } = useSelector((state) => state.blog);

  return (
    <div className="singleBlogWriterInfoRight">
      <Link to={`/WriterPublicProfile/${singleBlog?.writer?._id}`}>
        <img
          src={singleBlog?.writer.photo}
          style={{ height: "70px", width: "70px", borderRadius: "50%" }}
        />
      </Link>
      <h1 style={{ color: "#FAF9F6" }}>{singleBlog?.writer?.name}</h1>
      <p style={{ color: "#FAF9F6" }}>{singleBlog?.writer?.purpose}</p>
    </div>
  );
};

export default BlogWriterRightIntro;
