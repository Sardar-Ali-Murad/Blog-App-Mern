import axios from "axios";
import { BACK_END_URL } from "../../utils";

export const createBlog = async (blog, thunkAPI) => {
  let token = JSON.parse(localStorage.getItem("token"));
  try {
    let props = await axios.post(
      `${BACK_END_URL}/blog`,
      {
        title: blog.title,
        subTitle: blog.subTitle,
        description: blog.content,
        category: blog.category,
      },
      {
        headers: {
          authorization: `Bearer ${token}`,
        },
      }
    );
    return props.data;
  } catch (error) {
    return thunkAPI.rejectWithValue(error.response.data.msg);
  }
};
