import React from "react";
import "./index.css";
import Add from "../CommonComponents/Add";
import { useSelector } from "react-redux";

const BlogContent = () => {
  let { singleBlog } = useSelector((state) => state.blog);
  function htmlDecode(content) {
    let e = document.createElement("div");
    e.innerHTML = content;
    return e.childNodes.length === 0 ? "" : e.childNodes[0].nodeValue;
  }

  return (
    <div className="blogContentMain">
      <h1 className="blogContentHeading" style={{ color: "#FAF9F6" }}>{singleBlog?.title}</h1>
      <section
        dangerouslySetInnerHTML={{
          __html: htmlDecode(singleBlog?.description),
        }}
        className="SearchResult-body BlogContentMain BlogContentMainDangerousHTML"
      />

      <div className="blogAdd">
        <Add />
      </div>
    </div>
  );
};

export default BlogContent;
