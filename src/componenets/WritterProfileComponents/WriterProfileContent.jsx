import React from "react";
import "./WriterProfileContent.css";
import Writer from "../../assets/writerImage.png";
import { FaFacebookF } from "react-icons/fa";
import { TbVectorBezierCircle } from "react-icons/tb";
import BlogCard from "../CommonComponents/BlogCard"
import {CiTwitter}  from "react-icons/ci"
import {writerProfileContent} from "../data"
import Footer from "../CommonComponents/Footer";


const WriterProfileContent = () => {
  return (
    <div className="WriterProfileContentBigMain">
    {/* First Part Starts */}
    <div className="WriterProfileContentMain">
      {/*  */}
      <div className="writerProfileBiography">
        {/*  */}
        <div className="writerImageBio">
          <img src={Writer} />
          <p className="writerName">Ann C. Thompson</p>
          <p className="writerBio">Fashion designer, Blogger, activist</p>
          <div className="writtersIcons">
            <div className="rightSideBarBigIcons rightSideBarTwitter" style={{ color: "#FFFFFF" }}>
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
            <p className="activeLink">All Articles</p>
            <p>Pending Articles </p>
            <p>Rejected Articles</p>
         </div>
         <div className="writerLine"></div>
         <div className="writerBlogs">
            <div className="writerArticlesFlex">
               <BlogCard item={writerProfileContent[0]}/>
               <div className="articleChip">
                <p>article</p>
               </div>
            </div>
            <div className="writerArticlesFlex">
               <BlogCard item={writerProfileContent[1]}/>
               <div className="pendingChip">
                <p>pending</p>
               </div>
            </div>
            <div className="writerArticlesFlex">
               <BlogCard item={writerProfileContent[2]}/>
               <div className="rejectedChip">
                <p>rejected</p>
               </div>
            </div>
            <div className="writerArticlesFlex">
               <BlogCard item={writerProfileContent[3]}/>
               <div className="rejectedChip">
                <p>rejected</p>
               </div>
            </div>
         </div>
      </div>
    </div>

    {/*  */}
    <Footer/>
    </div>
  );
};

export default WriterProfileContent;
