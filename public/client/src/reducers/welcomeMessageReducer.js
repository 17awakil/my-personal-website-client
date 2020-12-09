import { GET_WELCOME_MESSAGE, WELCOME_MESSAGE_LOADING } from "../actions/types";
const initialState = {
  message: "",
  loading: false,
};

export default function (state = initialState, action) {
  switch (action.type) {
    case GET_WELCOME_MESSAGE:
      return {
        ...state,
        message: action.payload,
        loading: false,
      };
    case WELCOME_MESSAGE_LOADING:
      return {
        ...state,
        loading: true,
      };
    default:
      return state;
  }
}
