import axios from "axios";
import { sendAlert } from "./alert";
import { getProfile, profileError } from "../reducers/profileSlice";


export const getCurrentProfile = () => {
  return (dispatch) => {
    axios
      .get("api/profile/me")
      .then((res) => {

        dispatch(getProfile(res.data));
      })
      .catch((err) => {
        return (dispatch) => {
          dispatch(
            profileError({
              msg: err.response.statusText,
              status: err.response.status,
            })
          );
        };
      });
  };
};
