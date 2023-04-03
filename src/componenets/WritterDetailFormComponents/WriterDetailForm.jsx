import React from "react";
import Editor from "./Editor"

const WriterDetailForm = () => {
  return (
    <div className="writerDetailFormWrapper">
      {/*  */}
      <div className="writerDeatilFormGrid">
        <div className="TextFields">
          <p>Name</p>
          <input
            className="textarea writerDetailFormTextField DarkTextField"
            type="password"
            name="password"
            placeholder="Lev Maximov"
            // value={data.password}
            // onChange={handleChange}
          />
        </div>
        {/*  */}
        <div className="TextFields">
          <p>Age</p>
          <input
            className="textarea writerDetailFormTextField"
            type="password"
            name="password"
            placeholder="36"
            // value={data.password}
            // onChange={handleChange}
          />
        </div>
      </div>
      {/*  */}

      <div className="writerDeatilFormGrid">
        <div className="TextFields">
          <p>City</p>
          <select
            className="textarea categoryField writerDetailFormTextField"
            name="categories"
            // value={data.categories}
            // onChange={handleChange}
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
            name="categories"
            // value={data.categories}
            // onChange={handleChange}
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
            name="categories"
            // value={data.categories}
            // onChange={handleChange}
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
            type="password"
            name="password"
            placeholder="Qualifications"
            // value={data.password}
            // onChange={handleChange}
          />
        </div>
      </div>

      {/*  */}

      <div className="writerDeatilFormGrid">
        <div className="TextFields">
          <p>Email</p>
          <input
            className="textarea writerDetailFormTextField DarkTextField"
            type="password"
            name="password"
            placeholder="abubakar.0081@yourdimain.com "
            // value={data.password}
            // onChange={handleChange}
          />
        </div>

        <div className="TextFields">
          <p>Contact Number</p>
          <input
            className="textarea writerDetailFormTextField DarkTextField"
            type="password"
            name="password"
            placeholder="+38 55 555 555"
            // value={data.password}
            // onChange={handleChange}
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
            type="password"
            name="password"
            // value={data.password}
            // onChange={handleChange}
          />
        </div>

        <div className="TextFields">
          <p>Facebook ID</p>
          <input
            className="textarea writerDetailFormTextField"
            type="password"
            name="password"
            placeholder="facebook.com/username"
            // value={data.password}
            // onChange={handleChange}
          />
        </div>
      </div>

      {/*  */}

      <div className="writerDeatilFormGrid">
        <div className="TextFields">
          <p>Instagram ID</p>
          <input
            className="textarea writerDetailFormTextField"
            type="password"
            name="password"
            placeholder="ID link goes here"
            // value={data.password}
            // onChange={handleChange}
          />
        </div>

        <div className="TextFields">
          <p>LinkedIn ID</p>
          <input
            className="textarea writerDetailFormTextField"
            type="password"
            name="password"
            placeholder="linkedIn.com/username"
            // value={data.password}
            // onChange={handleChange}
          />
        </div>
      </div>

      {/*  */}

      <div className="writerDeatilFormGrid">
        <div className="TextFields">
          <p>Pinterest ID</p>
          <input
            className="textarea writerDetailFormTextField"
            type="password"
            name="password"
            placeholder="ID link goes here"
            // value={data.password}
            // onChange={handleChange}
          />
        </div>

        <div className="TextFields">
          <p>YouTube</p>
          <input
            className="textarea writerDetailFormTextField"
            type="password"
            name="password"
            placeholder="YouTube.com/username"
            // value={data.password}
            // onChange={handleChange}
          />
        </div>
      </div>
      {/*  */}
      <div className="TextFields" style={{marginTop:'20px'}}>
        <p>Message</p>
        <textarea
          className="textarea"
          type="password"
          style={{ height: "70px",width:"94%" }}
          name="password"
          // value={data.password}
          // onChange={handleChange}
        ></textarea>
      </div>
      {/*  */}

      {/*  */}
      <div style={{ marginTop: "40px" }}>
        <div className="TextFields">
          <p>Description</p>
          <Editor />
        </div>
      </div>
      {/*  */}
      <div className="writerInfoSave">
         <button>Save</button>
      </div>
    </div>
  );
};

export default WriterDetailForm;
