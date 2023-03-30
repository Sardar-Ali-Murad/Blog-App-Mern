import React from 'react'
import "./App.css"
import {Home,WriterProfile}  from "./pages/index"
import {BrowserRouter,Routes,Route}  from "react-router-dom"

const App = () => {
  return (
    <div className='appMain'>
      <BrowserRouter>
         <Routes>
            <Route path="/" element={<Home/>}/>
            <Route path="/writer/:writerId" element={<WriterProfile/>}/>
         </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App
