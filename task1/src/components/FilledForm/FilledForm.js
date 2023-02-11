import React from "react";
import "./FilledForm.css";

const FilledForm = ({
  showFilledForm,
  name,
  surname,
  dateOfBirth,
  phoneNumber,
  webSite,
  about,
  stack,
  lastProject,
}) => {
  if (showFilledForm) {
    return (
      <div className="filledForm">
        <h1>
          {name} {surname}
        </h1>
        <ol>
          <li>Дата рождения: {dateOfBirth}</li>
          <li>Телефон: {phoneNumber}</li>
          <li>Сайт: {webSite}</li>
          <li>О себе: {about}</li>
          <li>Стек технологий: {stack}</li>
          <li>Описание последнего проекта: {lastProject}</li>
        </ol>
      </div>
    );
  }
};

export default FilledForm;
