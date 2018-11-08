import * as constants from "./constants";

const defaultState = {
  users: undefined
};

const usersReducer = (state = defaultState, action) => {
  switch (action.type) {
    case constants.addUsers:
      return {
        ...state,
        users: action.payload.result
      };
    default:
      return state;
  }
};

export default {
  usersReducer
};
