import React, { useState } from "react";
import { connect } from "react-redux";
import { addNewPost } from "../../actions/post";

export const PostForm = ({ addNewPost }) => {
  const [formData, setFormData] = useState({ text: "" });
  const handleSubmit = (e) => {
    e.preventDefault();
    addNewPost(formData);
    setFormData({ text: "" });
  };
  return (
    <div className="post-form">
      <div className="bg-primary p">
        <h3>Say Something...</h3>
      </div>
      <form className="form my-1" onSubmit={handleSubmit}>
        <textarea
          name="text"
          cols="30"
          rows="5"
          placeholder="Create a post"
          required
          value={formData.text}
          onChange={(e) => {
            setFormData({ text: e.target.value });
          }}
        ></textarea>
        <input type="submit" className="btn btn-dark my-1" value="Submit" />
      </form>
    </div>
  );
};

const mapDispatchToProps = (dispatch) => ({
  addNewPost: (formData) => dispatch(addNewPost(formData)),
});

export default connect(null, mapDispatchToProps)(PostForm);
