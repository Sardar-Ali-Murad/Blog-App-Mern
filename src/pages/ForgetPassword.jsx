import React from "react";
import NavbarLight from "../componenets/CommonComponents/LightNavbar";
import Footer from "../componenets/CommonComponents/Footer";
import ForgetComponent from "../componenets/AuthComponents/ForgetPassword";

const ForgetPassword = () => {
  return (
    <div>
      <NavbarLight />
      <ForgetComponent />
      <Footer />
    </div>
  );
};

export default ForgetPassword;
