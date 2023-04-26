import axios from "axios";
import React from "react";
import { BACK_END_URL } from "../../utils";
import CircularProgress from "@mui/joy/CircularProgress";
import SavedPost from "./SavedPost";
import "./index.css";
import { Box, Pagination } from "@mui/material";

const SavedPosts = () => {
  let token = JSON.parse(localStorage.getItem("token"));
  let [blogs, setBlogs] = React.useState([]);
  let [loading, setLoading] = React.useState(false);
  const getAllSavedBlogs = async () => {
    setLoading(true);
    try {
      let { data } = await axios.get(`${BACK_END_URL}/saveBlog`, {
        headers: {
          authorization: `Bearer ${token}`,
        },
      });
      setBlogs(data?.userSavedBlogs);
    } catch (error) {
      console.log(error?.response?.data?.msg);
    }
    setLoading(false);
  };

  React.useEffect(() => {
    getAllSavedBlogs();
  }, []);

  let totalPages = 4;
  let count = Math.ceil(blogs.length / totalPages);

  let [currentPage, setCurrentPage] = React.useState(1);

  function handlePagination(e, page) {
    setCurrentPage(page);
  }

  if (loading) {
    return <CircularProgress size="lg" />;
  }
  return (
    <div className="savedBlogs">
      <h1 style={{ color: "#f1f1f1" }}>Saved Blogs</h1>
      {blogs.length < 1 ? (
        <p style={{ color: "#f1f1f1" }}>No Saved Blog Yet</p>
      ) : (
        blogs
          ?.slice(
            currentPage * totalPages - totalPages,
            currentPage * totalPages
          )
          ?.map((item) => {
            return (
              <SavedPost
                item={item}
                setBlogs={setBlogs}
                getAllSavedBlogs={getAllSavedBlogs}
              />
            );
          })
      )}
      <Box className="paginationBox">
        <Pagination
          count={count}
          color="secondary"
          value={currentPage}
          onChange={handlePagination}
        />
      </Box>
    </div>
  );
};

export default SavedPosts;
