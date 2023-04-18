import React from "react";
import LightNavbar from "../componenets/CommonComponents/LightNavbar";
import Footer from "../componenets/CommonComponents/Footer";
import Header from "../componenets/WriteBlogComponents/WriteHeader";
import Body from "../componenets/WriteBlogComponents/WriteBody";

const WriteBlogForm = () => {
  return (
    <div>
      <LightNavbar  />
      {/* <Header /> */}
      <div style={{background:"white"}}>
      <Body />
      </div>
      <Footer />
    </div>
  );
};

export default WriteBlogForm;
