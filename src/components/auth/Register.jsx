import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";

import { regSuccess, regFailed } from "../../reducers/authSlice";
import { v4 as uuidv4 } from "uuid";
import { setAlert, removeAlert } from "../../reducers/alertSlice";

import axios from "axios";
function Register() {

  const dispatch = useDispatch();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    password2: "",
  });
  const { name, email, password, password2 } = formData;
  function handleChange(e) {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  }
function sendAlert(msg, alertType) {   
      const id = uuidv4();
      dispatch(setAlert({ msg, alertType, id }));
      setTimeout(() => dispatch(removeAlert({ id })), 5000);
    };

  function handleSubmit(e) {
    e.preventDefault();
    if (password !== password2) {
      sendAlert("Password does not same", "danger");

      console.log("Incorrect Password");
    } else {
      const body = JSON.stringify({ name, email, password });
      axios
        .post("/api/users", body, {
          headers: {
            "Content-Type": "application/json",
          },
        })
        .then((res)=>{
          console.log(res.data)
          dispatch(regSuccess(res.data))
        }) 
        .catch((err) => {
          const errors = err.response.data.errors;
          console.log(errors);
          if (errors) {
            errors.forEach((err) => {
              sendAlert(err.msg, "danger");
            });
          }
          dispatch(regFailed);
        });
    }
  }
  return (
    <section className="container">
      <h1 className="large text-primary">Sign Up</h1>
      <p className="lead">
        <i className="fas fa-user"></i> Create Your Account
      </p>
      <form className="form" onSubmit={handleSubmit}>
        <div className="form-group">
          <input
            type="text"
            placeholder="Name"
            name="name"
            value={name}
            onChange={handleChange}
           
          />
        </div>
        <div className="form-group">
          <input
            type="email"
            placeholder="Email Address"
            name="email"
            value={email}
            onChange={handleChange}

          />
          <small className="form-text">
            This site uses Gravatar so if you want a profile image, use a
            Gravatar email
          </small>
        </div>
        <div className="form-group">
          <input
            type="password"
            placeholder="Password"
            name="password"
            minLength="6"
            value={password}
            onChange={handleChange}
          />
        </div>
        <div className="form-group">
          <input
            type="password"
            placeholder="Confirm Password"
            name="password2"
            minLength="6"
            value={password2}
            onChange={handleChange}
          />
        </div>
        <input type="submit" className="btn btn-primary" value="Register" />
      </form>
      <p className="my-1">
        Already have an account? <Link to="/login">Sign In</Link>
      </p>
    </section>
  );
}

export default Register;
