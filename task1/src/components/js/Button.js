import React from "react";
import "../styles/Button.css";

class Button extends React.Component {
  render() {
    return (
      <button
        className={this.props.className}
        onClick={this.props.onClick}
        onMouseDown={this.props.onMouseDown}
      >
        {this.props.text}
      </button>
    );
  }
}

export default Button;
