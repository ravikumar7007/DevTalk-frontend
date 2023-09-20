import React, { useState } from "react";
import { connect } from "react-redux";
import { addNewComment } from "../../actions/post";

export const CommentForm = ({ postId, addNewComment }) => {
  const [comment, setComment] = useState({ text: "" });
  const handleSubmit = (e) => {
    e.preventDefault();
    addNewComment(postId, comment);
    setComment({ text: "" });
  };
  return (
    <div className="post-form">
      <div className="bg-primary p">
        <h3>Leave A Comment</h3>
      </div>
      <form className="form my-1" onSubmit={handleSubmit}>
        <textarea
          name="text"
          cols="30"
          rows="5"
          placeholder="Comment on this post"
          onChange={(e) => {
            setComment({ text: e.target.value });
          }}
          value={comment.text}
          required
        ></textarea>
        <input type="submit" className="btn btn-dark my-1" value="Submit" />
      </form>
    </div>
  );
};

const mapStateToProps = (state) => ({});

const mapDispatchToProps = (dispatch) => ({
  addNewComment: (postId, formData) => dispatch(addNewComment(postId, formData)),
});

export default connect(mapStateToProps, mapDispatchToProps)(CommentForm);
