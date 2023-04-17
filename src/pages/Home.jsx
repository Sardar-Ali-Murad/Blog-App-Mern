import React from "react";
import Hero from "../componenets/CommonComponents/Hero";
import ImageGrid from "../componenets/HomeComponents/ImageGrid";
import Trending from "../componenets/HomeComponents/Trending";
import Footer from "../componenets/CommonComponents/Footer";
import Blogs from "../componenets/HomeComponents/Blogs";
import { useSelector,useDispatch } from "react-redux";
import CircularProgress from '@mui/joy/CircularProgress';
import {setupGetApprovedWriters}  from "../features/writerRequest/writerRequestSlice"
import {withoutFiltersBlogs}  from "../features/blog/blogSlice"

const Home = () => {
  let{isLoading}=useSelector((state)=>state.blog)



  if(isLoading){
    return  <CircularProgress size="lg" />
  }
  return (
    <div className="homeMain">
      <Hero />
      {/* <ThreeJsCarpet/> */}
      {/* <ImageGrid /> */}
      <Trending />
      <Blogs />
      <Footer />
    </div>
  );
};

export default Home;
