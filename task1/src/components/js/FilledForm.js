import React from "react";
import "../styles/FilledForm.css";

class FilledForm extends React.Component {
  render() {
    if (this.props.showFilledForm) {
      return (
        <div className="filledForm">
          <h1>
            {this.props.name} {this.props.surname}
          </h1>
          <ol>
            <li>Дата рождения: {this.props.dateOfBirth}</li>
            <li>Телефон: {this.props.phoneNumber}</li>
            <li>Сайт: {this.props.webSite}</li>
            <li>О себе: {this.props.about}</li>
            <li>Стек технологий: {this.props.stack}</li>
            <li>Описание последнего проекта: {this.props.lastProject}</li>
          </ol>
        </div>
      );
    }
  }
}

export default FilledForm;
