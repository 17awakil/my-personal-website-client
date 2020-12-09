import { GET_SECTIONS, SECTIONS_LOADING } from "../actions/types";
const initialState = {
  items: [],
  loading: false,
};

export default function (state = initialState, action) {
  switch (action.type) {
    case GET_SECTIONS:
      return {
        ...state,
        items: action.payload,
        loading: false,
      };
    case SECTIONS_LOADING:
      return {
        ...state,
        loading: true,
      };
    default:
      return state;
  }
}
