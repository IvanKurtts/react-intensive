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
  const [state, setState] = useState({
    input: { ...initInputs },
    errors: { ...initInputs },
    showFilledForm: false,
  });

  const handleChange = (event) => {
    let input = initInputs;
    input[event.target.name] = event.target.value.trimStart();
    if (input[event.target.name] === input.phoneNumber) {
      input[event.target.name] = event.target.value.replace(/[^0-9-]/g, "");
    }
    setState((prevState) => ({ ...prevState, input }));
  };

  const submitForm = () => {
    if (initValidation()) {
      setState((prevState) => ({ ...prevState, showFilledForm: true }));
    }
  };

  const resetForm = () => {
    setState((prevState) => ({
      ...prevState,
      input: { ...initInputs },
      errors: { ...initInputs },
    }));
  };

  const initValidation = () => {
    let errors = { ...initInputs };
    let isValid = true;
    for (let item in validationMap) {
      let value = state.input[item];
      errors[item] = validateAreasFilled(value);
      if (validateAreasFilled(value)) {
        isValid = false;
      }
    }
    for (let item in validationMap) {
      let value = state.input[item];
      if (!errors[item]) {
        errors[item] = validationMap[item](value);
      }
      if (validationMap[item](value)) {
        isValid = false;
      }
    }
    setState((prevState) => ({ ...prevState, errors }));
    return isValid;
  };

  const onBlur = (event) => {
    let input = initInputs;
    event.stopPropagation();
    for (let prop in input) {
      input[prop] = input[prop].trim();
    }
    setState((prevState) => ({ ...prevState, input }));
  };

  return (
    <div className="container">
      <div
        className="form"
        style={{ display: state.showFilledForm ? "none" : "flex" }}
      >
        <h1>Создание анкеты</h1>
        <div className="areas">
          <div className="inputs">
            <Input
              input={state.input}
              errors={state.errors}
              handleChange={handleChange}
              onBlur={onBlur}
              label="name"
              text="Имя"
              type="text"
            />
            <Input
              input={state.input}
              errors={state.errors}
              handleChange={handleChange}
              onBlur={onBlur}
              label="surname"
              text="Фамилия"
              type="text"
            />
            <Input
              input={state.input}
              errors={state.errors}
              handleChange={handleChange}
              onBlur={onBlur}
              label="dateOfBirth"
              text="Дата рождения"
              type="date"
            />
            <Input
              input={state.input}
              errors={state.errors}
              handleChange={handleChange}
              onBlur={onBlur}
              label="phoneNumber"
              text="Телефон"
              type="tel"
              maxLength="12"
            />
            <Input
              input={state.input}
              errors={state.errors}
              handleChange={handleChange}
              onBlur={onBlur}
              label="webSite"
              text="Сайт"
              type="text"
            />
          </div>
          <div className="textareas">
            <Textarea
              input={state.input}
              errors={state.errors}
              handleChange={handleChange}
              onBlur={onBlur}
              label="about"
              text="О себе"
            />
            <Textarea
              input={state.input}
              errors={state.errors}
              handleChange={handleChange}
              onBlur={onBlur}
              label="stack"
              text="Стек технологий"
            />
            <Textarea
              input={state.input}
              errors={state.errors}
              handleChange={handleChange}
              onBlur={onBlur}
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
      <SuccessMessage showFilledForm={state.showFilledForm} />
      <FilledForm
        name={state.input.name}
        surname={state.input.surname}
        dateOfBirth={state.input.dateOfBirth}
        phoneNumber={state.input.phoneNumber}
        webSite={state.input.webSite}
        about={state.input.about}
        stack={state.input.stack}
        lastProject={state.input.lastProject}
        showFilledForm={state.showFilledForm}
      />
    </div>
  );
};

export default Form;
