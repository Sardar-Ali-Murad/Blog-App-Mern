import React from "react";
import "./index.css";
// import Editor from "./Editor";
import {setupCreateBlog,removeAlert}   from "../../features/blog/blogSlice"
import { useDispatch ,useSelector} from "react-redux";
import Alert from "../Alert/blogAlert"

const WriteBody = () => {
  let {showAlert}=useSelector((state)=>state.blog)
  let dispatch=useDispatch()
  let alert=React.useRef(null)
  let [content,setContent]=React.useState("")
  let [data,setData]=React.useState({
    title:"",
    subTitle:"",
    category:""
  })

  function handleChange(e){
     setData((pre)=>{
      return {
        ...pre,
        [e.target.name]:e.target.value
      }
     })
  }


  function publish(){
      let info={...data,content}
      dispatch(setupCreateBlog(info))
      alert.current.scrollIntoView({behavior:"smooth"})
      setTimeout(()=>{
        dispatch(removeAlert())
      },3000)
  }

  
  return (
    <div className="writeMain" ref={alert}>
      {
        showAlert && <Alert/>
      }
      {/*  */}
      <div className="registerTextFieldsPart1">
        <div className="TextFields">
          <p>Title</p>
          <input className="textarea" name="title"  value={data.title} onChange={handleChange}/>
        </div>
        <div className="TextFields">
          <p>Subtitle</p>
          <input className="textarea" name="subTitle" value={data.subTitle} onChange={handleChange}/>
        </div>
      </div>

      {/*  */}
      <div style={{ marginTop: "40px" }}>
        <div className="TextFields">
          <p>Description</p>
          {/* <Editor  content={content} setContent={setContent}/> */}
        </div>
      </div>

      <div className="registerTextFieldsPart1" style={{ marginTop: "40px" }}>
        <div className="TextFields">
          <p>Choose Category</p>
          <select className="textarea categoryField" name="category" value={data.category} onChange={handleChange}>
            <option value=""></option>
            <option value="Travel">Travel</option>
            <option value="lifestyle">lifestyle</option>
            <option value="fashion">fashion</option>
            <option value="dataScience">dataScience</option>
            <option value="business">business</option>
            <option value="design">design</option>
            <option value="health">health</option>
            <option value="food">food</option>
            <option value="art">art</option>
          </select>
        </div>

        <div className="upload TextFields">
          <p>Upload Media</p>
          <div className="uploadTextArea"></div>
          <button className="uploadBtn">Upload</button>
        </div>
      </div>
      <div className="publishBtnWrapper">
        <button className="authBlueBtn PublishBtn" onClick={publish}>Publish</button>
      </div>
      {/*  */}
    </div>
  );
};

export default WriteBody;
