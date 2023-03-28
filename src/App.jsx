import React from 'react'
import "./App.css"
import Hero from './componenets/Hero'
import ImageGrid from './componenets/ImageGrid'
import Trending from './componenets/Trending'
import Blogs from './componenets/Blogs'

const App = () => {
  return (
    <div>
      <Hero/>
      <ImageGrid/>
      <Trending/>
      <Blogs/>
    </div>
  )
}

export default App
