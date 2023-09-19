import axios from "axios";
import {
  getProfile,
  profileError,
  updateProfile,
} from "../reducers/profileSlice";
import { sendAlert } from "./alert";

export const getCurrentProfile = () => {
  return (dispatch) => {
    axios
      .get("api/profile/me")
      .then((res) => {
        dispatch(getProfile(res.data));
      })
      .catch((err) => {
        dispatch(
          profileError({
            msg: err.response.statusText,
            status: err.response.status,
          })
        );
      });
  };
};

export const createProfile =
  (formData, editing = false) =>
  async (dispatch) => {
    const header = {
      headers: {
        "Content-Type": "application/json",
      },
    };

    await axios
      .post("api/profile", formData, header)
      .then((res) => {
        dispatch(getProfile(res.data));
        dispatch(
          sendAlert({
            msg: editing ? "Profile Updated" : "Profile Created",
            alertType: "success",
          })
        );
      })
      .catch((err) => {
        console.log(err.response);
        dispatch(
          profileError({
            msg: err.response.statusText,
            status: err.response.status,
          })
        );

        const errors = err.response.data.errors;
        if (errors) {
          errors.forEach((err) =>
            dispatch(sendAlert({ msg: err.msg, alertType: "danger" }))
          );
        }
        throw errors;
      });
  };

export const addExperience = (formData) => async (dispatch) => {
  const header = {
    headers: {
      "Content-Type": "application/json",
    },
  };
  await axios
    .put("api/profile/experience", formData, header)
    .then((res) => {
      dispatch(updateProfile(res.data));
      dispatch(
        sendAlert({
          msg: "Experience Added",
          alertType: "success",
        })
      );
    })
    .catch((err) => {
      dispatch(
        profileError({
          msg: err.response.statusText,
          status: err.response.status,
        })
      );
      const errors = err.response.data.errors;
      if (errors) {
        errors.forEach((err) =>
          dispatch(sendAlert({ msg: err.msg, alertType: "danger" }))
        );
      }
      throw errors;
    });
};

export const addEducation = (formData) => async (dispatch) => {
  const header = {
    headers: {
      "Content-Type": "application/json",
    },
  };
  await axios
    .put("api/profile/education", formData, header)
    .then((res) => {
      dispatch(updateProfile(res.data));
      dispatch(
        sendAlert({
          msg: "Education Added",
          alertType: "success",
        })
      );
    })
    .catch((err) => {
      dispatch(
        profileError({
          msg: err.response.statusText,
          status: err.response.status,
        })
      );
      const errors = err.response.data.errors;
      if (errors) {
        errors.forEach((err) =>
          dispatch(sendAlert({ msg: err.msg, alertType: "danger" }))
        );
      }
      throw errors;
    });
};
