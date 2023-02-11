import React, { useState } from "react";
import "./Form.css";
import FilledForm from "../FilledForm/FilledForm";
import Input from "../Input";
import Textarea from "../Textarea";
import Button from "../Button/Button";
import initInputs from "../../utils/InitInputs";
import {
  validateAreasFilled,
  validateName,
  validateSurname,
  validatePhoneNumber,
  validateWebSite,
} from "../../utils/validations";
import SuccessMessage from "../SuccessMessage";

const validationMap = {
  name: validateName,
  surname: validateSurname,
  dateOfBirth: () => {},
  phoneNumber: validatePhoneNumber,
  webSite: validateWebSite,
  about: () => {},
  stack: () => {},
  lastProject: () => {},
};

const Form = () => {
  const [errors, setErrors] = useState({ ...initInputs });
  const [input, setInput] = useState({ ...initInputs });
  const [showFilledForm, setFilledForm] = useState(false);

  const handleChange = (event) => {
    setInput((prevState) => {
      input[event.target.name] = event.target.value.trimStart();
      if (input[event.target.name] === input.phoneNumber) {
        input[event.target.name] = event.target.value.replace(/[^0-9-]/g, "");
      }
      return { ...prevState, input };
    });
  };

  const submitForm = () => {
    if (initValidation()) {
      setFilledForm(true);
    }
  };

  const resetForm = () => {
    setErrors({
      errors: { ...initInputs },
    });
    setInput({ ...initInputs });
  };

  const initValidation = () => {
    let isValid = true;
    setErrors((prevState) => {
      return { ...prevState, errors };
    });
    for (let item in validationMap) {
      let value = input[item];
      errors[item] = validateAreasFilled(value);
      if (validateAreasFilled(value)) {
        isValid = false;
      }
    }
    for (let item in validationMap) {
      let value = input[item];
      if (!errors[item]) {
        errors[item] = validationMap[item](value);
      }
      if (validationMap[item](value)) {
        isValid = false;
      }
    }
    return isValid;
  };

  return (
    <div className="container">
      <div
        className="form"
        style={{ display: showFilledForm ? "none" : "flex" }}
      >
        <h1>Создание анкеты</h1>
        <div className="areas">
          <div className="inputs">
            <Input
              input={input}
              errors={errors}
              handleChange={handleChange}
              label="name"
              text="Имя"
              type="text"
            />
            <Input
              input={input}
              errors={errors}
              handleChange={handleChange}
              label="surname"
              text="Фамилия"
              type="text"
            />
            <Input
              input={input}
              errors={errors}
              handleChange={handleChange}
              label="dateOfBirth"
              text="Дата рождения"
              type="date"
            />
            <Input
              input={input}
              errors={errors}
              handleChange={handleChange}
              label="phoneNumber"
              text="Телефон"
              type="tel"
              maxLength="12"
            />
            <Input
              input={input}
              errors={errors}
              handleChange={handleChange}
              label="webSite"
              text="Сайт"
              type="text"
            />
          </div>
          <div className="textareas">
            <Textarea
              input={input}
              errors={errors}
              handleChange={handleChange}
              label="about"
              text="О себе"
            />
            <Textarea
              input={input}
              errors={errors}
              handleChange={handleChange}
              label="stack"
              text="Стек технологий"
            />
            <Textarea
              input={input}
              errors={errors}
              handleChange={handleChange}
              label="lastProject"
              text="Описание последнего проекта"
            />
          </div>
        </div>
        <div className="btns">
          <Button
            onClick={submitForm}
            onMouseDown={initValidation}
            className="btn-hover color-1"
            text="Сохранить"
          />
          <Button
            onClick={resetForm}
            className="btn-hover color-2"
            text="Отмена"
          />
        </div>
      </div>
      <SuccessMessage showFilledForm={showFilledForm} />
      <FilledForm
        name={input.name}
        surname={input.surname}
        dateOfBirth={input.dateOfBirth}
        phoneNumber={input.phoneNumber}
        webSite={input.webSite}
        about={input.about}
        stack={input.stack}
        lastProject={input.lastProject}
        showFilledForm={showFilledForm}
      />
    </div>
  );
};

export default Form;
