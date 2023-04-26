import React from "react";
import moment from "moment";
import SubComments from "./SubComments";
import axios from "axios";
import { BACK_END_URL } from "../../utils";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import fakeImage from "../../assets/fake.webp";

const CommentItem = ({ comment, start }) => {
  let token = JSON.parse(localStorage.getItem("token"));
  let [subComment, setSubComment] = React.useState("");

  const handleSubComment = async () => {
    if (subComment === "") {
      toast.error("Please Provide the comment", {
        position: toast.POSITION.TOP_RIGHT,
      });
    }
    if (subComment !== "") {
      try {
        await axios.patch(
          `${BACK_END_URL}/comment/updateComment/${comment?._id}`,
          {
            comment: subComment,
          },
          {
            headers: { authorization: `Bearer ${token}` },
          }
        );
        toast.success("Comment is added succussfully", {
          position: toast.POSITION.TOP_RIGHT,
        });
        setSubComment("");
        start();
      } catch (error) {
        toast.error(error?.response?.data?.msg, {
          position: toast.POSITION.TOP_RIGHT,
        });
      }
    }
  };
  return (
    <div>
      <div className="grayLine"></div>

      {/* The Parent Box */}
      <div className="parentBox">
        <div className="commentUserIfoWrapper">
          <img
            src={comment?.user?.image || fakeImage}
            style={{ height: "50px", width: "50px", borderRadius: "50%" }}
          />
          <div>
            <p className="commentUserName" style={{ marginBottom: "7px" }}>
              {comment?.user?.firstName}
            </p>
            <p> {moment(comment?.date).format("DD/MM/YYYY")}</p>
          </div>
        </div>
        <p className="commentMainComment">{comment?.comment}</p>
        <div className="commentReplyFlex">
          <input
            placeholder="Reply"
            className="replyToComment"
            value={subComment}
            onChange={(e) => setSubComment(e.target.value)}
          />
          <button className="CommentReplyButton" onClick={handleSubComment}>
            Reply
          </button>
        </div>
      </div>

      {/* The Line Again */}
      <div className="grayLine"></div>

      {/* The SubComemnts */}

      {comment?.replies
        ?.sort((a, b) => new Date(b?.date) - new Date(a?.date))
        ?.map((singleComment) => {
          return <SubComments singleComment={singleComment} />;
        })}
    </div>
  );
};

export default CommentItem;
