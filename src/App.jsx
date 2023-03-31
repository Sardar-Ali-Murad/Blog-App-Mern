import React from "react";
import "./App.css";
import { Home, WriterProfile, About, Category } from "./pages/index";
import { BrowserRouter, Routes, Route } from "react-router-dom";

const App = () => {
  return (
    <div className="appMain">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/writer/:writerId" element={<WriterProfile />} />
          <Route path="category/:categoryName" element={<Category />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default App;
