import React from "react";
import "./HeroText.css";

const HeroText = () => {
  return (
    <div className="heroTextMain">
      <h1>Stay curious.</h1>
      <p>
        Lorem Ipsum is simply dummy text of the printing and typesetting
        industry. Lorem Ipsum has been the industry's standard dummy text ever
        since the 1500s.
      </p>
      <div className="heroTextFlex">
        <button className="signUp" style={{ background: "#0065FD" }}>
          Start Reading
        </button>
        <button className="login">Sign In</button>
      </div>
    </div>
  );
};

export default HeroText;
