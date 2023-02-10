// import React from "react";
// import "../styles/Form.css";
// import "../styles/Button.css";
// import FilledForm from "./FilledForm";
// import Input from "./Input";
// import Textarea from "./Textarea";
// import Button from "./Button";
// import initInputs from "./InitInputs";
// import {
//   validateAreasFilled,
//   validateName,
//   validateSurname,
//   validatePhoneNumber,
//   validateWebSite,
// } from "../../utils/validations";

// const validationMapFilled = [
//   "name",
//   "surname",
//   "dateOfBirth",
//   "phoneNumber",
//   "webSite",
//   "about",
//   "stack",
//   "lastProject",
// ];

// const validationMapCorrect = {
//   name: validateName,
//   surname: validateSurname,
//   phoneNumber: validatePhoneNumber,
//   webSite: validateWebSite,
// };

// class Form extends React.Component {
//   constructor() {
//     super();
//     this.state = {
//       input: Object.fromEntries(initInputs),
//       errors: Object.fromEntries(initInputs),
//       showFilledForm: false,
//     };
//     this.handleChange = this.handleChange.bind(this);
//     this.submitForm = this.submitForm.bind(this);
//     this.resetForm = this.resetForm.bind(this);
//     this.onBlur = this.onBlur.bind(this);
//     this.initValidation = this.initValidation.bind(this);
//   }

//   handleChange(event) {
//     let input = this.state.input;
//     input[event.target.name] = event.target.value.trimStart();
//     if (input[event.target.name] === input.phoneNumber) {
//       input[event.target.name] = event.target.value.replace(/[^0-9-]/g, "");
//     }
//     this.setState({
//       input,
//     });
//   }

//   submitForm() {
//     if (this.initValidation()) {
//       this.setState({ showFilledForm: true });
//     }
//   }

//   resetForm() {
//     this.setState({
//       input: Object.fromEntries(initInputs),
//       errors: Object.fromEntries(initInputs),
//     });
//   }

//   initValidation() {
//     let input = this.state.input;
//     let errors = this.state.errors;
//     let isValid = true;
//     for (let item of validationMapFilled) {
//       let value = input[item];
//       errors[item] = validateAreasFilled(value);
//       if (validateAreasFilled(value)) {
//         isValid = false;
//       }
//     }
//     for (let prop in validationMapCorrect) {
//       let value = input[prop];
//       if (!errors[prop]) {
//         errors[prop] = validationMapCorrect[prop](value);
//       }
//       if (validationMapCorrect[prop](value)) {
//         isValid = false;
//       }
//     }
//     this.setState({
//       errors,
//     });
//     return isValid;
//   }

//   countSymbols(name) {
//     let result = "";
//     if (name.length >= 600) {
//       result = `Превышен лимит символов в поле.`;
//     } else {
//       result = `Осталось ${600 - name.length}/600 символов`;
//     }
//     return result;
//   }

//   onBlur(event) {
//     let input = this.state.input;
//     event.stopPropagation();
//     for (let prop in input) {
//       input[prop] = input[prop].trim();
//     }
//   }

//   render() {
//     return (
//       <div className="container">
//         <div
//           className="form"
//           style={{ display: this.state.showFilledForm ? "none" : "flex" }}
//         >
//           <h1>Создание анкеты</h1>
//           <div className="areas">
//             <div className="inputs">
//               <Input
//                 input={this.state.input}
//                 errors={this.state.errors}
//                 handleChange={this.handleChange}
//                 onBlur={this.onBlur}
//                 label={"name"}
//                 text={"Имя"}
//                 type={"text"}
//               />
//               <Input
//                 input={this.state.input}
//                 errors={this.state.errors}
//                 handleChange={this.handleChange}
//                 onBlur={this.onBlur}
//                 label={"surname"}
//                 text={"Фамилия"}
//                 type={"text"}
//               />
//               <Input
//                 input={this.state.input}
//                 errors={this.state.errors}
//                 handleChange={this.handleChange}
//                 onBlur={this.onBlur}
//                 label={"dateOfBirth"}
//                 text={"Дата рождения"}
//                 type={"date"}
//               />
//               <Input
//                 input={this.state.input}
//                 errors={this.state.errors}
//                 handleChange={this.handleChange}
//                 onBlur={this.onBlur}
//                 label={"phoneNumber"}
//                 text={"Телефон"}
//                 type={"tel"}
//                 maxLength={"12"}
//               />
//               <Input
//                 input={this.state.input}
//                 errors={this.state.errors}
//                 handleChange={this.handleChange}
//                 onBlur={this.onBlur}
//                 label={"webSite"}
//                 text={"Сайт"}
//                 type={"text"}
//               />
//             </div>
//             <div className="textareas">
//               <Textarea
//                 input={this.state.input}
//                 errors={this.state.errors}
//                 handleChange={this.handleChange}
//                 countSymbols={this.countSymbols}
//                 onBlur={this.onBlur}
//                 label={"about"}
//                 text={"О себе"}
//               />
//               <Textarea
//                 input={this.state.input}
//                 errors={this.state.errors}
//                 handleChange={this.handleChange}
//                 countSymbols={this.countSymbols}
//                 onBlur={this.onBlur}
//                 label={"stack"}
//                 text={"Стек технологий"}
//               />
//               <Textarea
//                 input={this.state.input}
//                 errors={this.state.errors}
//                 handleChange={this.handleChange}
//                 countSymbols={this.countSymbols}
//                 onBlur={this.onBlur}
//                 label={"lastProject"}
//                 text={"Описание последнего проекта"}
//               />
//             </div>
//           </div>
//           <div className="btns">
//             <Button
//               onClick={this.submitForm}
//               onMouseDown={this.initValidation}
//               className={"btn-hover color-1"}
//               text={"Сохранить"}
//             />
//             <Button
//               onClick={this.resetForm}
//               className={"btn-hover color-2"}
//               text={"Отмена"}
//             />
//           </div>
//         </div>
//         <FilledForm
//           name={this.state.input.name}
//           surname={this.state.input.surname}
//           dateOfBirth={this.state.input.dateOfBirth}
//           phoneNumber={this.state.input.phoneNumber}
//           webSite={this.state.input.webSite}
//           about={this.state.input.about}
//           stack={this.state.input.stack}
//           lastProject={this.state.input.lastProject}
//           showFilledForm={this.state.showFilledForm}
//         />
//       </div>
//     );
//   }
// }

// export default Form;
