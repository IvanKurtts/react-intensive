import React from "react";
import './Form.css';
import Form from './Form';

class Areas extends Form {
    constructor(props) {
        super(props);
        this.handleChange = this.handleChange.bind(this);
        this.submitForm = this.submitForm.bind(this);
        this.resetForm = this.resetForm.bind(this);
        this.onBlur = this.onBlur.bind(this);
    }
    
    render() {
        return (
            <div className="areas">
                <div className="inputs">
                    <label htmlFor='name'>Имя<input label='Имя' type='text' placeholder="Имя" className="input" 
                        name='name' value={this.props.input.name} onBlur={this.props.onBlur} onChange={this.props.handleChange} id='name' />
                        <div className="text-danger">{this.props.errors.name}</div></label>
                    <label htmlFor='surname'>Фамилия<input type='text' placeholder="Фамилия" className="input" 
                        name='surname' value={this.props.input.surname} onBlur={this.props.onBlur} onChange={this.props.handleChange} id='surname' />
                        <div className="text-danger">{this.props.errors.surname}</div></label>
                    <label htmlFor='dateOfBirth'>Дата рождения<input type='date' placeholder="Дата рождения" className="input" 
                        name='dateOfBirth' value={this.props.input.dateOfBirth} onBlur={this.props.onBlur} onChange={this.props.handleChange} id='dateOfBirth' />
                        <div className="text-danger">{this.props.errors.dateOfBirth}</div></label>
                    <label htmlFor='phoneNumber'>Телефон<input type='tel' placeholder="Телефон" className="input" 
                        name='phoneNumber' value={this.props.input.phoneNumber} onBlur={this.props.onBlur} onChange={this.props.handleChange} id='phoneNumber'/>
                        <div className="text-danger">{this.props.errors.phoneNumber}</div></label>
                    <label htmlFor='webSite'>Сайт<input type='text' placeholder="Сайт" className="input" 
                        name='webSite' value={this.props.input.webSite} onBlur={this.props.onBlur} onChange={this.props.handleChange} id='webSite' />
                        <div className="text-danger">{this.props.errors.webSite}</div></label>
                </div>
                <div className="textareas">
                    <label htmlFor='about'>О себе<textarea rows={7} placeholder='О себе' className="textarea" 
                        maxLength='600' name='about' value={this.props.input.about} onBlur={this.props.onBlur} onChange={this.props.handleChange} id='about' />
                        <div className="text-danger">{this.props.errors.about}</div>
                        <div className='aboutStatus'>{this.aboutStatus()}</div></label>
                    <label htmlFor='stack'>Стек технологий<textarea rows={7} placeholder='Стек технологий' className="textarea" 
                        maxLength='600' name='stack' value={this.props.input.stack} onBlur={this.props.onBlur} onChange={this.props.handleChange} id='stack' />
                        <div className="text-danger">{this.props.errors.stack}</div>
                        <div className='stackStatus'>{this.stackStatus()}</div></label>
                    <label htmlFor='lastProject'>Описание последнего проекта<textarea rows={7} placeholder='Описание последнего проекта' className="textarea" 
                        maxLength='600' name='lastProject' value={this.props.input.lastProject} onBlur={this.props.onBlur} onChange={this.props.handleChange} id='lastProject' />
                        <div className="text-danger">{this.props.errors.lastProject}</div>
                        <div className='lastProjectStatus'>{this.lastProjectStatus()}</div></label>
                </div>
            </div>
        );
    }
}

export default Areas;