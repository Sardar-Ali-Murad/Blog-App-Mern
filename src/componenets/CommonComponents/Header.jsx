import React from "react";
import "./Header.css";

const AboutHeader = ({ head, para }) => {
  return (
    <div className="HeaderBigMain">
      <div className="HeaderMain">
        <h1>{head}</h1>
        <p>{para}</p>
      </div>
    </div>
  );
};

export default AboutHeader;
