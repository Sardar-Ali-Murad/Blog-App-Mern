import React from "react";
import "./index.css";
import Editor from "./Editor";
import {
  setupCreateBlog,
  removeAlert,
  handleEvents,
} from "../../features/blog/blogSlice";
import { useDispatch, useSelector } from "react-redux";
import Alert from "../Alert/blogAlert";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";
import BlogImage from "./BlogMainImage";

const WriteBody = () => {
  let { showAlert, title, subTitle, category, contentBlog } = useSelector(
    (state) => state.blog
  );
  let dispatch = useDispatch();
  let alert = React.useRef(null);
  let [content, setContent] = React.useState(contentBlog);

  React.useEffect(() => {
    setContent(contentBlog);
  }, [contentBlog]);

  function handleChange(e) {
    dispatch(handleEvents({ name: e.target.name, value: e.target.value }));
  }

  let { image } = useSelector((state) => state.blog);

  const publish = async () => {
    let info = { title, subTitle, category, content, posterImage: image };
    dispatch(setupCreateBlog(info));
    alert.current.scrollIntoView({ behavior: "smooth" });
    setTimeout(() => {
      dispatch(removeAlert());
    }, 3000);
  };

  return (
    <div className="writeMain" ref={alert}>
      {showAlert && <Alert />}
      {/*  */}
      <div style={{ width: "100%", marginBottom: "30px" }}>
        <BlogImage />
      </div>
      <div className="registerTextFieldsPart1">
        <div className="TextFields">
          <p>Title</p>
          <input
            className="textarea"
            name="title"
            value={title}
            onChange={handleChange}
          />
        </div>
        <div className="TextFields">
          <p>Subtitle</p>
          <input
            className="textarea"
            name="subTitle"
            value={subTitle}
            onChange={handleChange}
          />
        </div>
      </div>

      {/*  */}
      <div style={{ marginTop: "40px" }}>
        <div className="TextFields">
          <p>Description</p>
          <Editor value={content} onChange={setContent} />
        </div>
      </div>

      <div
        className="registerTextFieldsPart1"
        style={{ marginTop: "40px", width: "100%" }}
      >
        <div className="TextFields">
          <p>Choose Category</p>
          <select
            className="textarea categoryField"
            name="category"
            value={category}
            onChange={handleChange}
            style={{ width: "100%" }}
          >
            <option value=""></option>
            <option value="Travel">Travel</option>
            <option value="lifestyle">lifestyle</option>
            <option value="fashion">fashion</option>
            <option value="dataScience">dataScience</option>
            <option value="business">business</option>
            <option value="design">design</option>
            <option value="health">health</option>
            <option value="food">food</option>
            <option value="art">art</option>
          </select>
        </div>

        {/* <div className="upload TextFields">
          <p>Upload Media</p>
          <div className="uploadTextArea"></div>
          <button className="uploadBtn">Upload</button>
        </div> */}
      </div>
      <div className="publishBtnWrapper">
        <button className="authBlueBtn PublishBtn" onClick={publish}>
          Publish
        </button>
      </div>
      {/*  */}
    </div>
  );
};

export default WriteBody;
