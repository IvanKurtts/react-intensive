import React from 'react';
import './Form.css';
import './Button.css';
import FilledForm from "./FilledForm";
import Input from './Input';
import Textarea from './Textarea';

class Form extends React.Component {
    constructor() {
        super();
        this.state = {
        input: {name:'', surname:'', dateOfBirth:'', phoneNumber:'', webSite:'', about:'', stack:'', lastProject:'',},
        errors: {name:'', surname:'', dateOfBirth:'', phoneNumber:'', webSite:'', about:'', stack:'', lastProject:'',},
        showFilledForm: false,
        };
        this.handleChange = this.handleChange.bind(this);
        this.submitForm = this.submitForm.bind(this);
        this.resetForm = this.resetForm.bind(this);
        this.onBlur = this.onBlur.bind(this);
    }

    handleChange(event) {
        let input = this.state.input;
        input[event.target.name] = event.target.value.trimStart();
        this.setState({
            input: input
        });
    }

    submitForm() {
        if(this.validate()){
           this.setState({showFilledForm: true});
        }
    }

    resetForm() {
        this.setState({
            input: {name:'', surname:'', dateOfBirth:'', phoneNumber:'', webSite:'', about:'', stack:'', lastProject:'',},
            errors: {name:'', surname:'', dateOfBirth:'', phoneNumber:'', webSite:'', about:'', stack:'', lastProject:'',},
        }); 
    }

    validate() {
        let input = this.state.input;
        let errors = this.state.errors;
        let isValid = true;
  
        for (let prop in input) {
            if (!input[prop]) {
                isValid = false;
                errors[prop] = "Поле пустое. Заполните, пожалуйста.";
            } else {errors[prop] = ''}
        }

        if (input["name"] !== "") {        
            let pattern = new RegExp(/^[А-ЯЁ]/);
            if (!pattern.test(input["name"])) {
              isValid = false;
              errors["name"] = "Имя должно начинаться с заглавной буквы.";
            } else {errors['name'] = ''}
        }

        if (input["surname"] !== "") {        
            let pattern = new RegExp(/^[А-ЯЁ]/);
            if (!pattern.test(input["surname"])) {
              isValid = false;
              errors["surname"] = "Фамилия должна начинаться с заглавной буквы.";
            } else {errors['surname'] = ''}
        }

        if (input["webSite"] !== "") {        
            let pattern = new RegExp(/^https:\//);
            if (!pattern.test(input["webSite"])) {
              isValid = false;
              errors["webSite"] = "Сайт должен начинаться с https:/.";
            } else {errors['webSite'] = ''}
        }

        if (input["phoneNumber"] !== "") {        
            let pattern = new RegExp(/\d\-\d{4}\-\d{2}-\d{2}/);
            if (!pattern.test(input["phoneNumber"])) {
              isValid = false;
              errors["phoneNumber"] = "Номер должен соответствовать формату 7-7777-77-77.";
            } else {errors['phoneNumber'] = ''}
        }

        this.setState({
            errors: errors
        });

        return isValid;
    }

    Status(name) {
        let result = '';
        if (name.length >= 600) {
            result = `Превышен лимит символов в поле.`;
        } else {result = `Осталось ${600 - name.length}/600 символов`}
        return result; 
    }

    onBlur(event) {
        event.stopPropagation();
        for (let prop in this.state.input) {
        this.state.input[prop] = this.state.input[prop].trim();
        }
    }

    render() {
        return (
            <div className="container">
                <div className="form" style={{ display: this.state.showFilledForm ? "none" : "flex" }}>
                    <h1>Создание анкеты</h1>
                    <div className="areas">
                        <Input 
                            input={this.state.input}
                            errors={this.state.errors}
                            handleChange={this.handleChange}
                            submitForm={this.submitForm}
                            resetForm={this.resetForm}
                            validate={this.validate}
                            onBlur={this.onBlur}
                        />
                        <Textarea 
                            input={this.state.input}
                            errors={this.state.errors}
                            handleChange={this.handleChange}
                            submitForm={this.submitForm}
                            resetForm={this.resetForm}
                            validate={this.validate}
                            Status={this.Status}
                            onBlur={this.onBlur}
                        /> 
                    </div>                  
                    <div className="btns">
                        <button className="btn-hover color-1" onClick={this.submitForm}
                        >Сохранить</button>
                        <button className="btn-hover color-2" onClick={this.resetForm}
                        >Отмена</button>
                    </div>
                </div>
                <FilledForm
                    name={this.state.input.name}
                    surname={this.state.input.surname}
                    dateOfBirth={this.state.input.dateOfBirth} 
                    phoneNumber={this.state.input.phoneNumber}
                    webSite={this.state.input.webSite} 
                    about={this.state.input.about} 
                    stack={this.state.input.stack} 
                    lastProject={this.state.input.lastProject}
                    showFilledForm={this.state.showFilledForm}
                />
            </div>
        );
    }
}

export default Form;