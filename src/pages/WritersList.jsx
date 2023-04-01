import React from "react";
import "./WritersList.css";
import LightNavbar from "../componenets/CommonComponents/LightNavbar";
import { writers } from "./data";
import RightComponent from "../componenets/CommonComponents/RightComponent";
import Footer from "../componenets/CommonComponents/Footer";
import SingleWriter from "../componenets/CommonComponents/SingleWriter";

const WritersList = () => {
  return (
    <div>
      <LightNavbar signIn={true} getStarted={true} person={false} />
      {/*  */}
      <div className="writersIntroBigMain">
        <div className="writersIntroMain">
          <h1 className="writersList">writers List</h1>
          <p className="writersIntoPara">
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's <br /> standard dummy
            text ever since the 1500s.
          </p>
        </div>
      </div>

      {/*  */}

      <div className="writersListMain">
        <div className="writersListPart1">
          {writers?.map((writer) => {
            return <SingleWriter writer={writer} />;
          })}
        </div>

        <div className="writersListPart2">
          <RightComponent />
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default WritersList;
