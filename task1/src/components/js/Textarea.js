import React from "react";
import "../styles/Form.css";

const Textarea = ({
  label,
  text,
  input,
  errors,
  onBlur,
  handleChange,
  countSymbols,
}) => {
  return (
    <label htmlFor={label}>
      {text}
      <textarea
        rows={7}
        placeholder={text}
        className="textarea"
        maxLength="600"
        name={label}
        value={input[label]}
        onBlur={onBlur}
        onChange={handleChange}
        id={label}
      />
      <div className="text-danger">{errors[label]}</div>
      <div className="status">{countSymbols(input[label])}</div>
    </label>
  );
};

export default Textarea;
