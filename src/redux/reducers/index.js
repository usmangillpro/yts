import { combineReducers } from "redux";

import ytsGetReducer from "./ytsGetReducer";
import searchReducer from "./searchReducer";
export default combineReducers({
  ytsGet: ytsGetReducer,
  search: searchReducer,
});
