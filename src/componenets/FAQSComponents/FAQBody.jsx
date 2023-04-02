// The Home 2 componet Accordion

import React from "react";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import AddIcon from "@mui/icons-material/Add";
import RemoveIcon from "@mui/icons-material/Remove";
import { accordionData } from "../Home2Components/data";
import Button from '@mui/material/Button';
import EastIcon from '@mui/icons-material/East';

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
              <Accordion style={{ marginBottom: "20px" ,background:"#DFF1F0"}}>
                <AccordionSummary
                  expandIcon={<AddIcon style={{ color: "#00AAA1" }} />}
                  aria-controls="panel1a-content"
                  id="panel1a-header"
                >
                  <h1 className="accordionUpperHeading">{item?.head}</h1>
                </AccordionSummary>
                <AccordionDetails style={{background:"#F2F8F7"}}>
                  <p className="accordionSmallText">{item?.para}</p>
                </AccordionDetails>
              </Accordion>
            );
          })}
        </div>
      </div>
      <div className="FAQContent">
        <h1>Can't find an answer to your question?</h1>
        <Button variant="outlined" endIcon={<EastIcon />} style={{width:"170px",marginLeft:"50%",transform:"translateX(-50%)",marginTop:'10px'}}>
        Contact us
      </Button>
      </div>


    </div>
  );
};

export default Accordions;
