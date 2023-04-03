import React from "react";
import "./index.css";
import like from "../../assets/like.png";
import comment from "../../assets/comment.png";
import Up from "../../assets/badgeUp.png";
import Down from "../../assets/badgeDown.png";

import { BsArrowLeft } from "react-icons/bs";
import { BsArrowRight } from "react-icons/bs";

import feed from "../../assets/feedback.png";

const BlogComments = () => {
  return (
    <div className="commentsMain">
      <div className="commentsChipMain">
        <div className="commentBigFlex">
          <div className="commentSmallFlex">
            <img src={like} />
            <p>2.4K</p>
          </div>
          <div className="commentSmallFlex">
            <img src={comment} />
            <p>23</p>
          </div>
        </div>
        <div className="commentBigFlex">
          <img src={Up} />
          <img src={Down} />
        </div>
      </div>
      {/*  */}
      <div className="commnetPreNextContent">
        <p>
          AI in drug development — <br /> towards fully autonomous <br /> drug
          discovery
        </p>
        <p>
          Robots Need to Be Afraid of <br /> Humans Not the Other Way <br />{" "}
          Around
        </p>
      </div>

      <div className="commnetArrows">
        <div className="singleArrows">
          <BsArrowLeft />
          <p>Previous Post</p>
        </div>
        <div className="singleArrows">
          <BsArrowRight />
          <p>Next Post</p>
        </div>
      </div>

      {/*  */}
      <h1 className="commnetsResponse">Total Responses - 4672</h1>

      {/*  */}
      <div className="commentCard">
        <div className="commentWriterFlex">
          <img src={feed} />
          <p className="commentWriterFlexName">Michael Franklin</p>
        </div>
        <p className="commentWriterComment">What are your thoughts?</p>
        <h2 className="commentFurther">Comment</h2>
      </div>
    </div>
  );
};

export default BlogComments;
