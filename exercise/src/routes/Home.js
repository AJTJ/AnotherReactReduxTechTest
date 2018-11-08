import React from "react";
import PropTypes from "prop-types";

import { connect } from "react-redux";
import { actions } from "../redux";

import TopBar from "../components/TopBar";
import HomeContent from "../components/HomeContent";

const Home = props => {
  let { loggedIn, changeLogin } = props;
  return (
    <div className="App">
      <TopBar loggedIn={loggedIn} changeLogin={changeLogin} />
      <HomeContent loggedIn={loggedIn} changeLogin={changeLogin} />
    </div>
  );
};

Home.propTypes = {
  changeLogin: PropTypes.func,
  loggedIn: PropTypes.bool
};

const mapStateToProps = state => {
  return { loggedIn: state.loginReducer.loggedIn };
};

const mapDispatchToProps = {
  ...actions
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Home);
