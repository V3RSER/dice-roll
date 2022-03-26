import { combineReducers } from "redux";

import { default as dice } from "./dice";
import { default as view } from "./view";

const rootReducer = combineReducers({
  view,
  dice,
});

export default rootReducer;
