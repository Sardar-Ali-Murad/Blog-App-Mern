import React from "react";
import "./WriterProfileContent.css";
import Writer from "../../assets/writerImage.png";
import { FaFacebookF } from "react-icons/fa";
import { TbScaleOutlineOff, TbVectorBezierCircle } from "react-icons/tb";
import BlogCard from "../CommonComponents/BlogCard";
import { CiTwitter } from "react-icons/ci";
import { writerProfileContent } from "../data";
import Footer from "../CommonComponents/Footer";
import { useSelector } from "react-redux";
import axios from "axios";
import {BACK_END_URL}  from "../../utils"
import { useParams } from "react-router-dom";
import Blog from "./Blogs"
import CircularProgress from '@mui/joy/CircularProgress'


const WriterProfileContent = () => {
  let {writerId}=useParams()
  let {currentWriterInfo}=useSelector((state)=>state.writerRequest)
  let [active,setActive]=React.useState("All")
  let [blogs,setBlogs]=React.useState([])
  let [loading,setLoading]=React.useState(true)

  React.useEffect(()=>{
    let start=async ()=>{
      setLoading(true)
       let {data}=await axios.get(`${BACK_END_URL}/blog/getSingleWriterAllBLogs/${writerId}?status=${active}`)
       setBlogs(data?.writerAllBlogs)
       setLoading(false)
    }
    start()
  },[active])

  return (
    <div className="WriterProfileContentBigMain">
      {/* First Part Starts */}
      <div className="WriterProfileContentMain">
        {/*  */}
        <div className="writerProfileBiography">
          {/*  */}
          <div className="writerImageBio">
            <img src={currentWriterInfo?.photo} />
            <p className="writerName">{currentWriterInfo?.name}</p>
            <p className="writerBio">{currentWriterInfo?.purpose}</p>
            <div className="writtersIcons">
              <div
                className="rightSideBarBigIcons rightSideBarTwitter"
                style={{ color: "#FFFFFF" }}
              >
                <FaFacebookF />
              </div>
              <div className=" rightSideBarBigIcons ">
                <CiTwitter />
              </div>
              <div className="rightSideBarBigIcons">
                <TbVectorBezierCircle />
              </div>
            </div>
          </div>
          {/*  */}
          <div className="writersBtns">
            <button className="writting">Start Writting</button>
            <button className="articlesBtn">All Articles</button>
            <button className="draftsBtn">All Drafts</button>
          </div>
        </div>
        {/* First Parts ends  */}

        <div className="writerArticlesInfo">
          <div className="writerArticleLinks">
            <p className={`${active==="All"?"activeLink":"WriterBlogsOptions"}`} onClick={()=>setActive("All")}>All Articles</p>
            <p onClick={()=>setActive("pending")} className={`${active==="pending"?"activeLink":"WriterBlogsOptions"}`} >Pending Articles </p>
            <p onClick={()=>setActive("rejected")} className={`${active==="rejected"?"activeLink":"WriterBlogsOptions"}`} >Rejected Articles</p>
          </div>
          <div className="writerLine"></div>
          {
            loading? <CircularProgress size="lg" />:
            <div className="writerBlogs">
            {
              blogs.map((item)=>{
                return (
                  <div className="writerArticlesFlex">
                  <Blog item={item}/>
                  <div className={`Chips ${item?.status==="selected"?"articleChip":""} ${item?.status==="pending"?"pendingChip":""} ${item?.status==="rejected"?"rejectedChip":""}`}>
                    <p>{item?.status}</p>
                  </div>
                </div>
                  )
              })
            }
        
          </div>
          }

        </div>
      </div>

      {/*  */}
      <Footer />
    </div>
  );
};

export default WriterProfileContent;
