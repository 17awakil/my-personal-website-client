import axios from "axios";
import { GET_WELCOME_MESSAGE, WELCOME_MESSAGE_LOADING } from "./types";

export const getWelcomeMessage = () => (dispatch) => {
  dispatch(setWelcomeMessageLoading());
  axios
    .get("https://us-central1-mpw-backend.cloudfunctions.net/app/api/welcome")
    .then((message) => {
      dispatch({ type: GET_WELCOME_MESSAGE, payload: message.data });
    })
    .catch((err) => console.log(err));
};

export const setWelcomeMessageLoading = () => {
  return {
    type: WELCOME_MESSAGE_LOADING,
  };
};
