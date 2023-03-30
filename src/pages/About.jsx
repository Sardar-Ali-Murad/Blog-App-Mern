import React from 'react'
import Footer from "../componenets/CommonComponents/Footer"
import Hero from '../componenets/CommonComponents/Hero'
import {Numbers,Work,Network,Space,Feedback,LearnWritting} from '../componenets/AboutComponents/index'

const About = () => {
  return (
    <div>
      <Hero/>
      <Numbers/>
      <Work/>
      <Network/>
      <Space/>
      <Feedback/>
      <LearnWritting/>
      <Footer/>
    </div>
  )
}

export default About
