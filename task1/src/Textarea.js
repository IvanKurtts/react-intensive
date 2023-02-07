import React from "react";
import './Form.css';

class Textarea extends React.Component {    
    render() {
        return (
            <div className="textareas">
                <label htmlFor='about'>О себе<textarea rows={7} placeholder='О себе' className="textarea" 
                    maxLength='600' name='about' value={this.props.input.about} onBlur={this.props.onBlur} onChange={this.props.handleChange} id='about' />
                    <div className="text-danger">{this.props.errors.about}</div>
                    <div className='aboutStatus'>{this.props.Status(this.props.input.about)}</div></label>
                <label htmlFor='stack'>Стек технологий<textarea rows={7} placeholder='Стек технологий' className="textarea" 
                    maxLength='600' name='stack' value={this.props.input.stack} onBlur={this.props.onBlur} onChange={this.props.handleChange} id='stack' />
                    <div className="text-danger">{this.props.errors.stack}</div>
                    <div className='stackStatus'>{this.props.Status(this.props.input.stack)}</div></label>
                <label htmlFor='lastProject'>Описание последнего проекта<textarea rows={7} placeholder='Описание последнего проекта' className="textarea" 
                    maxLength='600' name='lastProject' value={this.props.input.lastProject} onBlur={this.props.onBlur} onChange={this.props.handleChange} id='lastProject' />
                    <div className="text-danger">{this.props.errors.lastProject}</div>
                    <div className='lastProjectStatus'>{this.props.Status(this.props.input.lastProject)}</div></label>
            </div>
        );
    }
}

export default Textarea;