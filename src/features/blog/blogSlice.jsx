import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

let initialState = {
  isLoading: false,
  showAlert: false,
  alertType: "",
  alertText: "",
  title: "",
  subTitle: "",
  category: "",
  image: "",
  contentBlog: "",
  category: "All",
  filterLoading: false,
  withOutFilterBlogs: [],
  withFilterBlogs: [],
  singleBlog: {},

  currentWriterInfo: {},
  currentWritterBlogs: [],
};
import {
  createBlog,
  getAllBlogsWithOutFilters,
  getAllBlogsWithFilters,
} from "./blogThunk";

export const setupCreateBlog = createAsyncThunk(
  "blog/setupCreateBlog",
  async (data, thunkAPI) => {
    return createBlog(data, thunkAPI);
  }
);

export const withoutFiltersBlogs = createAsyncThunk(
  "blog/withoutFiltersBlogs",
  getAllBlogsWithOutFilters
);
export const withFiltersBlogs = createAsyncThunk(
  "blog/withFiltersBlogs",
  getAllBlogsWithFilters
);

const blogSlice = createSlice({
  name: "blog",
  initialState,
  reducers: {
    removeAlert: (state) => {
      state.isLoading = false;
      (state.alertText = ""), (state.alertType = ""), (state.showAlert = false);
    },
    handleEvents: (state, action) => {
      state[action.payload.name] = action.payload.value;
    },
    setBlogImage: (state, action) => {
      state.image = action.payload;
    },
    changeCategory: (state, action) => {
      state.category = action.payload;
    },
    getSingleBlog: (state, action) => {
      state.singleBlog = action.payload;
    },
    getCurrentWriterInfo: (state, action) => {
      state.currentWriterInfo = action.payload;
    },
    getCurrentWriterBlogs: (state, action) => {
      state.currentWritterBlogs = action.payload;
    },
  },
  extraReducers: {
    [setupCreateBlog.fulfilled]: (state, { payload }) => {
      state.isLoading = true;
      state.showAlert = true;
      state.alertText = "Your Blog is Added Successfully";
      state.alertType = "success";
      state.title = "";
      state.subTitle = "";
      state.category = "";
      state.image = "";
      state.contentBlog = "";
    },
    [setupCreateBlog.rejected]: (state, { payload }) => {
      state.isLoading = true;
      state.showAlert = true;
      state.alertText = payload;
      state.alertType = "danger";
    },

    // WithOut Filter Blogs
    [withoutFiltersBlogs.pending]: (state) => {
      state.isLoading = true;
    },
    [withoutFiltersBlogs.fulfilled]: (state, { payload }) => {
      state.isLoading = false;
      state.withOutFilterBlogs = payload.Blogs;
    },
    [withoutFiltersBlogs.rejected]: (state, { payload }) => {
      state.isLoading = false;
      state.showAlert = true;
      state.alertText = payload;
      state.alertType = "danger";
    },

    // With Filter Blogs
    [withFiltersBlogs.pending]: (state) => {
      state.filterLoading = true;
    },
    [withFiltersBlogs.fulfilled]: (state, { payload }) => {
      state.withFilterBlogs = payload.Blogs;
      state.filterLoading = false;
    },
    [withFiltersBlogs.rejected]: (state, { payload }) => {
      state.filterLoading = false;
      state.showAlert = true;
      state.alertText = payload;
      state.alertType = "danger";
    },
  },
});

export const {
  removeAlert,
  handleEvents,
  setBlogImage,
  changeCategory,
  getSingleBlog,
  getCurrentWriterInfo,
  getCurrentWriterBlogs,
} = blogSlice.actions;

export default blogSlice.reducer;
