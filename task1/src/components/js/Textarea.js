import React from "react";
import "../styles/Form.css";

class Textarea extends React.Component {
  render() {
    return (
      <label htmlFor={this.props.label}>
        {this.props.text}
        <textarea
          rows={7}
          placeholder={this.props.text}
          className="textarea"
          maxLength="600"
          name={this.props.label}
          value={this.props.input[this.props.label]}
          onBlur={this.props.onBlur}
          onChange={this.props.handleChange}
          id={this.props.label}
        />
        <div className="text-danger">{this.props.errors[this.props.label]}</div>
        <div className="status">
          {this.props.status(this.props.input[this.props.label])}
        </div>
      </label>
    );
  }
}

export default Textarea;
