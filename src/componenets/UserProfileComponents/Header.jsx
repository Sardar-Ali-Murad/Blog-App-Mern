import React from "react";
import "./index.css";
import { useDispatch, useSelector } from "react-redux";
import axios from "axios";

import { Box, Avatar, IconButton } from "@mui/material";
import { changeUserImage } from "../../features/user/userSlice";
import { BACK_END_URL } from "../../utils";

import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const WritterDetailsHeader = () => {
  let dispatch = useDispatch();
  let token = JSON.parse(localStorage.getItem("token"));
  let { user } = useSelector((state) => state.store);
  let [image, setImage] = React.useState(user?.image);

  const handleImage = async (event) => {
    const imageFile = event.target.files[0];
    const formData = new FormData();
    formData.append("file", imageFile);
    formData.append("upload_preset", "zkkzikta");
    let data = await axios.post(
      "https://api.cloudinary.com/v1_1/dvaodl5k8/image/upload",
      formData
    );
    setImage(data.data.secure_url);
    dispatch(changeUserImage(data.data.secure_url));
  };

  const saveImage = async () => {
    try {
      await axios.post(
        `${BACK_END_URL}/auth/changeUserImage`,
        { image },
        {
          headers: {
            authorization: `Bearer ${token}`,
          },
        }
      );
      toast("Image is Saved Successfully");
    } catch (error) {
      console.log(error.response.data.msg);
    }
  };

  return (
    <div className="uploadBigMain">
      <ToastContainer />
      <div className="uploadMain">
        <div className="uploadWriterImageMain">
          <Box className="profileHead">
            <label htmlFor="photo-upload">
              <input
                id="photo-upload"
                className="photo-upload"
                type="file"
                accept="image/*"
                style={{ display: "none" }}
                onChange={handleImage}
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
            <h1 style={{ color: "#f1f1f1" }}>Profile Photo</h1>
            <p style={{ color: "#f1f1f1" }}>
              Recommended: Square JPG, PNG, or GIF, at least 1,000 pixels per
              side.
            </p>
            <div className="uploadBtns">
              <button className="red" onClick={() => setImage("")}>
                Remove
              </button>
              <button className="blue" onClick={() => saveImage("")}>
                Save
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WritterDetailsHeader;
