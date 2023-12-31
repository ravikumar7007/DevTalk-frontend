import axios from "axios";
import { sendAlert } from "./alert";
import {
  regSuccess,
  regFailed,
  userLoaded,
  authError,
  loggedIn,
  loggedOut,
} from "../reducers/authSlice";
import setAuthToken from "../utils/setAuthToken";
import { clearProfile } from "../reducers/profileSlice";

export const loadUser = async (dispatch) => {
  const token = localStorage.getItem("token");
  if (token) {
    setAuthToken(token);

    try {
      const res = await axios.get("/api/auth");
      dispatch(userLoaded(res.data));
    } catch (err) {
      dispatch(authError());
    }
  } else {
    dispatch(authError());
  }
};
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
        dispatch(loadUser);
      })

      .catch((err) => {
        const errors = err.response.data.errors;

        if (errors) {
          errors.forEach((err) => {
            dispatch(sendAlert({ msg: err.msg, alertType: "danger" }));
          });
        }
        dispatch(regFailed());
      });
  };
};

export const login = (formData) => {
  const body = JSON.stringify(formData);
  return (dispatch) => {
    axios
      .post("/api/auth", body, {
        headers: {
          "Content-Type": "application/json",
        },
      })
      .then((res) => {
        dispatch(loggedIn(res.data));
        dispatch(loadUser);
      })

      .catch((err) => {
        const errors = err.response.data.errors;

        if (errors) {
          errors.forEach((err) => {
            dispatch(sendAlert({ msg: err.msg, alertType: "danger" }));
          });
        }
        dispatch(authError());
      });
  };
};

export const logout = (dispatch) => {
  dispatch(loggedOut());
  dispatch(clearProfile());
};
