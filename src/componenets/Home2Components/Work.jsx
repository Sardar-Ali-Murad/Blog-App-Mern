import React from "react";
import "./Work.css";
import { WorkData } from "./data";

const Work = () => {
  return (
    <div className="workMain">
      <div className="worksHeaderText">
        <h1 style={{ color: "#FAF9F6" }}>How does it works</h1>
        <p style={{ marginBottom: "40px",color: "#f1f1f1"  }}>
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's <br /> standard dummy
          text ever since the 1500s.
        </p>
      </div>

      <div className="workContent">
        {WorkData?.map((item) => {
          return (
            <div className="singleWorkWrapper">
              <div className="workBox">
                <img src={item.img} />
              </div>
              <h1 style={{ color: "#FAF9F6" }}>{item?.heading}</h1>
              <p style={{ color: "#f1f1f1" }}>{item?.para}</p>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Work;
