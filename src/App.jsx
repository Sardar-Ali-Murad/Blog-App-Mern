import React from "react";
import "./App.css";
import {
  Home,
  WriterProfile,
  Home2,
  Category,
  WritersList,
  About,
  GetStarted,
  Login,
  Register,
  ForgetPassword,
  ResetPassword,
  Courses,
  FAQ,
  Request,
  WriterForm,
  WriteBlogForm,
  WriterDetailForm,
  WriterPublicProfile,
  SingleBlog,
} from "./pages/index";
import {setupGetCurrentWriter}  from "./features/writerRequest/writerRequestSlice"
import { useSelector,useDispatch } from "react-redux";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import {setupGetApprovedWriters}  from "./features/writerRequest/writerRequestSlice"
import {withoutFiltersBlogs}  from "./features/blog/blogSlice"
import {getCurrentUser} from "./features/user/userSlice"

import Testing from "./Testing"

const App = () => {
   let dispatch=useDispatch()
  React.useEffect(()=>{
    dispatch(setupGetCurrentWriter())
    dispatch(setupGetApprovedWriters())
    dispatch(withoutFiltersBlogs())
    dispatch(getCurrentUser())
  },[])

  return (
    <div className="appMain">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/test" element={<Testing />} />
          <Route path="/about" element={<Home2 />} />

          <Route path="/courses" element={<Courses />} />
          <Route path="/FAQ" element={<FAQ />} />
          <Route path="/writeBlog" element={<WriteBlogForm />} />
          <Route path="/Request" element={<Request />} />
          <Route path="/WriterForm" element={<WriterForm />} />
          <Route path="/WriterDetailForm" element={<WriterDetailForm />} />
          <Route path="/blog/:blogId" element={<SingleBlog />} />
          <Route
            path="/WriterPublicProfile/:writerId"
            element={<WriterPublicProfile />}
          />

          <Route path="/home2" element={<Home2 />} />
          <Route path="/login" element={<Login />} />
          <Route path="/forgetPassword" element={<ForgetPassword />} />
          <Route path="/resetPassword" element={<ResetPassword />} />
          <Route path="/register" element={<Register />} />
          <Route path="/getStarted" element={<GetStarted />} />
          <Route path="/writersList" element={<WritersList />} />
          <Route path="/writer/:writerId" element={<WriterProfile />} />
          <Route path="category/:categoryName" element={<Category />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default App;
