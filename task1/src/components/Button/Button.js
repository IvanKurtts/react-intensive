import React from "react";
import "./Button.css";

const Button = ({ className, onClick, onMouseDown, text }) => {
  return (
    <button className={className} onClick={onClick} onMouseDown={onMouseDown}>
      {text}
    </button>
  );
};

export default Button;
