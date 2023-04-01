import React from "react";
import RightComponent from "../componenets/CommonComponents/RightComponent";
import BlogCards from "../componenets/CommonComponents/BlogCards";
import "./Category.css";
import pin from "../assets/pin.png";
import LightNavbar from "../componenets/CommonComponents/LightNavbar";
import Footer from "../componenets/CommonComponents/Footer";

const Category = () => {
  return (
    <div>
      <LightNavbar signIn={true} getStarted={true} person={false} />
      <div className="categoryBlogMain">
        <div className="categoryBlogs">
          <div className="categoryTextFlex">
            <div className="categoryFlex">
              <div className="pinBox">
                <img src={pin} />
              </div>
              <h1 className="categoryHeading">Data Science</h1>
            </div>
            <p className="categoryPara">
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s.
            </p>
            <button className="categoryBtn">Start writing</button>
          </div>

          <div className="categoryLinks">
            <p className="categoryActiveLink">Latest</p>
            <p className="categoryLink">Top Stories</p>
          </div>
          <div className="categoryLine"></div>

          <BlogCards />
        </div>
        <div className="categoryRight">
          <RightComponent />
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Category;
