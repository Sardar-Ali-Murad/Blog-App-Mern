import React from "react";
import "./AboutCompanies.css";
import img1 from "../../assets/company1.png";
import img2 from "../../assets/company2.png";
import img3 from "../../assets/company3.png";
import img4 from "../../assets/company4.png";
import img5 from "../../assets/company5.png";

const AboutCompanies = () => {
  return (
    <div className="aboutCompaniesBigMian">
      <div className="aboutCompaniesMain">
        <h1>We are featured on</h1>
        <div className="companiesImages">
          <img src={img1} />
          <img src={img2} />
          <img src={img3} />
          <img src={img4} />
          <img src={img5} />
        </div>
      </div>
    </div>
  );
};

export default AboutCompanies;
