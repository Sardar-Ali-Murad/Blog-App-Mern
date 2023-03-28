import React from 'react'
import "./App.css"
import Hero from './componenets/Hero'
import ImageGrid from './componenets/ImageGrid'
import Trending from './componenets/Trending'

const App = () => {
  return (
    <div>
      <Hero/>
      <ImageGrid/>
      <Trending/>
    </div>
  )
}

export default App
