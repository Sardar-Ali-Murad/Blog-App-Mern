import React from "react";
import LightNavbar from "../componenets/CommonComponents/LightNavbar";
import RegisterComponent from "../componenets/AuthComponents/Register";
import Footer from "../componenets/CommonComponents/Footer";

const Register = () => {
  return (
    <div>
      <LightNavbar signIn={true} getStarted={true} />
      <RegisterComponent />
      <Footer />
    </div>
  );
};

export default Register;
