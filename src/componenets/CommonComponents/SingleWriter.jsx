import React from "react";
import "./RightComponent.css";
import { FaFacebookF } from "react-icons/fa";
import { TbVectorBezierCircle } from "react-icons/tb";
import { IoLogoInstagram } from "react-icons/io";

const SingleWriter = ({ writer }) => {
  return (
    <div>
      <div className="singleWritterWrapper">
        <img src={writer?.img} />
        <div className="writtersContent">
          <div>
            <p className="writterName">{writer.name}</p>
            <p className="writterBio">{writer?.bio}</p>
            <p className="writterInfo">{writer?.info}</p>
          </div>
          <div className="writtersIcons">
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
        </div>
      </div>
    </div>
  );
};

export default SingleWriter;
