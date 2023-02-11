import React from "react";
import "./Form/Form.css";

const Textarea = ({ label, text, input, errors, onBlur, handleChange }) => {
  const countSymbols = (name) => {
    let result =
      name.length >= 600
        ? `Превышен лимит символов в поле.`
        : `Осталось ${600 - name.length}/600 символов`;
    return result;
  };

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
