import React, { useState } from "react";
import { connect } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { addEducation } from "../../actions/profile";

function AddEducation({ addEducation }) {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    school: "",
    degree: "",
    fieldofstudy: "",
    from: "",
    to: "",
    current: false,
    description: "",
  });

  const { school, degree, fieldofstudy, from, to, description, current } =
    formData;

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await addEducation(formData);
      navigate("/dashboard");
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <>
      <section className="container">
        <h1 className="large text-primary">Add Your Education</h1>
        <p className="lead">
          <i className="fas fa-graduation-cap"></i> Add any school, bootcamp,
          etc that you have attended
        </p>
        <small>* = required field</small>
        <form className="form" onSubmit={handleSubmit}>
          <div className="form-group">
            <input
              type="text"
              placeholder="* School or Bootcamp"
              name="school"
              onChange={handleChange}
              value={school}
              required
            />
          </div>
          <div className="form-group">
            <input
              type="text"
              placeholder="* Degree or Certificate"
              name="degree"
              onChange={handleChange}
              value={degree}
              required
            />
          </div>
          <div className="form-group">
            <input
              type="text"
              placeholder="Field Of Study"
              name="fieldofstudy"
              onChange={handleChange}
              value={fieldofstudy}
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
                onChange={() => setFormData({ ...formData, current: !current })}
                value={current}
              />{" "}
              Current School or Bootcamp
            </p>
          </div>
          {!current && (
            <>
              <div className="form-group">
                <h4>To Date</h4>
                <input
                  type="date"
                  name="to"
                  onChange={handleChange}
                  value={to}
                />
              </div>
            </>
          )}

          <div className="form-group">
            <textarea
              name="description"
              cols="30"
              rows="5"
              placeholder="Program Description"
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
  addEducation: (props) => dispatch(addEducation(props)),
});

export default connect(null, mapDispatchtoProps)(AddEducation);
