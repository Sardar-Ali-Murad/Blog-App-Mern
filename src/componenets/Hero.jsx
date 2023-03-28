import React from 'react'
import Navbar from "./Navbar"
import HeroText from "./HeroText"
import "./Hero.css"


const Hero = () => {
  return (
    <div className='heroMain'>
        <Navbar/>
        <HeroText/>
    </div>
  )
}

export default Hero
