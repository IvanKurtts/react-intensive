import React, { useState } from "react";
import "../styles/Form.css";
import "../styles/Button.css";
import FilledForm from "./FilledForm";
import Input from "./Input";
import Textarea from "./Textarea";
import Button from "./Button";
import initInputs from "./InitInputs";
import {
  validateAreasFilled,
  validateName,
  validateSurname,
  validatePhoneNumber,
  validateWebSite,
} from "../../utils/validations";
import SuccessMessage from "./SuccessMessage";

const validationMapFilled = [
  "name",
  "surname",
  "dateOfBirth",
  "phoneNumber",
  "webSite",
  "about",
  "stack",
  "lastProject",
];

const validationMapCorrect = {
  name: validateName,
  surname: validateSurname,
  phoneNumber: validatePhoneNumber,
  webSite: validateWebSite,
};

const Form = () => {
  const [state, setState] = useState({
    input: Object.fromEntries(initInputs),
    errors: Object.fromEntries(initInputs),
    showFilledForm: false,
  });

  const handleChange = (event) => {
    let input = state.input;
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
      input: Object.fromEntries(initInputs),
      errors: Object.fromEntries(initInputs),
    }));
  };

  const initValidation = () => {
    let input = state.input;
    let errors = state.errors;
    let isValid = true;
    for (let item of validationMapFilled) {
      let value = input[item];
      errors[item] = validateAreasFilled(value);
      if (validateAreasFilled(value)) {
        isValid = false;
      }
    }
    for (let prop in validationMapCorrect) {
      let value = input[prop];
      if (!errors[prop]) {
        errors[prop] = validationMapCorrect[prop](value);
      }
      if (validationMapCorrect[prop](value)) {
        isValid = false;
      }
    }
    setState((prevState) => ({ ...prevState, errors }));
    return isValid;
  };

  const countSymbols = (name) => {
    let result = "";
    if (name.length >= 600) {
      result = `Превышен лимит символов в поле.`;
    } else {
      result = `Осталось ${600 - name.length}/600 символов`;
    }
    return result;
  };

  const onBlur = (event) => {
    let input = state.input;
    event.stopPropagation();
    for (let prop in input) {
      input[prop] = input[prop].trim();
    }
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
              label={"name"}
              text={"Имя"}
              type={"text"}
            />
            <Input
              input={state.input}
              errors={state.errors}
              handleChange={handleChange}
              onBlur={onBlur}
              label={"surname"}
              text={"Фамилия"}
              type={"text"}
            />
            <Input
              input={state.input}
              errors={state.errors}
              handleChange={handleChange}
              onBlur={onBlur}
              label={"dateOfBirth"}
              text={"Дата рождения"}
              type={"date"}
            />
            <Input
              input={state.input}
              errors={state.errors}
              handleChange={handleChange}
              onBlur={onBlur}
              label={"phoneNumber"}
              text={"Телефон"}
              type={"tel"}
              maxLength={"12"}
            />
            <Input
              input={state.input}
              errors={state.errors}
              handleChange={handleChange}
              onBlur={onBlur}
              label={"webSite"}
              text={"Сайт"}
              type={"text"}
            />
          </div>
          <div className="textareas">
            <Textarea
              input={state.input}
              errors={state.errors}
              handleChange={handleChange}
              countSymbols={countSymbols}
              onBlur={onBlur}
              label={"about"}
              text={"О себе"}
            />
            <Textarea
              input={state.input}
              errors={state.errors}
              handleChange={handleChange}
              countSymbols={countSymbols}
              onBlur={onBlur}
              label={"stack"}
              text={"Стек технологий"}
            />
            <Textarea
              input={state.input}
              errors={state.errors}
              handleChange={handleChange}
              countSymbols={countSymbols}
              onBlur={onBlur}
              label={"lastProject"}
              text={"Описание последнего проекта"}
            />
          </div>
        </div>
        <div className="btns">
          <Button
            onClick={submitForm}
            onMouseDown={initValidation}
            className={"btn-hover color-1"}
            text={"Сохранить"}
          />
          <Button
            onClick={resetForm}
            className={"btn-hover color-2"}
            text={"Отмена"}
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
