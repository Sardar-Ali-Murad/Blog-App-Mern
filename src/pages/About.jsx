import React from 'react'
import {AboutHeader,AboutContent,AboutCompanies}  from "../componenets/AboutComponents/index"
import LightNavbar from "../componenets/CommonComponents/LightNavbar"
import Footer from "../componenets/CommonComponents/Footer"

const About = () => {
  return (
    <div>
        <LightNavbar signIn={true} getStarted={true}/>
      <AboutHeader/>
      <AboutContent/>
      <AboutCompanies/>
      <Footer/>
    </div>
  )
}

export default About
