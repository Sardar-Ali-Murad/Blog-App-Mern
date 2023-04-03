import React from "react";
import Footer from "../componenets/CommonComponents/Footer";
import Hero from "../componenets/CommonComponents/Hero";
import {
  Numbers,
  Work,
  Network,
  Space,
  Feedback,
  LearnWritting,
  Accordion,
} from "../componenets/Home2Components/index";

const About = () => {
  return (
    <div>
      <Hero />
      <Numbers />
      <Work />
      <Network />
      <Space />
      <Feedback />
      <LearnWritting />
      <Accordion />
      <Footer />
    </div>
  );
};

export default About;
