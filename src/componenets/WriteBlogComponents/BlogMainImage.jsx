import React from "react";
import "./index.css";
import {
  // getWriterImage,
  // removeWriterImage,
  setBlogImage
} from "../../features/blog/blogSlice";
import { useDispatch, useSelector } from "react-redux";
import axios from "axios";

import { Box, Avatar, IconButton } from "@mui/material";

const WritterDetailsHeader = () => {
  let { image:storeImage } = useSelector((state) => state.blog);

  React.useEffect(()=>{
   setImage(storeImage)
  },[storeImage])

  let [image, setImage] = React.useState(storeImage);

  let dispatch = useDispatch();
  const handleImage = async (event) => {
    // dispatch(getWriterImage(event));
    const imageFile = event.target.files[0];
    const formData = new FormData();
    formData.append("file", imageFile);
    formData.append("upload_preset", "zkkzikta");
    let data = await axios.post(
      "https://api.cloudinary.com/v1_1/dvaodl5k8/image/upload",
      formData
    );
    setImage(data.data.secure_url);
    dispatch(setBlogImage(data.data.secure_url))
  };

  return (
    <div  style={{display:"flex",justifyContent:"flex-start",position:"relative",left:"-26%",width:"100%"}}>
      <div className="uploadMain" style={{display:"flex",width:"100%"}}>
        <div  style={{display:"flex"}} className="uploadImageFlex">
          {/*  */}
          {/* <div>
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
              </div> */}
          <Box className="profileHead">
            <label htmlFor="photo-upload">
              <input
                id="photo-upload"
                className="photo-upload"
                type="file"
                accept="image/*"
                style={{ display: "none" }}
                onChange={handleImage}
                // onChange={handlePhotoUpload}
              />
              <IconButton
                sx={{ width: 80, height: 80 }}
                component="span"
                color="primary"
                className="profile"
              >
                <Avatar
                  sx={{ width: 80, height: 80 }}
                  alt="Customer photo"
                  src={image}
                  className="profileAvatar"
                />
              </IconButton>
            </label>
          </Box>
          {/*  */}
          <div className="uploadWriterImageContent">
            <h1>Poster Image</h1>
            <p>
              Recommended: Square JPG, PNG, or GIF, at least 1,000 pixels per
              side.
            </p>
            <div className="uploadBtns">
              {/* <button className="red" onClick={dispatch(removeWriterImage())}> */}
              <button className="red" onClick={()=>setImage("")}>
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
