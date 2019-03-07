import React, { Component } from 'react';
import './style_form.css';
import regExp from './regExp';
import validInput from './validInput';

class Form extends Component{
    state = {
        sign: {
            sign_up: 'active',
            sign_in: 'not_active',
            form_1: {display: 'block'},
            form_2: {display: 'none'},
        }
    }

    inputs = [];
    myValue = {};

    changeSign = (e) => {
        if (e.target.id !== 'sign_up') {
            this.setState({
                sign: {
                    sign_up: 'not_active',
                    sign_in: 'active',
                    form_1: {display: 'none'},
                    form_2: {display: 'block'},
                }})
        } else {
            this.setState({
                sign: {
                    sign_up: 'active',
                    sign_in: 'not_active',
                    form_1: {display: 'block'},
                    form_2: {display: 'none'},
                }})
        }
    }

    validation = (e) => {
        // console.log(e);
        var inp = e;
        if (regExp[inp.name].test(inp.value)) {
            if (inp.name === 'confirm_password') {
                if (inp.value === this.myValue.password) {
                    this.setCorrect(inp, 'sign_up');
                }else{
                    this.setWrong(inp, 'sign_up');
                }
            }else{
                this.setCorrect(inp, 'sign_up');
            }
        } else {
            this.setWrong(inp, 'sign_up');
        }
    }

    setCorrect = (inp, keyValidInput) => {
        inp.style.borderBottom = '2px solid green';
        inp.className = 'right';
        validInput[keyValidInput][inp.name].valid = true;
        this.myValue[inp.name] = inp.value;
        inp.nextElementSibling.innerHTML = '';
    }
    setWrong = (inp, keyValidInput) => {
        inp.style.borderBottom = '2px solid red';
        inp.className = '';
        validInput[keyValidInput][inp.name].valid = false;
        this.myValue[inp.name] = inp.value;
        inp.nextElementSibling.innerHTML = validInput[keyValidInput][inp.name].err;
    }

    sendData = () => {
        for (let key in this.inputs) {
            this.validation(this.inputs[key] );
        }
         // breake or not
        for (let key in validInput.sign_in) {
            if (!validInput.sign_in[key].valid) {
                return;
            }
        }
        // if all values are correct return standard styles
        for (let key in validInput.sign_in) {
            this.inputs[key].removeAttribute("style");
            this.inputs[key].value = '';
        }
    }

    render (){
        return (
            <div className="container">
                <div className="item_1"></div>
                <div className="item_2">
                    <div className="sign">
                        <div className={this.state.sign.sign_up} id="sign_up" onClick = {this.changeSign}>Sign Up</div>
                        <div className={this.state.sign.sign_in} id="sign_in" onClick = {this.changeSign}>Sign In</div>
                    </div>
                    <div className="form_section">
                        <form action="" id="form_1" style = {this.state.sign.form_1}>
                            <label id="name">
                                <input type="text" ref = {e => this.inputs[0]=e} onInput = {e => this.validation(e.target)} className="name" placeholder="Name" name="name" autoComplete="off"/>
                                <span></span>
                            </label>
                            <label id="surname">
                                <input type="text" ref = {e => this.inputs[1]=e} onInput = {e => this.validation(e.target)} className="surname" placeholder="Surname" name="surname" autoComplete="off"/>
                                <span></span>
                            </label>
                            <label id="email">
                                <input type="email" ref = {e => this.inputs[2]=e} onInput = {e => this.validation(e.target)} className="email" placeholder="E-Mail" name="email" autoComplete="off"/>
                                <span></span>
                            </label>
                            <label id="username">
                                <input type="text" ref = {e => this.inputs[3]=e} onInput = {e => this.validation(e.target)} className="username" placeholder="Username" name="username" autoComplete="off"/>
                                <span></span>
                            </label>
                            <label id="password">
                                <input type="password" ref = {e => this.inputs[4]=e} onInput = {e => this.validation(e.target)} className="password" placeholder="Password" name="password" autoComplete="off"/>
                                <span></span>
                            </label>
                            <label id="confirm_password">
                                <input type="password" ref = {e => this.inputs[5]=e} onInput = {e => this.validation(e.target)} className="confirm_password" placeholder="Confirm Password" name="confirm_password" autoComplete="off"/>
                                <span></span>
                            </label>
                            <button type="button" onClick = {this.sendData}>Register</button>
                        </form>
                        <form action="" id="form_2" style = {this.state.sign.form_2}>
                            <label>
                                <input type="text" className="username" placeholder="Username" name="username" autoComplete="off"/>
                                <span></span>
                            </label>
                            <label>
                                <input placeholder="Password" className="password" name="password" autoComplete="off"/>
                                <span></span>
                            </label>
                            <button type="button">Login</button>
                        </form>
                    </div>
                </div>
            </div>
        );
    }
}

export default Form;