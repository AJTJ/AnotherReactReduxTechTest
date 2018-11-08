import { combineReducers } from "redux";
import * as login from "./login/index";

const allReducers = {
  ...login.reducer
};

const actions = {
  ...login.actions
};

const reducers = combineReducers(allReducers);

export { reducers, actions };
