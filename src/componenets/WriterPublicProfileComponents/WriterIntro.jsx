// Using the single Writer in Common Componenents

import React from "react";
import { FaFacebookF } from "react-icons/fa";
import { TbVectorBezierCircle } from "react-icons/tb";
import { IoLogoInstagram } from "react-icons/io";
import { useSelector } from "react-redux";
import "./index.css";

const WriterIntro = () => {
  let { currentWriterInfo: writer } = useSelector((state) => state.blog);

  function htmlDecode(content) {
    let e = document.createElement("div");
    e.innerHTML = content;
    return e.childNodes.length === 0 ? "" : e.childNodes[0].nodeValue;
  }
  return (
    <div>
      <div>
        <div className="singleWritterWrapper">
          <img src={writer?.photo} style={{height:"200px",width:"200px"}} />
          <div className="writtersContent">
            <div>
              <p className="writterName" style={{color:"#FAF9F6"}}>{writer.name}</p>
              <p className="writterBio">{writer?.shortBio}</p>
            </div>
            <p className="writterInfo">{writer?.purpose}</p>

            <div className="writerPublicProfileFlex">
              {/*  */}
              <div className="writtersIcons writtersIconsPublicProfile">
                <div
                  className="rightComponentWritersIcons active"
                  style={{ color: "white" }}
                >
                  <FaFacebookF style={{ color: "#FAF9F6" }}/>
                </div>
                <div className="rightComponentWritersIcons">
                  <TbVectorBezierCircle style={{ color: "#FAF9F6" }} />
                </div>
                <div className="rightComponentWritersIcons">
                  <IoLogoInstagram style={{ color: "#FAF9F6" }}/>
                </div>
              </div>
              {/*  */}
              <p>Pro Writer</p>
            </div>
          </div>
        </div>
      </div>

      <section
        dangerouslySetInnerHTML={{ __html: htmlDecode(writer.description) }}
        className="writerDescription"
        style={{marginTop:"40px",color:"#f1f1f1"}}
      />

      <div >
        <h1 className="PostBy" style={{ color: "#FAF9F6" }}>posts By {writer?.name}</h1>
        <div className="categoryLinks">
          <p className="categoryActiveLink" style={{ color: "#FAF9F6" }}>Latest</p>
          <p className="categoryLink" style={{ color: "#FAF9F6" }}>Top Stories</p>
        </div>
        <div className="categoryLine"></div>
      </div>
    </div>
  );
};

export default WriterIntro;
