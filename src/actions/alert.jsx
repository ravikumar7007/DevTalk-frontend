import { v4 as uuidv4 } from "uuid";
import { setAlert, removeAlert } from "../reducers/alertSlice";

export const sendAlert = (props) => {
  const id = uuidv4();
  return (dispatch) => {
    dispatch(setAlert({ ...props, id }));
    setTimeout(() => dispatch(removeAlert({ id })), 5000);
  };
};
