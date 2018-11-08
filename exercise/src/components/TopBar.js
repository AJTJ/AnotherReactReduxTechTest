import React, { Component } from "react";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import Button from "./Button";

class TopBar extends Component {
  static propTypes = {
    changeLogin: PropTypes.func,
    loggedIn: PropTypes.bool
  };

  render() {
    let { loggedIn, changeLogin } = this.props;
    const loggedOutStyle = { backgroundColor: "blue", color: "white" };
    const loggedInStyle = { borderRadius: 100, width: 34, height: 34 };
    return (
      <header
        style={{
          height: 48,
          width: "100%",
          backgroundColor: "rgb(102,63,180)",
          color: "white",
          padding: "6px 10px",
          display: "flex",
          flexDirection: "row",
          alignItems: "center"
        }}
      >
        <div style={styles.logo}>
          <Link to="/">
            <img
              alt={"logo"}
              style={{ maxHeight: 40, flex: 1 }}
              src="favicon-196x196.png"
            />
          </Link>
        </div>
        <div>{"Modus Create"}</div>
        <div style={{ float: "left", color: "white", flex: 1 }} />
        <div style={{ float: "right", paddingRight: 20 }}>
          <Button
            onClick={changeLogin}
            style={loggedIn ? loggedInStyle : loggedOutStyle}
          >
            {loggedIn ? "AJ" : "Login"}
          </Button>
          <Button
            onClick={loggedIn ? changeLogin : undefined}
            style={{ backgroundColor: "red", color: "white" }}
          >
            {loggedIn ? "Logout" : "Signup"}
          </Button>
        </div>
      </header>
    );
  }
}

const styles = {
  logo: {
    float: "left",
    margin: 8
  }
};

export default TopBar;
