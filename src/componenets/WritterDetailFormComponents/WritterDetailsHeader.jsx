import React from "react";
import "./index.css";
import Img from "../../assets/upload.png";

const WritterDetailsHeader = () => {
  return (
    <div className="uploadBigMain">
      <div className="uploadMain">
        <div className="uploadWriterImageMain">
          <div className="uploadBox">
            <img src={Img} />
          </div>
          <div className="uploadWriterImageContent">
            <h1>Profile Photo</h1>
            <p>
              Recommended: Square JPG, PNG, or GIF, at least 1,000 pixels per
              side.
            </p>
            <div className="uploadBtns">
              <button className="blue">Update</button>
              <button className="red">Remove</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WritterDetailsHeader;
