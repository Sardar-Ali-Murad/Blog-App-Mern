import React from "react";
import { FaFacebookF } from "react-icons/fa";
import { TbVectorBezierCircle } from "react-icons/tb";
import { IoLogoInstagram } from "react-icons/io";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

const SingleEnd = () => {
  let { singleBlog } = useSelector((state) => state.blog);

  return (
    <div>
      <div className="singleWritterWrapper">
        <Link to={`/WriterPublicProfile/${singleBlog?.writer?._id}`}>
          <img
            src={singleBlog?.writer?.photo}
            style={{ height: "130px", width: "130px", borderRadius: "50%" }}
          />
        </Link>
        <div className="writtersContent">
          <div>
            <p className="writterName">{singleBlog?.writer?.name}</p>
            <p className="writterBio">{singleBlog?.writer?.purpose}</p>
            <p className="writterInfo">{singleBlog?.writer?.shortBio}</p>
          </div>
          <div className="writtersIcons">
            <div
              className="rightComponentWritersIcons active"
              style={{ color: "white" }}
            >
              <FaFacebookF style={{ color: "#FAF9F6" }} />
            </div>
            <div className="rightComponentWritersIcons">
              <TbVectorBezierCircle style={{ color: "#FAF9F6" }} />
            </div>
            <div className="rightComponentWritersIcons">
              <IoLogoInstagram style={{ color: "#FAF9F6" }} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SingleEnd;
