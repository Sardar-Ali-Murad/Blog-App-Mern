import React from "react";
import "./index.css";
import Img from "../../assets/upload.png";
import {
  getWriterImage,
  removeWriterImage,
} from "../../features/writerRequest/writerRequestSlice";
import { useDispatch, useSelector } from "react-redux";

const WritterDetailsHeader = () => {
  let { image } = useSelector((state) => state.writerRequest);
  let dispatch = useDispatch();

  function handleImage(event) {
    dispatch(getWriterImage(event));
  }

  console.log(image);

  return (
    <div className="uploadBigMain">
      <div className="uploadMain">
        <div className="uploadWriterImageMain">
          {/*  */}
          <div>
            <div className="uploadBox">
              {image && <img src={image} className="writerImge" />}
              <input
                type="file"
                accept="image/*"
                name="file"
                style={{ position: "absolute", opacity: "0" }}
                onChange={handleImage}
              />
              <img src={Img} />
            </div>
          </div>
          {/*  */}
          <div className="uploadWriterImageContent">
            <h1>Profile Photo</h1>
            <p>
              Recommended: Square JPG, PNG, or GIF, at least 1,000 pixels per
              side.
            </p>
            <div className="uploadBtns">
              {/* <button className="blue" style={{position:"relative"}}>
              <input  type="file"  accept="image/*" name="file" style={{position:"absolute",left:"2px",opacity:"0"}}  onChange={handleImage}/>
                Update
                </button> */}
              <button className="red" onClick={dispatch(removeWriterImage())}>
                Remove
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WritterDetailsHeader;
