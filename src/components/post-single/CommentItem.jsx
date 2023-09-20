import React from "react";
import { connect } from "react-redux";
import { removeComment } from "../../actions/post";
import Moment from "react-moment";

export const CommentItem = ({
  comment: { _id, user, name, avatar, text, date },
  auth,
  postId,
  removeComment,
}) => {
  return (
    <div className="post bg-white p-1 my-1">
      <div>
        <a href="profile.html">
          <img className="round-img" src={avatar} alt="" />
          <h4>{name}</h4>
        </a>
      </div>
      <div>
        <p className="my-1">{text}</p>
        <p className="post-date">
          Posted on <Moment format="DD/MM/YYYY">date</Moment>
        </p>
        {user === auth.user._id && (
          <button
            type="button"
            className="btn btn-danger"
            onClick={(e) => {
              removeComment(postId, _id);
            }}
          >
            <i className="fas fa-times"></i>
          </button>
        )}
      </div>
    </div>
  );
};

const mapStateToProps = (state) => ({ auth: state.auth });

const mapDispatchToProps = (dispatch) => ({
  removeComment: (postId, commentId) =>
    dispatch(removeComment(postId, commentId)),
});

export default connect(mapStateToProps, mapDispatchToProps)(CommentItem);
