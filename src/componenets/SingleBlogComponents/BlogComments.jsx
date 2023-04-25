import React from "react";
import "./index.css";

import { BsArrowLeft } from "react-icons/bs";
import { BsArrowRight } from "react-icons/bs";
import CommentItem from "./CommentItem";
import axios from "axios";
import { BACK_END_URL } from "../../utils";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import fakeImage from "../../assets/fake.webp"

const BlogComments = ({ blogId }) => {
  let user = JSON.parse(localStorage.getItem("user"));
  let [comments, setComments] = React.useState([]);
  let token = JSON.parse(localStorage.getItem("token"));

  let [writeComment, setWriterComment] = React.useState("");

  const start = async () => {
    try {
      let { data } = await axios.get(`${BACK_END_URL}/comment/${blogId}`);
      setComments(data?.blogComments);
    } catch (error) {
      console.log(error.response.data.msg);
    }
  };

  const submitRightComment = async () => {
    if (writeComment === "") {
      toast.error("Plaese Provide the comment", {
        position: toast.POSITION.TOP_RIGHT,
      });
    }
    if (writeComment) {
      try {
        await axios.post(
          `${BACK_END_URL}/comment/${blogId}`,
          { comment: writeComment },
          {
            headers: { authorization: `Bearer ${token}` },
          }
        );
        toast.success("Comment Added Successfully", {
          position: toast.POSITION.TOP_RIGHT,
        });
        setWriterComment("");
        start();
      } catch (error) {
        toast.error(error?.response?.data?.msg, {
          position: toast.POSITION.TOP_RIGHT,
        });
      }
    }
  };

  React.useEffect(() => {
    start();
  }, []);

  return (
    <div className="commentsMain">
      <ToastContainer />
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
          <img
            src={user?.image || fakeImage}
            style={{ height: "70px", width: "70px", borderRadius: "50%" }}
          />
          <p className="commentWriterFlexName">{user?.firstName}</p>
        </div>
        <input
          placeholder="What are your thoughts?"
          className="mainCommentTextField"
          value={writeComment}
          onChange={(e) => setWriterComment(e?.target.value)}
        />
        <h2 className="commentFurther" onClick={submitRightComment}>
          Comment
        </h2>
      </div>
      {comments
        ?.sort((a, b) => new Date(b?.date) - new Date(a?.date))
        ?.map((comment) => {
          return <CommentItem comment={comment} start={start} />;
        })}
    </div>
  );
};

export default BlogComments;
