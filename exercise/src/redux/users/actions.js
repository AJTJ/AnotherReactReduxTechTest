import * as constants from "./constants";

const addUsers = users => ({
  type: constants.addUsers,
  payload: users
});

export default {
  addUsers
};
