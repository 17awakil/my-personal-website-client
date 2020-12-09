import { combineReducers } from "redux";
import sectionReducer from "./sectionReducer";
import welcomeMessageReducer from "./welcomeMessageReducer";

export default combineReducers({
  sections: sectionReducer,
  welcomeMessage: welcomeMessageReducer,
});
