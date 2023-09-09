// rootReducer.js
import { combineReducers } from "redux";
import favoriteReducer from "./reducers/favoriteReducer";

const rootReducer = combineReducers({
  favorite: favoriteReducer,
  // other reducers...
});

export default rootReducer;
