import React from "react";
import { BACK_END_URL } from "./utils";
import axios from "axios";
import parse from "html-react-parser";
import { render } from "react-dom";
import ReactHtmlParser from "react-html-parser";

const Testing = () => {
  let [blogs, setBlogs] = React.useState([]);
  React.useEffect(() => {
    let start = async () => {
      let { data } = await axios.get(`${BACK_END_URL}/blog`);
      setBlogs(data.Blogs);
    };
    start();
  }, []);

 function htmlDecode(content) {
    let e = document.createElement('div');
    e.innerHTML = content;
    return e.childNodes.length === 0 ? "" : e.childNodes[0].nodeValue;
  }

  return (
    <div>
      {blogs.map((item) => {
        return (
          <div>
            <h1>{item.title}</h1>
            <h1>{item.subTitle}</h1>
            {/* <div>{ReactHtmlParser(item.description)}</div> */}
            {/* <div className="content" dangerouslySetInnerHTML={{__html:item.description}} /> */}
            {/* <div dangerouslySetInnerHTML={{ __html:item.description  }} /> */}
            <section
              dangerouslySetInnerHTML={{ __html: htmlDecode(item.description) }}
              className="SearchResult-body"
            />
          </div>
        );
      })}
    </div>
  );
};

export default Testing;
