import React from "react";
import "./RightComponent.css";
import { blogsData } from "../data";
import img from "../../assets/trending.png";
import calender from "../../assets/calender.png";
import time from "../../assets/time.png";
import { writers } from "../data";
import { FaFacebookF } from "react-icons/fa";
import { TbVectorBezierCircle } from "react-icons/tb";
import { IoLogoInstagram } from "react-icons/io";
import { CiTwitter } from "react-icons/ci";
import { useSelector } from "react-redux";
import {changeCategory,withFiltersBlogs}  from "../../features/blog/blogSlice"
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";

const RightComponent = () => {
  let dispatch=useDispatch()

   let {category}=useSelector((state)=>state.blog)
  let {withOutFilterBlogs}=useSelector((state)=>state.blog)
  let [active,setActive]=React.useState(category)
  React.useEffect(()=>{
    dispatch(changeCategory(active))
  },[active])


  React.useEffect(()=>{
    dispatch(withFiltersBlogs())
  },[category])

  // console.log(withFilterBlogs)



  return (
    <div className="rightSideBarMain">
      {/*  */}
      <div className="rightSideBarMainFlex">
        <h2 className="fancyDectoration">Top Stories</h2>
        <a>View All</a>
      </div>
      {/*  */}
      <div>
        {withOutFilterBlogs.slice(0, 3).map((item) => {
          return (
            <Link to={`/blog/${item?._id}`}>
            <div className="singleBlog">
              <img src={item?.posterImage} className="rightSideBarMainImage" />
              <div className="blogsContent">
                <div className="travelChip">
                  <p>{item?.category}</p>
                </div>
                <p className="trendingEnd">
                  {item?.title}
                </p>
                <div className="trendingFlex">
                  <Link to={`/WriterPublicProfile/${item?.writer?._id}`}>
                  <img src={item?.writer?.photo} style={{width:"30px",height:"30px",borderRadius:'50%'}} />
                  </Link>
                  <p>{item?.writer?.name}</p>
                </div>
                <div className="trendingTime">
                  <img src={calender}  />
                  <p>{item?.createdAt}</p>
                  <img src={time} />
                  <p>3 min</p>
                </div>
              </div>
            </div>
            </Link>
          );
        })}
      </div>
      {/*  */}
      <div className="rightSideBarMainFlex">
        <h2 className="fancyDectoration">Top Writers</h2>
        <a>View All</a>
      </div>
      {/*  */}
      <div>
        {writers.map((writer) => {
          return (
            <div className="writterWrapper">
              <img src={writer?.img} />
              <div className="writtersContent">
                <div>
                  <p className="writterName">{writer.name}</p>
                  <p className="writterBio">{writer?.bio}</p>
                </div>
                <div className="writtersIcons">
                  <div className="rightComponentWritersIcons">
                    <FaFacebookF />
                  </div>
                  <div className="rightComponentWritersIcons">
                    <TbVectorBezierCircle />
                  </div>
                  <div className="rightComponentWritersIcons">
                    <IoLogoInstagram />
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </div>
      {/*  */}
      <div>
        <div className="rightSideBarMainFlex rightSidebarFlexBoxes">
          <h2 className="fancyDectoration">Quick Start</h2>
        </div>
        <div className="numbers">
          <div className="numberSingle">
            <p className="amount">14</p>
            <p className="amountContent">New Post</p>
          </div>
          <div className="numberSingle">
            <p className="amount">480</p>
            <p className="amountContent">total visitors</p>
          </div>
          <div className="numberSingle">
            <p className="amount">29</p>
            <p className="amountContent">New subscribers</p>
          </div>
          <div className="numberSingle">
            <p className="amount">138</p>
            <p className="amountContent">blog read</p>
          </div>
        </div>
      </div>

      {/*  */}
      <div className="rightSideBarMainFlex rightSidebarFlexBoxes">
        <h2 className="fancyDectoration">Follow Us</h2>
      </div>
      <div className="writtersIcons">
        <div className=" rightSideBarBigIcons rightSideBarTwitter">
          <CiTwitter style={{ color: "#FFFFFF" }} />
        </div>
        <div className="rightSideBarBigIcons">
          <FaFacebookF />
        </div>
        <div className="rightSideBarBigIcons">
          <TbVectorBezierCircle />
        </div>
        <div className="rightSideBarBigIcons">
          <IoLogoInstagram />
        </div>
      </div>
      {/*  */}
      <div className="rightSideBarMainFlex rightSidebarFlexBoxes">
        <h2 className="fancyDectoration">Categories </h2>
        <a>View All</a>
      </div>

      <div className="rightSideBarCategories">
        <div className={`rightSideBarSingleCategory ${active==="All"?"active":""}`}  onClick={()=>setActive("All")}>
          <p>All</p>
        </div>
        <div className={`rightSideBarSingleCategory ${active==="Travel"?"active":""}`}   onClick={()=>setActive("Travel")}>
          <p>Travel</p>
        </div>
        <div className={`rightSideBarSingleCategory ${active==="lifestyle"?"active":""}`}   onClick={()=>setActive("lifestyle")}>
          <p>lifestyle</p>
        </div>
        <div className={`rightSideBarSingleCategory ${active==="fashion"?"active":""}`}   onClick={()=>setActive("fashion")}>
          <p>fashion</p>
        </div>
        <div className={`rightSideBarSingleCategory ${active==="dataScience"?"active":""}`}   onClick={()=>setActive("dataScience")}>
          <p>Data Science</p>
        </div>
        <div className={`rightSideBarSingleCategory ${active==="business"?"active":""}`}   onClick={()=>setActive("business")}>
          <p>business</p>
        </div>
        <div className={`rightSideBarSingleCategory ${active==="design"?"active":""}`}   onClick={()=>setActive("design")}>
          <p>design</p>
        </div>
        <div className={`rightSideBarSingleCategory ${active==="health"?"active":""}`}   onClick={()=>setActive("health")}>
          <p>health</p>
        </div>
        <div className={`rightSideBarSingleCategory ${active==="food"?"active":""}`}  onClick={()=>setActive("food")}>
          <p>food</p>
        </div>
        <div className={`rightSideBarSingleCategory ${active==="art"?"active":""}`}  onClick={()=>setActive("art")}>
          <p>art</p>
        </div>
      </div>
      {/*  */}

      <div className="rightSideBarAdd">
        <h2>want to travel sikkim by car?</h2>
        <p>
          Did you come here for something in particular or just general
          Riker-bashing? And blowing into
        </p>
        <button className="addBtn">Visit Us</button>
      </div>
    </div>
  );
};

export default RightComponent;
