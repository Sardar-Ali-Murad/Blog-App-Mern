import React from 'react'
import "./App.css"
import {Home,WriterProfile,About}  from "./pages/index"
import {BrowserRouter,Routes,Route}  from "react-router-dom"

const App = () => {
  return (
    <div className='appMain'>
      <BrowserRouter>
         <Routes>
            <Route path="/" element={<Home/>}/>
            <Route path="/about" element={<About/>}/>
            <Route path="/writer/:writerId" element={<WriterProfile/>}/>
         </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App
