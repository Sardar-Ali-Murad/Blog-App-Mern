import React from "react";
import "./LearnWritting.css";
import img1 from "../../assets/whatsapp.png";

import learn1 from "../../assets/learn1.png";
import learn2 from "../../assets/learn2.png";

const LearnWritting = () => {
  return (
    <div className="learnBigMain">
      <div className="learnMain">
        {/*  */}
        <div className="leanContentMain">
          <h1 style={{ color: "#FAF9F6" }}>Want to Become an author or Learn Writing </h1>
          <div className="learnMainContent">
            <p style={{ color: "#f1f1f1" }}>
              Dynamically underwhelm integrated outsourcing via timely models.
              Rapidiously reconceptualize visionary imperatives without 24/365
              catalysts for change. Completely streamline functionalized models.
            </p>
            <p style={{ color: "#f1f1f1" }}>
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s, when an unknown printer took a galley of
              type and scrambled it to make a type specimen book. It has
              survived not only five centuries, but also the leap into
              electronic typesetting, remaining essentially unchanged. It was
              popularised in the 1960s with the release of Letraset sheets
              containing Lorem Ipsum passages, and more recently with desktop
              publishing software like Aldus PageMaker including versions of
              Lorem Ipsum
            </p>
            <div className="learnWritingBtns">
              <button className="joinBtn">Join Writing Course</button>
              <button className="whatsAppBtn">
                <div className="learnFlex">
                  <img src={img1} />
                  <p>+92-333-1234567</p>
                </div>
              </button>
            </div>
          </div>
        </div>

        {/*  */}

        <div className="learnImages">
          <img src={learn1} className="learnOverlapImage" />
          <img src={learn2} />
        </div>

        {/*  */}
      </div>
    </div>
  );
};

export default LearnWritting;
