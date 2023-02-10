import React from "react";
import "../styles/Button.css";

const Button = ({ className, onClick, onMouseDown, text }) => {
  return (
    <button className={className} onClick={onClick} onMouseDown={onMouseDown}>
      {text}
    </button>
  );
};

export default Button;
