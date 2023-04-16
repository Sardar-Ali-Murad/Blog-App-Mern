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
          <img src={writer?.photo} />
          <div className="writtersContent">
            <div>
              <p className="writterName">{writer.name}</p>
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
                  <FaFacebookF />
                </div>
                <div className="rightComponentWritersIcons">
                  <TbVectorBezierCircle />
                </div>
                <div className="rightComponentWritersIcons">
                  <IoLogoInstagram />
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
      />

      <div >
        <h1 className="PostBy">posts By {writer?.name}</h1>
        <div className="categoryLinks">
          <p className="categoryActiveLink">Latest</p>
          <p className="categoryLink">Top Stories</p>
        </div>
        <div className="categoryLine"></div>
      </div>
    </div>
  );
};

export default WriterIntro;
