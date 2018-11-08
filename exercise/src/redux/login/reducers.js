import * as constants from "./constants";

const defaultState = {
  loggedIn: false
};

const loginReducer = (state = defaultState, action) => {
  switch (action.type) {
    case constants.login:
      return {
        ...state,
        loggedIn: !state.loggedIn
      };
    default:
      return state;
  }
};

export default {
  loginReducer
};
