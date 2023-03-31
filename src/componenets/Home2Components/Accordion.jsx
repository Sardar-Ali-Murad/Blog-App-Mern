import React from "react";
import "./Accordion.css";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import AddIcon from "@mui/icons-material/Add";
import RemoveIcon from "@mui/icons-material/Remove";
import { accordionData } from "./data";

const Accordions = () => {
  return (
    <div className="accordionBigMain">
      <div className="accordionMain">
        <h1 className="accordionHeading">Frequently asked question</h1>
        <p className="accordionBio">
          Did you come here for something in particular or just general
          Riker-bashing? And blowing
        </p>

        <div className="accordionWrapper">
          {/*  */}
          {accordionData?.map((item) => {
            return (
              <Accordion style={{ marginBottom: "20px" }}>
                <AccordionSummary
                  expandIcon={<AddIcon style={{ color: "#00AAA1" }} />}
                  aria-controls="panel1a-content"
                  id="panel1a-header"
                >
                  <h1 className="accordionUpperHeading">{item?.head}</h1>
                </AccordionSummary>
                <AccordionDetails>
                  <p className="accordionSmallText">{item?.para}</p>
                </AccordionDetails>
              </Accordion>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Accordions;
