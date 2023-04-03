import React from 'react'
import LightNavbar from "../componenets/CommonComponents/LightNavbar"
import Footer from "../componenets/CommonComponents/Footer"
import Header from "../componenets/WritterDetailFormComponents/WritterDetailsHeader"
import Body from  "../componenets/WritterDetailFormComponents/WriterDetailForm"


const WriterDetailForm = () => {
  return (
    <div>
        <LightNavbar signIn={true} getStarted={true}/>
        <Header/>
        <Body/>
        <Footer/>
    </div>
  )
}

export default WriterDetailForm
