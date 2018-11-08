import React from "react";
import Button from "./Button";

import PropTypes from "prop-types";

const HomeContent = props => {
  let { changeLogin, loggedIn } = props;
  return (
    <div>
      <Button onClick={changeLogin}>{loggedIn ? "Logout" : "Login"}</Button>
    </div>
  );
};

HomeContent.propTypes = {
  changeLogin: PropTypes.func,
  loggedIn: PropTypes.bool
};

export default HomeContent;
