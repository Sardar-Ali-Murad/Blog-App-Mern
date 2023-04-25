import React from "react";
import Editor from "./Editor";
import {
  setupUpdateWriter,
  removeAlert,
} from "../../features/writerRequest/writerRequestSlice";
import { useSelector, useDispatch } from "react-redux";
import Alert from "../Alert/WriterRequestAlert";

const WriterDetailForm = () => {
  
  let {
    currentWriterInfo: writer,
    image,
    showAlert,
  } = useSelector((state) => state.writerRequest);

  let { isLoading } = useSelector((state) => state.writerRequest);
  


  let dispatch = useDispatch();
  let [data, setData] = React.useState({
    name: writer?.name,
    age: writer?.age,
    city: writer?.city,
    province: writer?.province,
    country: writer?.country,
    qualifications: writer?.qualifications,
    email: writer?.email,
    contactNumber: writer?.contactNumber,
    designation: writer?.designation,
    facebookId: writer?.facebookId,
    instagramId: writer?.instagramId,
    linkedinId: writer?.linkedinId,
    pinterestId: writer?.pinterestId,
    youtube: writer?.youtube,
    shortBio: writer?.shortBio,
  });
  function htmlDecode(content) {
    let e = document.createElement('div');
    e.innerHTML = content;
    return e.childNodes.length === 0 ? "" : e.childNodes[0].nodeValue;
  }

  let [content, setContent] = React.useState(htmlDecode(writer.description));

  function handleChange(e) {
    setData((pre) => {
      return {
        ...pre,
        [e.target.name]: e.target.value,
      };
    });
  }

  let alert = React.useRef(null);

  function update() {
    let info = { ...data, photo: image, description: content };
    dispatch(setupUpdateWriter(info));
    alert.current.scrollIntoView({ behavior: "smooth" });
    setTimeout(() => {
      dispatch(removeAlert());
    }, 2000);

  }



  return (
    
    <div className="writerDetailFormWrapper" ref={alert}>
         {showAlert && <Alert />}
      <div className="writerDeatilFormGrid">
        <div className="TextFields">
          <p>Name</p>
          <input
            className="textarea writerDetailFormTextField DarkTextField"
            name="name"
            placeholder="Lev Maximov"
            value={data.name}
            onChange={handleChange}
          />
          </div>
        {/*  */}
        <div className="TextFields">
          <p>Age</p>
          <input
            className="textarea writerDetailFormTextField"
            name="age"
            placeholder="36"
            value={data.age}
            onChange={handleChange}
          />
          </div>
          </div>

      <div className="writerDeatilFormGrid">
        <div className="TextFields">
        <p>City</p>
        <select
        className="textarea categoryField writerDetailFormTextField"
        name="city"
            value={data.city}
            onChange={handleChange}
          >
            <option value="Lahore">Lahore</option>
            <option value="SelfImprovement">Self Improvement</option>
            <option value="Technology">Technology</option>
          </select>
          </div>

          <div className="TextFields">
          <p>Province</p>
          <select
          className="textarea categoryField writerDetailFormTextField"
          value={data.province}
          name="province"
          onChange={handleChange}
          >
            <option value="Punjab">Punjab</option>
            <option value="SelfImprovement">Self Improvement</option>
            <option value="Technology">Technology</option>
            </select>
            </div>
      </div>
      
      {/*  */}
      
      <div className="writerDeatilFormGrid">
      <div className="TextFields">
          <p>Country</p>
          <select
            className="textarea categoryField writerDetailFormTextField"
            value={data.country}
            name="country"
            onChange={handleChange}
            >
            <option value="Pakistan">Pakistan</option>
            <option value="SelfImprovement">Self Improvement</option>
            <option value="Technology">Technology</option>
            </select>
            </div>
            <div className="TextFields">
            <p>Qualifications</p>
            <input
            className="textarea writerDetailFormTextField"
            name="qualifications"
            placeholder="Qualifications"
            value={data.qualifications}
            onChange={handleChange}
            />
            </div>
            </div>
            
            {/*  */}
            
            <div className="writerDeatilFormGrid">
        <div className="TextFields">
        <p>Email</p>
        <input
        className="textarea writerDetailFormTextField DarkTextField"
        placeholder="abubakar.0081@yourdimain.com"
        value={data.email}
        name="email"
        onChange={handleChange}
        />
        </div>
        
        <div className="TextFields">
        <p>Contact Number</p>
        <input
        className="textarea writerDetailFormTextField DarkTextField"
        name="contactNumber"
        placeholder="+38 55 555 555"
        value={data.contactNumber}
        onChange={handleChange}
        />
        </div>
        </div>
        
        {/*  */}

      <div className="writerDeatilFormGrid">
        <div className="TextFields">
          <p>Designation (if any)</p>
          <input
            className="textarea writerDetailFormTextField"
            placeholder="Managing Director"
            value={data.designation}
            name="designation"
            onChange={handleChange}
            />
            </div>
            
            <div className="TextFields">
            <p>Facebook ID</p>
            <input
            className="textarea writerDetailFormTextField"
            placeholder="facebook.com/username"
            value={data.facebookId}
            name="facebookId"
            onChange={handleChange}
            />
            </div>
            </div>
            
            {/*  */}
            
            <div className="writerDeatilFormGrid">
            <div className="TextFields">
            <p>Instagram ID</p>
            <input
            className="textarea writerDetailFormTextField"
            placeholder="ID link goes here"
            value={data.instagramId}
            name="instagramId"
            onChange={handleChange}
            />
            </div>
            
            <div className="TextFields">
          <p>LinkedIn ID</p>
          <input
          className="textarea writerDetailFormTextField"
          placeholder="linkedIn.com/username"
          value={data.linkedinId}
          name="linkedinId"
          onChange={handleChange}
          />
          </div>
          </div>
          
          {/*  */}

      <div className="writerDeatilFormGrid">
        <div className="TextFields">
          <p>Pinterest ID</p>
          <input
            className="textarea writerDetailFormTextField"
            placeholder="ID link goes here"
            value={data.pinterestId}
            name="pinterestId"
            onChange={handleChange}
            />
            </div>
            
            <div className="TextFields">
            <p>YouTube</p>
            <input
            className="textarea writerDetailFormTextField"
            placeholder="YouTube.com/username"
            value={data.youtube}
            name="youtube"
            onChange={handleChange}
            />
            </div>
            </div>
            {/*  */}
            <div className="TextFields" style={{ marginTop: "20px" }}>
        <p>Message</p>
        <textarea
          className="textarea"
          style={{ height: "70px", width: "94%" }}
          name="shortBio"
          value={data.shortBio}
          onChange={handleChange}
          ></textarea>
          </div>
      {/*  */}
      
      {/*  */}
      <div style={{ marginTop: "40px" }}>
      <div className="TextFields">
      <p>Description</p>
      <Editor value={content} onChange={setContent} />
      {/* <Editor/> */}
      </div>
      </div>
      {/*  */}
      <div
        className="writerInfoSave"
        style={{ marginTop: "30px", cursor: "pointer",marginTop:"50px" }}
      >
      <button onClick={update}>Save</button>
      </div>
  
    </div>
  );
};

export default WriterDetailForm
