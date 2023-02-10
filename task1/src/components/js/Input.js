import React from "react";
import "../styles/Form.css";

const Input = ({
  label,
  text,
  type,
  input,
  onBlur,
  handleChange,
  maxLength,
  errors,
}) => {
  return (
    <label htmlFor={label}>
      {text}
      <input
        label={text}
        type={type}
        placeholder={text}
        className="input"
        name={label}
        value={input[label]}
        onBlur={onBlur}
        onChange={handleChange}
        id={label}
        maxLength={maxLength}
      />
      <div className="text-danger">{errors[label]}</div>
    </label>
  );
};

export default Input;
