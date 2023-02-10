import React from "react";
import ReactDOM from "react-dom";
import "../styles/FilledForm.css";

const SuccessMessage = ({ showFilledForm }) => {
  if (showFilledForm) {
    return ReactDOM.createPortal(
      <div className="successMessage">
        <h2>Данные заполнены успешно!</h2>
      </div>,
      document.body
    );
  }
};

export default SuccessMessage;
