import React from "react";
import "./index.css";
import Add from "../CommonComponents/Add";
import { useSelector } from "react-redux";
import { VscSaveAs } from "react-icons/vsc";
import Tooltip from "@mui/material/Tooltip";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import axios from "axios"
import {BACK_END_URL}  from "../../utils"


const BlogContent = ({blogId}) => {
  let token = JSON.parse(localStorage.getItem("token")); 
   const saveBlog=async ()=>{
    try {
      await axios.get(`${BACK_END_URL}/saveBlog/${blogId}`,
      {
        headers: {
          authorization: `Bearer ${token}`,
        },
      }
      )
      toast.success('The Blog Is Saved Successfully', {
        position: toast.POSITION.TOP_RIGHT
    });
    } catch (error) {
      toast.error(error?.response?.data?.msg, {
        position: toast.POSITION.TOP_RIGHT
    });
    }
  }

  let { singleBlog } = useSelector((state) => state.blog);
  function htmlDecode(content) {
    let e = document.createElement("div");
    e.innerHTML = content;
    return e.childNodes.length === 0 ? "" : e.childNodes[0].nodeValue;
  }

  return (
    <div className="blogContentMain">
      <ToastContainer/>
      <Tooltip title="SaveBlog" style={{ color: "white" }} placement="right-start">
          <VscSaveAs
            style={{
              color: "#FAF9F6",
              fontSize: "30px",
              position: "relative",
              top: "-5px",
              cursor: "pointer",
            }}
            onClick={saveBlog}
          />
        </Tooltip>
      <h1 className="blogContentHeading" style={{ color: "#FAF9F6" }}>{singleBlog?.title}</h1>
      <section
        dangerouslySetInnerHTML={{
          __html: htmlDecode(singleBlog?.description),
        }}
        className="SearchResult-body BlogContentMain BlogContentMainDangerousHTML"
      />

      <div className="blogAdd">
        <Add />
      </div>
    </div>
  );
};

export default BlogContent;
