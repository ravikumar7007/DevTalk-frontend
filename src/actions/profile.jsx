import axios from "axios";
import {
  clearProfile,
  getProfile,
  profileError,
  updateProfile,
} from "../reducers/profileSlice";
import { sendAlert } from "./alert";
import { accountDeleted } from "../reducers/authSlice";

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

// Delete Experience
export const deleteExperience = (id) => async (dispatch) => {
  try {
    const res = await axios.delete(`/api/profile/experience/${id}`);
    await dispatch(updateProfile(res.data));
    dispatch(
      sendAlert({
        msg: "Experience Deleted",
        alertType: "success",
      })
    );
  } catch (err) {
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
  }
};

// Delete Education
export const deleteEducation = (id) => async (dispatch) => {
  try {
    const res = await axios.delete(`/api/profile/education/${id}`);
    await dispatch(updateProfile(res.data));
    dispatch(
      sendAlert({
        msg: "Education Deleted",
        alertType: "success",
      })
    );
  } catch (err) {
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
  }
};

//Delete Account

export const deleteAccount = () => async (dispatch) => {
  if (window.confirm("Are you sure? This action can't be undone!")) {
    try {
      const res = await axios.delete(`/api/profile/`);
      await dispatch(clearProfile());
      dispatch(accountDeleted());
      dispatch(
        sendAlert({
          msg: "Account Deleted",
          alertType: "success",
        })
      );
      console.log(res)
    } catch (err) {
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
    }
  }
};
