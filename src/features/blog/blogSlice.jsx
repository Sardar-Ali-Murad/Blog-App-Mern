import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

let initialState = {
  isLoading: false,
  showAlert: false,
  alertType: "",
  alertText: "",
};
import { createBlog } from "./blogThunk";

export const setupCreateBlog = createAsyncThunk(
  "blog/setupCreateBlog",
  async (data, thunkAPI) => {
    return createBlog(data, thunkAPI);
  }
);

const blogSlice = createSlice({
  name: "blog",
  initialState,
  reducers: {
    removeAlert: (state) => {
      state.isLoading = false;
      (state.alertText = ""), (state.alertType = ""), (state.showAlert = false);
    },
  },
  extraReducers: {
    [setupCreateBlog.fulfilled]: (state, { payload }) => {
      state.isLoading = true;
      state.showAlert = true;
      state.alertText = "Your Blog is Added Successfully";
      state.alertType = "success";
    },
    [setupCreateBlog.rejected]: (state, { payload }) => {
      state.isLoading = true;
      state.showAlert = true;
      state.alertText = payload;
      state.alertType = "danger";
    },
  },
});

export const { removeAlert } = blogSlice.actions;

export default blogSlice.reducer;
