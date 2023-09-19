import React, { useState } from "react";
import { connect } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { addExperience } from "../../actions/profile";

function AddExperience({ addExperience }) {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    company: "",
    title: "",
    location: "",
    from: "",
    to: "",
    current: false,
    description: "",
  });

  const { company, title, location, from, to, current, description } = formData;

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await addExperience(formData);
      navigate("/dashboard");
    } catch (error) {
      console.error(error);
    }
  };
  return (
    <>
      <section className="container">
        <h1 className="large text-primary">Add An Experience</h1>
        <p className="lead">
          <i className="fas fa-code-branch"></i> Add any developer/programming
          positions that you have had in the past
        </p>
        <small>* = required field</small>
        <form className="form" onSubmit={handleSubmit}>
          <div className="form-group">
            <input
              type="text"
              placeholder="* Job Title"
              name="title"
              onChange={handleChange}
              value={title}
              required
            />
          </div>
          <div className="form-group">
            <input
              type="text"
              placeholder="* Company"
              name="company"
              onChange={handleChange}
              value={company}
              required
            />
          </div>
          <div className="form-group">
            <input
              type="text"
              placeholder="Location"
              name="location"
              onChange={handleChange}
              value={location}
            />
          </div>
          <div className="form-group">
            <h4>From Date</h4>
            <input
              type="date"
              name="from"
              onChange={handleChange}
              value={from}
            />
          </div>
          <div className="form-group">
            <p>
              <input
                type="checkbox"
                name="current"
                onChange={() => {
                  setFormData({ ...formData, current: !current });
                }}
                value={current}
              />{" "}
              Current Job
            </p>
          </div>
          {current ? (
            <></>
          ) : (
            <div className="form-group">
              <h4>To Date</h4>
              <input type="date" name="to" onChange={handleChange} value={to} />
            </div>
          )}

          <div className="form-group">
            <textarea
              name="description"
              cols="30"
              rows="5"
              placeholder="Job Description"
              onChange={handleChange}
              value={description}
            ></textarea>
          </div>
          <input type="submit" className="btn btn-primary my-1" />
          <Link className="btn btn-light my-1" to="/dashboard">
            Go Back
          </Link>
        </form>
      </section>
    </>
  );
}
const mapDispatchtoProps = (dispatch) => ({
  addExperience: (props) => dispatch(addExperience(props)),
});

export default connect(null, mapDispatchtoProps)(AddExperience);
