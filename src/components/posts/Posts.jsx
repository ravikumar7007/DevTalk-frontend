import React, { useEffect } from "react";
import { connect } from "react-redux";
import { getAllPosts } from "../../actions/post";
import Spinner from "../layout/Spinner";
import PostItem from "./PostItem";
import PostForm from "./PostForm";

export const Posts = ({ post: { posts, loading }, getAllPosts }) => {
  useEffect(() => {
    getAllPosts();
  }, [getAllPosts]);

  return (
    <>
      {loading ? (
        <Spinner />
      ) : (
        <>
          <div className="container">
            <h1 className="large text-primary">Posts</h1>
            <p className="lead">
              <i className="fas fa-user"></i>&nbsp; Welcome to the community!
            </p>
            <PostForm />
            <div className="posts">
              {posts &&
                posts.map((post) => (
                  <PostItem post={post} key={post._id} showAction={true} />
                ))}
            </div>
          </div>
        </>
      )}
    </>
  );
};

const mapStateToProps = (state) => ({ post: state.post });

const mapDispatchToProps = (dispatch) => ({
  getAllPosts: () => dispatch(getAllPosts()),
});

export default connect(mapStateToProps, mapDispatchToProps)(Posts);
