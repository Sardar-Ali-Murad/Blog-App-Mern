import React from "react";
import "./Network.css";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

import { FaFacebookF } from "react-icons/fa";
import { TbVectorBezierCircle } from "react-icons/tb";
import { IoLogoInstagram } from "react-icons/io";


const Network = () => {
  let { ApprovedWritters } = useSelector((state) => state.writerRequest);
  return (
    <div className="networkBigMain">
      <div className="networkMain">
        <div className="networkContent">
          <h1>
            Join a network <br /> of curious <br /> minds.
          </h1>
          <p>
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's <br /> standard dummy
            text ever since the 1500s.
          </p>
        </div>
        <div>

          <div className="approvedritersGrid">
        {ApprovedWritters.map((writer) => {
          return (
            <div className="writterWrapper">
              <Link to={`/WriterPublicProfile/${writer?._id}`}>
                <img src={writer?.photo} style={{borderRadius:"50%",height:"100px",width:'100px'}} />
              </Link>
              <div className="writtersContent">
                <div  style={{ color: "#FAF9F6" }}>
                  <p className="writterName"  style={{ color: "black" }}>{writer.name}</p>
                  <p className="writterBio"  style={{ color: "black" }}>
                    {writer?.shortBio?.slice(0, 100)}...
                  </p>
                </div>
                <div className="writtersIcons">
                  <div className="rightComponentWritersIcons"  style={{ color: "black" }}>
                    <FaFacebookF />
                  </div>
                  <div className="rightComponentWritersIcons"  style={{ color: "black" }}>
                    <TbVectorBezierCircle />
                  </div>
                  <div className="rightComponentWritersIcons"  style={{ color: "black" }}>
                    <IoLogoInstagram />
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </div>
        </div>
      </div>
    </div>
  );
};

export default Network;
