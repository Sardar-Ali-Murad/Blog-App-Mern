import React from "react";
import moment from "moment";
import fakeImage from "../../assets/fake.webp"


const SubComments = ({ singleComment }) => {
  return (
    <div>
      <div className="subCommentMain">
        <div className="commentUserIfoWrapper">
          <img
            src={singleComment?.user?.image || fakeImage}
            style={{ height: "50px", width: "50px", borderRadius: "50%" }}
          />
          <div>
            <p className="commentUserName">{singleComment?.user?.name}</p>
            <p> {moment(singleComment?.date).format("DD/MM/YYYY")}</p>
          </div>
        </div>
        <p className="commentMainComment">{singleComment?.comment}</p>
        <div className="grayLine"></div>
      </div>
    </div>
  );
};

export default SubComments;
