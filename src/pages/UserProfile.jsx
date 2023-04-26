import React from "react";
import Navbar from "../componenets/CommonComponents/LightNavbar";
import Footer from "../componenets/CommonComponents/Footer";
import Header from "../componenets/UserProfileComponents/Header";
import SavedPosts from "../componenets/UserProfileComponents/SavedPosts";
import Details from "../componenets/UserProfileComponents/Details";
import { useSelector } from "react-redux";
import CircularProgress from "@mui/joy/CircularProgress";

const UserProfile = () => {
  let { isLoading } = useSelector((state) => state.store);
  if (isLoading) {
    return <CircularProgress size="lg" />;
  }
  return (
    <div>
      <Navbar />
      <Header />
      <Details />
      <SavedPosts />
      <Footer />
    </div>
  );
};

export default UserProfile;
