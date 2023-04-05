import axios from "axios";
import { BACK_END_URL } from "../../utils";
import { setupGetCurrentWriter } from "./writerRequestSlice";

export const getCurrentWriter = async (_, thunkAPI) => {
  let token = JSON.parse(localStorage.getItem("token"));
  try {
    let props = await axios.get(`${BACK_END_URL}/writer/currentWritter`, {
      headers: {
        authorization: `Bearer ${token}`,
      },
    });
    return props.data;
  } catch (error) {
    return thunkAPI.rejectWithValue(error.response.data.msg);
  }
};

export const updateCurrentWriter = async (data, thunkAPI) => {
  console.log(data);
  let token = JSON.parse(localStorage.getItem("token"));
  let writerId = thunkAPI.getState().writerRequest.currentWriterInfo._id;
  try {
    let props = await axios.post(
      `${BACK_END_URL}/writer/updateWriter/${writerId}`,
      data,
      {
        headers: {
          authorization: `Bearer ${token}`,
        },
      }
    );
    thunkAPI.dispatch(setupGetCurrentWriter());
    return props.data;
  } catch (error) {
    return thunkAPI.rejectWithValue(error.response.data.msg);
  }
};

export const writerImage = async (event, thunkAPI) => {
  try {
    const imageFile = event.target.files[0];
    const formData = new FormData();
    formData.append("file", imageFile);
    formData.append("upload_preset", "zkkzikta");
    let data = await axios.post(
      "https://api.cloudinary.com/v1_1/dvaodl5k8/image/upload",
      formData
    );
    console.log(data);
    return data;
  } catch (error) {
    thunkAPI.rejectWithValue(error);
  }
};
