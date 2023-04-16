import React from "react";
import Hero from "../componenets/CommonComponents/Hero";
import ImageGrid from "../componenets/HomeComponents/ImageGrid";
import Trending from "../componenets/HomeComponents/Trending";
import Footer from "../componenets/CommonComponents/Footer";
import Blogs from "../componenets/HomeComponents/Blogs";
import {withoutFiltersBlogs}  from "../features/blog/blogSlice"
import { useSelector,useDispatch } from "react-redux";
import CircularProgress from '@mui/joy/CircularProgress';

const Home = () => {
  let{isLoading}=useSelector((state)=>state.blog)
  let dispatch=useDispatch()
  React.useEffect(()=>{
     dispatch(withoutFiltersBlogs())
  },[])


  if(isLoading){
    return  <CircularProgress size="lg" />
  }
  return (
    <div className="homeMain">
      <Hero />
      <ImageGrid />
      <Trending />
      <Blogs />
      <Footer />
    </div>
  );
};

export default Home;
