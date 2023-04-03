import React from "react";
import "./index.css";
import Editor from "./Editor";

const WriteBody = () => {
  return (
    <div className="writeMain">
      {/*  */}
      <div className="registerTextFieldsPart1">
        <div className="TextFields">
          <p>Title</p>
          <input className="textarea" name="firstName" />
        </div>
        <div className="TextFields">
          <p>Subtitle</p>
          <input className="textarea" name="firstName" />
        </div>
      </div>

      {/*  */}
      <div style={{ marginTop: "40px" }}>
        <div className="TextFields">
          <p>Description</p>
          <Editor />
        </div>
      </div>

      <div className="registerTextFieldsPart1" style={{ marginTop: "40px" }}>
        <div className="TextFields">
          <p>Choose Category</p>
          <select className="textarea categoryField" name="categories">
            <option value=""></option>
            <option value="SelfImprovement">Self Improvement</option>
            <option value="Technology">Technology</option>
          </select>
        </div>

        <div className="upload TextFields">
          <p>Upload Media</p>
          <div className="uploadTextArea"></div>
          <button className="uploadBtn">Upload</button>
        </div>
      </div>
      <div className="publishBtnWrapper">
        <button className="authBlueBtn PublishBtn">Publish</button>
      </div>
      {/*  */}
    </div>
  );
};

export default WriteBody;
