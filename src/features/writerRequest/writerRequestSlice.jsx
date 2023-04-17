import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

let initialState = {
  isLoading: false,
  alertText: "",
  alertType: "",
  showAlert: false,
  currentWriterInfo: [],
  image: "",
  ApprovedWritters:[]
};

import {
  getCurrentWriter,
  // writerImage,
  updateCurrentWriter,
  getAllApprovedWriters
} from "./writerRequestThunk";

export const setupUpdateWriter = createAsyncThunk(
  "writer/setupUpdateWriter",
  async (data, thunkAPI) => {
    return updateCurrentWriter(data, thunkAPI);
  }
);

// export const getWriterImage = createAsyncThunk(
//   "writer/getWriterImage",
//   async (event, thunkAPI) => {
//     return writerImage(event, thunkAPI);
//   }
// );

export const setupGetCurrentWriter = createAsyncThunk(
  "writer/setupGetCurrentWriter",
  getCurrentWriter
);

export const setupGetApprovedWriters = createAsyncThunk("writer/setupGetApprovedWriters",getAllApprovedWriters);

const writerRequestSlice = createSlice({
  name: "writerRequest",
  initialState,
  reducers: {
    removeAlert: (state) => {
      state.isLoading = false;
      (state.alertText = ""), (state.alertType = ""), (state.showAlert = false);
    },
    dispalyAlert: (state, action) => {
      (state.isLoading = true),
        (state.alertText = action.payload.alertText),
        (state.alertType = action.payload.alertType),
        (state.showAlert = true);
    },
    setWriterImage:(state,action)=>{
      state.image=action.payload
    }
    // removeWriterImage: (state) => {
    //   state.image = "";
    // },
  },
  extraReducers: {
    [setupGetCurrentWriter.pending]: (state) => {
      state.isLoading = true;
    },
    [setupGetCurrentWriter.fulfilled]: (state, { payload }) => {
      state.currentWriterInfo = payload.currentWriter;
      state.image = payload.currentWriter.photo;
      state.isLoading = false;
    },
    [setupGetCurrentWriter.rejected]: (state, payload) => {
      state.isLoading = false;
    },
    // [getWriterImage.pending]:(state)=>{
    //   state.isLoading=true
    // },
    // [getWriterImage.fulfilled]: (state, { payload }) => {
    //   state.isLoading=false
    //   state.image = payload.data.secure_url;
    // },
    // [getWriterImage.rejected]: (state, payload) => {
    //   state.isLoading=false
    // },
    [setupUpdateWriter.fulfilled]: (state, { payload }) => {
      state.showAlert = true;
      state.alertType = "success";
      state.alertText = "Writer Updated Successfully";
    },
    [setupUpdateWriter.rejected]: (state, { payload }) => {
      (state.showAlert = true),
        (state.alertType = "danger"),
        (state.alertText = payload);
    },


    // The Arroved Writers
    [setupGetApprovedWriters.pending]:(state)=>{
      state.isLoading=true
    },
    [setupGetApprovedWriters.fulfilled]:(state,{payload})=>{
      state.isLoading=false
      state.ApprovedWritters=payload.ApprovedWritters
    },
    [setupGetApprovedWriters.rejected]:(state,payload)=>{
       state.isLoading=false  
       console.log(payload)
    }
  },
});

export const { removeAlert, dispalyAlert,
  //  removeWriterImage,
  setWriterImage
   } =
  writerRequestSlice.actions;

export default writerRequestSlice.reducer;
