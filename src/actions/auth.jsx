import axios from "axios";
import { sendAlert } from "./alert";
import { regSuccess, regFailed } from "../reducers/authSlice";

export const loadUser=async(dispatch)=>{

}
export const register = (formData) => {
  const body = JSON.stringify(formData);
  return (dispatch) => {
    axios
      .post("/api/users", body, {
        headers: {
          "Content-Type": "application/json",
        },
      })
      .then((res) => {
        dispatch(regSuccess(res.data));
      })
      .catch((err) => {
        const errors = err.response.data.errors;

        if (errors) {
          errors.forEach((err) => {
            dispatch(sendAlert({ msg: err.msg, alertType: "danger" }));
          });
        }
        dispatch(regFailed);
      });
  };
};
