// WithOut Swipper

import React from "react";
import "./HeroText.css";

let data = [
  {
    head: "Stay curios",
    para: "Lorem Ipsum is simply dummy text of the printing and types industry. Lorem Ipsum has been the industry's standard dummy text eve since the 1500s.",
  },
  {
    head: "Stay curios",
    para: "Lorem Ipsum is simply dummy text of the printing and types industry. Lorem Ipsum has been the industry's standard dummy text eve since the 1500s.",
  },
  {
    head: "Stay curios",
    para: "Lorem Ipsum is simply dummy text of the printing and types industry. Lorem Ipsum has been the industry's standard dummy text eve since the 1500s.",
  },
  {
    head: "Stay curios",
    para: "Lorem Ipsum is simply dummy text of the printing and types industry. Lorem Ipsum has been the industry's standard dummy text eve since the 1500s.",
  },
  {
    head: "Stay curios",
    para: "Lorem Ipsum is simply dummy text of the printing and types industry. Lorem Ipsum has been the industry's standard dummy text eve since the 1500s.",
  },
];

const HeroText = () => {
  let [activeIndex, setActiveIndex] = React.useState(0);
  let [nextActive, setNextActive] = React.useState(false);
  let [preActive, setPreActive] = React.useState(false);

  function next() {
    setNextActive(true);
    setTimeout(() => {
      setNextActive(false);
    }, 2000);
    let dummyIndex = activeIndex + 1;
    if (dummyIndex > data.length - 1) {
      setActiveIndex(0);
    } else {
      setActiveIndex((pre) => pre + 1);
    }
  }

  function pre() {
    setPreActive(true);
    setTimeout(() => {
      setPreActive(false);
    }, 2000);

    let dummyIndex = activeIndex - 1;
    if (dummyIndex < 0) {
      setActiveIndex(data.length - 1);
    } else {
      setActiveIndex((pre) => pre - 1);
    }
  }

  return (
    <div className="FrontHeroMain">
      <div className="rainAnimation">
        <div className="rain"></div>
        <div className="lightining"></div>
      </div>
      <div className="FrontHeroContent">
        <h1 className="heroHead" style={{ color: "#f2f4f8" }}>
          {data[activeIndex].head}
        </h1>
        <p className="heroPara" style={{ color: "#f1f1f1" }}>
          {data[activeIndex].para}
        </p>
      </div>
    </div>
  );
};
export default HeroText;
