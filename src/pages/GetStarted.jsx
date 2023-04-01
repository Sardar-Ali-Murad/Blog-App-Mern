import React from 'react'
import Hero from "../componenets/CommonComponents/Hero"
import Network from "../componenets/Home2Components/Network"
import Space from "../componenets/Home2Components/Space"
import Accordion from "../componenets/Home2Components/Accordion"
import Footer from "../componenets/CommonComponents/Footer"

const GetStarted = () => {
  return (
    <div>
      <Hero/>
      <Network/>
      <Space/>
      <Accordion/>
      <Footer/>
    </div>
  )
}

export default GetStarted
