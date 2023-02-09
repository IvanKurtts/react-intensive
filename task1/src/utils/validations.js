export const validateAreasFilled = (value) => {
  let error = "";
  if (!value) {
    error = "Поле пустое. Заполните, пожалуйста.";
  }
  return error;
};

export const validateName = (value) => {
  let error = "";
  if (value) {
    let pattern = new RegExp(/^[А-ЯЁA-Z]/);
    if (!pattern.test(value)) {
      error = "Имя должно начинаться с заглавной буквы.";
    }
    return error;
  }
};

export const validateSurname = (value) => {
  let error = "";
  if (value) {
    let pattern = new RegExp(/^[А-ЯЁA-Z]/);
    if (!pattern.test(value)) {
      error = "Фамилия должна начинаться с заглавной буквы.";
    }
    return error;
  }
};

export const validateWebSite = (value) => {
  let error = "";
  if (value) {
    let pattern = new RegExp(/^https:\//);
    if (!pattern.test(value)) {
      error = "Сайт должен начинаться с https:/.";
    }
    return error;
  }
};

export const validatePhoneNumber = (value) => {
  let error = "";
  if (value) {
    let pattern = new RegExp(/\d\-\d{4}\-\d{2}-\d{2}/);
    if (!pattern.test(value)) {
      error = "Номер должен соответствовать формату 7-7777-77-77.";
    }
    return error;
  }
};
