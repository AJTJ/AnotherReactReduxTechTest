import { combineReducers } from "redux";
import * as login from "./login/index";
import * as users from "./users/index";

const allReducers = {
  ...login.reducer,
  ...users.reducer
};

const actions = {
  ...login.actions,
  ...users.actions
};

const reducers = combineReducers(allReducers);

export { reducers, actions };
