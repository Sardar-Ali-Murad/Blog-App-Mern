import React from "react";
import "./index.css";

const WriterBlogChips = ({ chips }) => {
  return (
    <div className="chipsMain">
      {chips.map((chip, i) => {
        return (
          <div className="singleChip" key={i}>
            {chip}
          </div>
        );
      })}
    </div>
  );
};

export default WriterBlogChips;
