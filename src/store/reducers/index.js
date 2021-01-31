import { combineReducers } from "redux";
import currentRepos from "./currentRepos";
import recentRepos from "./recentRepos";

export default combineReducers({
  currentRepos,
  recentRepos,
});
