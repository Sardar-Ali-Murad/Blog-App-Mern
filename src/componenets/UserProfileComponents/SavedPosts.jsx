import axios from "axios";
import React from "react";
import { BACK_END_URL } from "../../utils";
import CircularProgress from '@mui/joy/CircularProgress';
import SavedPost from "./SavedPost"
import "./index.css"

const SavedPosts = () => {
  let token = JSON.parse(localStorage.getItem("token"));
  let [blogs,setBlogs]=React.useState([])
  let [loading,setLoading]=React.useState(false)
  const getAllSavedBlogs = async () => {
    setLoading(true)
    try {
      let { data } = await axios.get(`${BACK_END_URL}/saveBlog`, {
        headers: {
          authorization: `Bearer ${token}`,
        },
      });
      setBlogs(data?.userSavedBlogs)
    } catch (error) {
      console.log(error?.response?.data?.msg);
    }
    setLoading(false)
  };

  React.useEffect(() => {
    getAllSavedBlogs();
  }, []);


  if(loading){
      return <CircularProgress size="lg"/>
  }
  return (
    <div className="savedBlogs">
      <h1>Saved Blogs</h1>
      {blogs.length<1?<p>No Saved Blog Yet</p>:
        blogs?.map((item)=>{
          return <SavedPost item={item} setBlogs={setBlogs} getAllSavedBlogs={getAllSavedBlogs}/>
        })
      }
    </div>
  );
};

export default SavedPosts;
