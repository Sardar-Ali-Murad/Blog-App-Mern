import React from "react";
import "./RightComponent.css";
import { FaFacebookF } from "react-icons/fa";
import { TbVectorBezierCircle } from "react-icons/tb";
import { IoLogoInstagram } from "react-icons/io";
import { CiTwitter } from "react-icons/ci";
import { useSelector } from "react-redux";
import {
  changeCategory,
  withFiltersBlogs,
} from "../../features/blog/blogSlice";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import moment from "moment";
import { SlCalender } from "react-icons/sl";
import { BiCircle } from "react-icons/bi";


const RightComponent = () => {
  let dispatch = useDispatch();
  let { ApprovedWritters } = useSelector((state) => state.writerRequest);
  let { category } = useSelector((state) => state.blog);
  let { withOutFilterBlogs } = useSelector((state) => state.blog);
  let [active, setActive] = React.useState(category);
  React.useEffect(() => {
    dispatch(changeCategory(active));
  }, [active]);

  React.useEffect(() => {
    dispatch(withFiltersBlogs());
  }, [category]);

  // console.log(withFilterBlogs)

  return (
    <div className="rightSideBarMain">
      {/*  */}
      <div className="rightSideBarMainFlex">
        <h2 className="fancyDectoration" style={{color:'#FAF9F6'}}>Top Stories</h2>
        <a>View All</a>
      </div>
      {/*  */}
      <div>
        {withOutFilterBlogs.slice(0, 3).map((item,i) => {
          return (
            <Link to={`/blog/${item?._id}`} key={i}>
              <div className="singleBlogRightSidebar">
                <img
                  src={item?.posterImage}
                  className="rightSideBarMainImage"
                />
                <div className="blogsContent">
                  <div className="Chips">
                    <p>{item?.category}</p>
                  </div>
                  <p className="trendingEnd"  style={{ color: "#FAF9F6" }}>{item?.title}</p>
                    <div className="trendingFlex">
                      <Link to={`/WriterPublicProfile/${item?.writer?._id}`}>
                        <img
                          src={item?.writer?.photo}
                          style={{
                            height: "30px",
                            width: "30px",
                            borderRadius: "50%",
                          }}
                        />
                      </Link>
                      <p className="paraColor" style={{ color: "#FAF9F6" }}>
                        {item?.writer?.name}
                      </p>
                    </div>
                    <div className="trendingTime">
                      <SlCalender style={{ color: "#FAF9F6" }} />
                      <p style={{ color: "#FAF9F6" }}>
                        {" "}
                        {moment(item?.createdAt).format("DD/MM/YYYY")}
                      </p>
                      <BiCircle style={{ color: "#FAF9F6" }} />
                      <p style={{ color: "#FAF9F6" }}>3 min to Read</p>
                    </div>
                </div>
              </div>
            </Link>
          );
        })}
      </div>
      {/*  */}
      <div className="rightSideBarMainFlex">
        <h2 className="fancyDectoration"  style={{color:'#FAF9F6'}}>Top Writers</h2>
        <a>View All</a>
      </div>
      {/*  */}
      <div>
        {ApprovedWritters.map((writer,i) => {
          return (
            <div className="writterWrapper" key={i}>
              <Link to={`/WriterPublicProfile/${writer?._id}`}>
                <img src={writer?.photo} style={{width:"230px",height:"130px"}} />
              </Link>
              <div className="writtersContent">
                <div  style={{ color: "#FAF9F6" }}>
                  <p className="writterName"  style={{ color: "#FAF9F6" }}>{writer?.name}</p>
                  <p className="writterBio"  style={{ color: "#FAF9F6" }}>
                    {writer?.shortBio?.slice(0, 100)}...
                  </p>
                </div>
                <div className="writtersIcons">
                  <div className="rightComponentWritersIcons"  style={{ color: "#FAF9F6" }}>
                    <FaFacebookF />
                  </div>
                  <div className="rightComponentWritersIcons"  style={{ color: "#FAF9F6" }}>
                    <TbVectorBezierCircle />
                  </div>
                  <div className="rightComponentWritersIcons"  style={{ color: "#FAF9F6" }}>
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
          <h2 className="fancyDectoration"  style={{color:'#FAF9F6'}}>Quick Start</h2>
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
        <h2 className="fancyDectoration"  style={{color:'#FAF9F6'}}>Follow Us</h2>
      </div>
      <div className="writtersIcons ">
        <div className=" writtersIconsWhite rightSideBarTwitter" style={{borderRadius:"2px solid white"}}>
          <CiTwitter style={{ color: "#FFFFFF"}} />
        </div>
        <div className="writtersIconsWhite" style={{borderRadius:"2px solid white"}}>
          <FaFacebookF />
        </div>
        <div className="writtersIconsWhite">
          <TbVectorBezierCircle />
        </div>
        <div className="writtersIconsWhite">
          <IoLogoInstagram />
        </div>
      </div>
      {/*  */}
      <div className="rightSideBarMainFlex rightSidebarFlexBoxes">
        <h2 className="fancyDectoration"  style={{color:'#FAF9F6'}}>Categories </h2>
        <a>View All</a>
      </div>

      <div className="rightSideBarCategories">
        <div
          className={`rightSideBarSingleCategoryWhite ${
            active === "All" ? "active" : ""
          }`}
          onClick={() => setActive("All")}
        >
          <p>All</p>
        </div>
        <div
          className={`rightSideBarSingleCategoryWhite ${
            active === "Travel" ? "active" : ""
          }`}
          onClick={() => setActive("Travel")}
        >
          <p>Travel</p>
        </div>
        <div
          className={`rightSideBarSingleCategoryWhite ${
            active === "lifestyle" ? "active" : ""
          }`}
          onClick={() => setActive("lifestyle")}
        >
          <p>lifestyle</p>
        </div>
        <div
          className={`rightSideBarSingleCategoryWhite ${
            active === "fashion" ? "active" : ""
          }`}
          onClick={() => setActive("fashion")}
        >
          <p>fashion</p>
        </div>
        <div
          className={`rightSideBarSingleCategoryWhite ${
            active === "dataScience" ? "active" : ""
          }`}
          onClick={() => setActive("dataScience")}
        >
          <p>Data Science</p>
        </div>
        <div
          className={`rightSideBarSingleCategoryWhite ${
            active === "business" ? "active" : ""
          }`}
          onClick={() => setActive("business")}
        >
          <p>business</p>
        </div>
        <div
          className={`rightSideBarSingleCategoryWhite ${
            active === "design" ? "active" : ""
          }`}
          onClick={() => setActive("design")}
        >
          <p>design</p>
        </div>
        <div
          className={`rightSideBarSingleCategoryWhite ${
            active === "health" ? "active" : ""
          }`}
          onClick={() => setActive("health")}
        >
          <p>health</p>
        </div>
        <div
          className={`rightSideBarSingleCategoryWhite ${
            active === "food" ? "active" : ""
          }`}
          onClick={() => setActive("food")}
        >
          <p>food</p>
        </div>
        <div
          className={`rightSideBarSingleCategoryWhite ${
            active === "art" ? "active" : ""
          }`}
          onClick={() => setActive("art")}
        >
          <p>art</p>
        </div>
      </div>
      {/*  */}

      <div className="rightSideBarAdd" style={{width:"100%"}}>
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
