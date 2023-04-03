import React from "react";
import LightNavbar from "../componenets/CommonComponents/LightNavbar";
import Footer from "../componenets/CommonComponents/Footer";
import FAQHeader from "../componenets/FAQSComponents/FAQHeader";
import FAQBody from "../componenets/FAQSComponents/FAQBody";

const FAQ = () => {
  return (
    <div>
      <LightNavbar />
      <FAQHeader />
      <FAQBody />
      <Footer />
    </div>
  );
};

export default FAQ;
