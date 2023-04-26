import React from "react";
import LightNavbar from "../componenets/CommonComponents/LightNavbar";
import Footer from "../componenets/CommonComponents/Footer";
import RegisterComponent from "../componenets/AuthComponents/Register";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";

const Register = () => {
  let { user } = useSelector((state) => state.store);
  let navigate = useNavigate();

  React.useEffect(() => {
    if (user) {
      setTimeout(() => {
        navigate("/userProfile");
      }, 2000);
    }
  }, [user, navigate]);
  return (
    <div>
      <LightNavbar />
      <RegisterComponent />
      <Footer />
    </div>
  );
};

export default Register;
