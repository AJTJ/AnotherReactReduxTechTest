import React, { Component } from "react";
import PropTypes from "prop-types";

const styles = {
  button: {
    width: 100,
    margin: 8,
    padding: 8
  }
};

class Button extends Component {
  static propTypes = {
    children: PropTypes.node.isRequired,
    onClick: PropTypes.func,
    style: PropTypes.object
  };
  render() {
    return (
      <button
        onClick={this.props.onClick}
        style={{ ...styles.button, ...this.props.style }}
      >
        {this.props.children}
      </button>
    );
  }
}

export default Button;
