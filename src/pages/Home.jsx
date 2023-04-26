import React from "react";
import Hero from "../componenets/CommonComponents/Hero";
import Trending from "../componenets/HomeComponents/Trending";
import Footer from "../componenets/CommonComponents/Footer";
import Blogs from "../componenets/HomeComponents/Blogs";
import { useSelector, useDispatch } from "react-redux";
import CircularProgress from "@mui/joy/CircularProgress";
import { changeCategory } from "../features/blog/blogSlice";

const Home = () => {
  let { isLoading } = useSelector((state) => state.blog);
  let dispatch = useDispatch();

  React.useEffect(() => {
    dispatch(changeCategory("All"));
  }, []);

  if (isLoading) {
    return <CircularProgress size="lg" />;
  }
  return (
    <div className="homeMain">
      <Hero />

      <Trending />
      <Blogs />
      <Footer />
    </div>
  );
};

export default Home;
