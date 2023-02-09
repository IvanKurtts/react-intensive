import React from "react";
import "../styles/Form.css";

class Input extends React.Component {
  render() {
    return (
      <label htmlFor={this.props.label}>
        {this.props.text}
        <input
          label={this.props.text}
          type={this.props.type}
          placeholder={this.props.text}
          className="input"
          name={this.props.label}
          value={this.props.input[this.props.label]}
          onBlur={this.props.onBlur}
          onChange={this.props.handleChange}
          id={this.props.label}
          maxLength={this.props.maxLength}
        />
        <div className="text-danger">{this.props.errors[this.props.label]}</div>
      </label>
    );
  }
}

export default Input;
