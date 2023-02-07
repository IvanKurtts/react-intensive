import React from "react";
import './Form.css';

class Input extends React.Component { 
    render() {
        return (
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
        );
    }
}

export default Input;