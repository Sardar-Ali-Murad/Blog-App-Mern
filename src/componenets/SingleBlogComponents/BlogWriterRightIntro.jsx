import React from "react";
import "./index.css";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

const BlogWriterRightIntro = () => {
  let {singleBlog}=useSelector((state)=>state.blog)

  return (
    <div className="singleBlogWriterInfoRight">
       <Link to={`/WriterPublicProfile/${singleBlog?.writer?._id}`}>
      <img src={singleBlog?.writer.photo} style={{ height: "70px", width: "70px",borderRadius:"50%" }} />
        </Link>
      <h1>{singleBlog?.writer?.name}</h1>
      <p>
        {/* Chief Decision Scientist, Google. ❤️ Stats, ML/AI, data, puns, art,
        theatre, decision science. All views are my own. */}
        {singleBlog?.writer?.purpose}
      </p>
    </div>
  );
};

export default BlogWriterRightIntro;
