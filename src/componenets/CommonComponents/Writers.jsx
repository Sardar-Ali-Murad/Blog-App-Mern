import React from "react";
import "./RightComponent.css";
import { writers } from "../data";
import { FaFacebookF } from "react-icons/fa";
import { TbVectorBezierCircle } from "react-icons/tb";
import { IoLogoInstagram } from "react-icons/io";

const Writers = () => {
  return (
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
  );
};

export default Writers;
