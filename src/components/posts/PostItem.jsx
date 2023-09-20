import React from "react";
import Moment from "react-moment";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { addLike, removeLike, removePost } from "../../actions/post";
function PostItem({
  auth,
  post: { _id, user, text, name, avatar, likes, comments, date },
  addLike,
  removeLike,removePost
}) {
  return (
    <div className="post bg-white p-1 my-1">
      <div>
        <Link to={`/profile/${user}`}>
          <img className="round-img" src={avatar} alt="profile" />
          <h4>{name}</h4>
        </Link>
      </div>
      <div>
        <p className="my-1">{text}</p>
        <p className="post-date">
          Posted on <Moment format="DD/MM/YYYY">{date}</Moment>{" "}
        </p>
        <button
          type="button"
          className="btn btn-light"
          onClick={() => {
            addLike(_id);
          }}
        >
          <i className="fas fa-thumbs-up"></i>
          <span> {likes.length > 0 && likes.length}</span>
        </button>
        <button
          type="button"
          className="btn btn-light"
          onClick={() => {
            removeLike(_id);
          }}
        >
          <i className="fas fa-thumbs-down"></i>
        </button>
        <Link href="post.html" className="btn btn-primary">
          Discussion{" "}
          {comments.length > 0 && (
            <span className="comment-count">{comments.length}</span>
          )}
        </Link>
        {user === auth.user._id && (
          <button type="button" className="btn btn-danger" onClick={()=>{removePost(_id)}}>
            <i className="fas fa-times"></i>
          </button>
        )}
      </div>
    </div>
  );
}
const mapState = (state) => ({ auth: state.auth });
const mapDispatch = (dispatch) => ({
  addLike: (id) => dispatch(addLike(id)),
  removeLike: (id) => dispatch(removeLike(id)),
  removePost:(id)=>dispatch(removePost(id))
});
export default connect(mapState, mapDispatch)(PostItem);
