import React from "react";
import WriterIntro from "../componenets/WriterPublicProfileComponents/WriterIntro";
import RightComponent from "../componenets/CommonComponents/RightComponent";
import Footer from "../componenets/CommonComponents/Footer";
import LightNavbar from "../componenets/CommonComponents/LightNavbar";
import "./index.css";
import { useParams } from "react-router-dom";
import {BACK_END_URL} from "../utils"
import axios from "axios";
import {changeCategory, withoutFiltersBlogs} from "../features/blog/blogSlice"
import { useDispatch, useSelector } from "react-redux";
import {getCurrentWriterInfo,getCurrentWriterBlogs} from "../features/blog/blogSlice"
import CircularProgress from '@mui/joy/CircularProgress';
import WriterBlogs from "../componenets/WriterPublicProfileComponents/WriterBlogs"

const WriterPublicProfile = () => {
  let {category}=useSelector((state)=>state.blog)
  let dispatch=useDispatch()
  let {writerId}=useParams()
  let [loading,setLoading]=React.useState(true)
  React.useEffect(()=>{
    dispatch(changeCategory("All"))
  },[])


  React.useEffect(()=>{
    let start=async ()=>{
      setLoading(true)
      let writerBlogsInfo=await axios.get(`${BACK_END_URL}/blog/singleWriterBlogs/${writerId}?category=${category}`)
      let currentWriterInfo=await axios.get(`${BACK_END_URL}/writer/${writerId}`)
      dispatch(getCurrentWriterBlogs(writerBlogsInfo.data.WritterBlogs))
      dispatch(getCurrentWriterInfo(currentWriterInfo.data.Writter))
      setLoading(false)
    }
    start()
  },[category])

  React.useEffect(()=>{
    dispatch(withoutFiltersBlogs())
  },[])

 
  if(loading){
   return    <CircularProgress variant="outlined" />
  }


  return (
    <div>
      <LightNavbar  />
      <div className="writerPublicProfileMain">
        <div className="writerIntro">
          <WriterIntro/>
           <WriterBlogs/>
        </div>
        <div className="writerPublicProfileMainSidebar">
          <RightComponent />
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default WriterPublicProfile;
