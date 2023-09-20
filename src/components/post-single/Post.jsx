import React, { useEffect } from "react";
import { connect } from "react-redux";
import { Link, useParams } from "react-router-dom";
import { getThePost } from "../../actions/post";
import Spinner from "../layout/Spinner";
import PostItem from "../posts/PostItem";
import CommentForm from "./CommentForm";
import CommentItem from "./CommentItem";

export const Post = ({ getThePost, post: { post, loading } }) => {
  const { id } = useParams();
  useEffect(() => {
    getThePost(id);
  }, [getThePost, id]);

  return (
    <>
      {loading || post === null ? (
        <Spinner />
      ) : (
        <section className="container">
          <Link to="/posts" className="btn">
            Back To Posts
          </Link>

          <PostItem post={post} showAction={false} />

          <CommentForm postId={id} />

          <div className="comments">
            {post.comments.map((comment) => (
              <CommentItem postId={id} key={comment._id} comment={comment} />
            ))}
          </div>
        </section>
      )}
    </>
  );
};

const mapStateToProps = (state) => ({ post: state.post });

const mapDispatchToProps = (dispatch) => ({
  getThePost: (postId) => dispatch(getThePost(postId)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Post);
