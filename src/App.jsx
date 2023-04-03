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
  Request
  ,WriterForm,
  WriteBlogForm,
  WriterDetailForm
} from "./pages/index";
import { BrowserRouter, Routes, Route } from "react-router-dom";

const App = () => {
  return (
    <div className="appMain">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          
          <Route path="/courses" element={<Courses />} />
          <Route path="/FAQ" element={<FAQ />} />
          <Route path="/Write" element={<WriteBlogForm />} />
          <Route path="/Request" element={<Request />} />
          <Route path="/WriterForm" element={<WriterForm />} />
          <Route path="/WriterDetailForm" element={<WriterDetailForm />} />

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
  )
}

export default App
