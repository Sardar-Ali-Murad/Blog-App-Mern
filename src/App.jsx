import React from 'react'
import "./App.css"
import Hero from './componenets/Hero'
import ImageGrid from './componenets/ImageGrid'
import Trending from './componenets/Trending'
import Blogs from './componenets/Blogs'
import Footer from './componenets/Footer'

const App = () => {
  return (
    <div>
      <Hero/>
      <ImageGrid/>
      <Trending/>
      <Blogs/>
      <Footer/>
    </div>
  )
}

export default App
