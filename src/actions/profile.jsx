import axios from "axios";
import { getProfile, profileError } from "../reducers/profileSlice";
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



