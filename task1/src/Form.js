import React from 'react';
import './Form.css';
import './Button.css';
import FilledForm from "./FilledForm";
const Areas = React.lazy(() => import('./Areas'));

class Form extends React.Component {
    constructor(props) {
        super(props);
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

    aboutStatus() {
        let result = '';
        if (this.state.input['about'].length >= 600) {
            result = `Превышен лимит символов в поле.`;
        } else {result = `Осталось ${600 - this.state.input['about'].length}/600 символов`}
        return result; 
    }

    stackStatus() {
        let result = '';
        if (this.state.input['stack'].length >= 600) {
            result = `Превышен лимит символов в поле.`;
        } else {result = `Осталось ${600 - this.state.input['stack'].length}/600 символов`}
        return result; 
    }

    lastProjectStatus() {
        let result = '';
        if (this.state.input['lastProject'].length >= 600) {
            result = `Превышен лимит символов в поле.`;
        } else {result = `Осталось ${600 - this.state.input['lastProject'].length}/600 символов`}
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
                    {/* <Areas />                    */}
                    <div className="areas">
                        <div className="inputs">
                            <label htmlFor='name'>Имя<input label='Имя' type='text' placeholder="Имя" className="input" 
                                name='name' value={this.state.input.name} onBlur={this.onBlur} onChange={this.handleChange} id='name' />
                                <div className="text-danger">{this.state.errors.name}</div></label>
                            <label htmlFor='surname'>Фамилия<input type='text' placeholder="Фамилия" className="input" 
                                name='surname' value={this.state.input.surname} onBlur={this.onBlur} onChange={this.handleChange} id='surname' />
                                <div className="text-danger">{this.state.errors.surname}</div></label>
                            <label htmlFor='dateOfBirth'>Дата рождения<input type='date' placeholder="Дата рождения" className="input" 
                                name='dateOfBirth' value={this.state.input.dateOfBirth} onBlur={this.onBlur} onChange={this.handleChange} id='dateOfBirth' />
                                <div className="text-danger">{this.state.errors.dateOfBirth}</div></label>
                            <label htmlFor='phoneNumber'>Телефон<input type='tel' placeholder="Телефон" className="input" 
                                name='phoneNumber' value={this.state.input.phoneNumber} onBlur={this.onBlur} onChange={this.handleChange} id='phoneNumber'/>
                                <div className="text-danger">{this.state.errors.phoneNumber}</div></label>
                            <label htmlFor='webSite'>Сайт<input type='text' placeholder="Сайт" className="input" 
                                name='webSite' value={this.state.input.webSite} onBlur={this.onBlur} onChange={this.handleChange} id='webSite' />
                                <div className="text-danger">{this.state.errors.webSite}</div></label>
                        </div>
                        <div className="textareas">
                            <label htmlFor='about'>О себе<textarea rows={7} placeholder='О себе' className="textarea" 
                                maxLength='600' name='about' value={this.state.input.about} onBlur={this.onBlur} onChange={this.handleChange} id='about' />
                                <div className="text-danger">{this.state.errors.about}</div>
                                <div className='aboutStatus'>{this.aboutStatus()}</div></label>
                            <label htmlFor='stack'>Стек технологий<textarea rows={7} placeholder='Стек технологий' className="textarea" 
                                maxLength='600' name='stack' value={this.state.input.stack} onBlur={this.onBlur} onChange={this.handleChange} id='stack' />
                                <div className="text-danger">{this.state.errors.stack}</div>
                                <div className='stackStatus'>{this.stackStatus()}</div></label>
                            <label htmlFor='lastProject'>Описание последнего проекта<textarea rows={7} placeholder='Описание последнего проекта' className="textarea" 
                                maxLength='600' name='lastProject' value={this.state.input.lastProject} onBlur={this.onBlur} onChange={this.handleChange} id='lastProject' />
                                <div className="text-danger">{this.state.errors.lastProject}</div>
                                <div className='lastProjectStatus'>{this.lastProjectStatus()}</div></label>
                        </div>
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