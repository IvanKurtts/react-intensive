import React from "react";
import './Form.css';
import './Button.css';

class Form extends React.Component {
    render() {
        return (
        <div className="container">
            <h1>Создание анкеты</h1>
            <div className="areas">
                <div className="inputs">
                    <label>Имя<input type='text' placeholder="Имя"></input></label>
                    <label>Фамилия<input type='text' placeholder="Фамилия"></input></label>
                    <label>Дата рождения<input type='date' placeholder="Дата рождения"></input></label>
                    <label>Телефон<input type='tel' placeholder="Телефон"></input></label>
                    <label>Сайт<input type='text' placeholder="Сайт"></input></label>
                </div>
                <div className="textareas">
                    <label>О себе<textarea rows={7} placeholder='О себе'></textarea></label>
                    <label>Стек технологий<textarea rows={7} placeholder='Стек технологий'></textarea></label>
                    <label>Описание последнего проекта<textarea rows={7} placeholder='Описание последнего проекта'></textarea></label>
                </div>
            </div>
            <div className="btns">
                <button className="btn-hover color-1">Сохранить</button>
                <button className="btn-hover color-2">Отмена</button>
            </div>
        </div> 
        );
      }
}

export default Form;