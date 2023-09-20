import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  posts: [],
  post: null,
  loading: true,
  errors: {},
};

const postSlice = createSlice({
  name: "post",
  initialState,
  reducers: {
    getPosts: (state, action) => {
      return { ...state, posts: action.payload, loading: false };
    },
    getPost: (state, action) => {
      return { ...state, post: action.payload, loading: false };
    },
    addPost: (state, action) => {
      return {
        ...state,
        posts: [action.payload, ...state.posts],
        loading: false,
      };
    },
    deletePost: (state, action) => {
      return {
        ...state,
        posts: state.posts.filter((post) => post._id !== action.payload),
        loading: false,
      };
    },
    postError: (state, action) => {
      return { ...state, errors: action.payload, loading: false };
    },
    updateLikes: (state, action) => {
      const { id, likes } = action.payload;
      const updatedPosts = state.posts.map((post) =>
        post._id === id ? { ...post, likes } : post
      );
      state.posts = updatedPosts;
    },
  },
});

export const {
  getPosts,
  getPost,
  addPost,
  deletePost,
  postError,
  updateLikes,
} = postSlice.actions;
export default postSlice.reducer;
