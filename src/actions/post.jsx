import axios from "axios";
import {
  addPost,
  deletePost,
  getPost,
  getPosts,
  postError,
  updateLikes,
} from "../reducers/postSlice";
import { sendAlert } from "./alert";

export const getAllPosts = () => async (dispatch) => {
  try {
    const res = await axios.get("/api/posts/");
    dispatch(getPosts(res.data));
  } catch (err) {
    dispatch(
      postError({
        msg: err.response.statusText,
        status: err.response.status,
      })
    );
  }
};
export const getThePost = (postId) => async (dispatch) => {
  try {
    const res = await axios.get(`/api/posts/${postId}`);
    
    dispatch(getPost(res.data));
  } catch (err) {
    dispatch(
      postError({
        msg: err.response.statusText,
        status: err.response.status,
      })
    );
  }
};

export const addLike = (postId) => async (dispatch) => {
  try {
    const res = await axios.put(`/api/posts/like/${postId}`);
    dispatch(updateLikes({ id: postId, likes: res.data }));
  } catch (err) {
    dispatch(
      postError({
        msg: err.response.statusText,
        status: err.response.status,
      })
    );
  }
};

export const removeLike = (postId) => async (dispatch) => {
  try {
    const res = await axios.put(`/api/posts/unlike/${postId}`);
    dispatch(updateLikes({ id: postId, likes: res.data }));
  } catch (err) {
    dispatch(
      postError({
        msg: err.response.statusText,
        status: err.response.status,
      })
    );
  }
};

export const removePost = (postId) => async (dispatch) => {
  try {
    const res = await axios.delete(`/api/posts/${postId}`);
    dispatch(deletePost(postId));
    dispatch(sendAlert({ msg: res.data.msg, alertType: "success" }));
  } catch (err) {
    dispatch(
      postError({
        msg: err.response.statusText,
        status: err.response.status,
      })
    );
  }
};

export const addNewPost = (formData) => async (dispatch) => {
  const config = {
    headers: {
      "Content-Type": "application/json",
    },
  };

  const sendData = JSON.stringify(formData);

  try {
    const res = await axios.post("/api/posts/", sendData, config);
    dispatch(addPost(res.data));
    dispatch(sendAlert({ msg: "Post Added", alertType: "success" }));
  } catch (err) {
    dispatch(
      postError({
        msg: err.response.statusText,
        status: err.response.status,
      })
    );
  }
};
