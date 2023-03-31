import React from "react";
import "./Space.css";
import SpaceImg from "../../assets/space.png";

const Space = () => {
  return (
    <div className="spaceBigMain">
      <div className="spaceMain">
        <div className="spaceText">
          <h1>Create your space.</h1>
          <div className="spaceContent">
            <p>
              Tell your story your way — with different ways <br /> to write,
              style, and brand your work.
            </p>
            <h3>Start a blog.</h3>
            <p>
              Create a blog for free to have a personalized home for your <br />
              writing. Brand
            </p>
            <h3>Start a publication.</h3>
            <p>
              Collaborate with others or publish under a brand name. Use our{" "}
              <br />
              story submission system and expressive customization options.
            </p>
            <button className="spaceBtn">Start writing</button>
          </div>
        </div>

        <div>
          <img src={SpaceImg} className="spaceImg" />
        </div>
      </div>
    </div>
  );
};

export default Space;
