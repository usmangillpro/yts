import { combineReducers } from "redux";

import detailsReducer from "./detailsReducer";
import ytsGetReducer from "./ytsGetReducer";
import popularReducer from "./popularReducer";
import searchReducer from "./searchReducer";
import upcomingReducer from "./upcomingReducer";
import suggestionsReducer from "./suggestionsReducer";
import commentsReducer from "./commentsReducer";

export default combineReducers({
  ytsGet: ytsGetReducer,
  search: searchReducer,
  details: detailsReducer,
  popular: popularReducer,
  upcoming: upcomingReducer,
  suggestions: suggestionsReducer,
  comments: commentsReducer,
});
