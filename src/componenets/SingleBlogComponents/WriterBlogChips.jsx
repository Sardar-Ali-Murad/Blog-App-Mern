import React from "react";
import "./index.css";

const WriterBlogChips = ({ chips }) => {
  return (
    <div className="chipsMain">
      {chips.map((chip) => {
        return <div className="singleChip">{chip}</div>;
      })}
    </div>
  );
};

export default WriterBlogChips;
