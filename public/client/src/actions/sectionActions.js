import axios from "axios";
import { GET_SECTIONS, SECTIONS_LOADING } from "./types";
export const getSections = () => (dispatch) => {
  dispatch(setSectionsLoading());
  axios
    .get("https://us-central1-mpw-backend.cloudfunctions.net/app/api/resume")
    .then((sections) => {
      dispatch({ type: GET_SECTIONS, payload: sections.data });
    })
    .catch((err) => console.log(err));
};

export const setSectionsLoading = () => {
  return {
    type: SECTIONS_LOADING,
  };
};
