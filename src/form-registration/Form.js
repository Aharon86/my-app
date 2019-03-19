import React, { Component } from 'react';
import './style_form.css';
import regExp from './regExp';
import validInput from './validInput';
import Li from './Li';

class Form extends Component{
    state = {
        sign: this.props.signUpIn,
        responseData: {}
    }

    inputs = {};
    myValue = {};
    
    changeSignUp = (e) => {
        this.setState({sign: true })
    }
    changeSignIn = (e) => {
        this.setState({sign: false })
    }

    validation = (e, signWindow) => {
        var inp = e;
        if (regExp[inp.name].test(inp.value)) {
            if (inp.name === 'confirm_password') {
                if (inp.value === this.myValue.password) {
                    this.setCorrect(inp, signWindow);
                }else{
                    this.setWrong(inp, signWindow);
                }
            }else{
                this.setCorrect(inp, signWindow);
            }
        } else {
            this.setWrong(inp, signWindow);
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
            this.validation(this.inputs[key], 'sign_up' );
        }
         // breake or not
        //  console.log(validInput.sign_up);
        for (let key in validInput.sign_up) {
            if (!validInput.sign_up[key].valid) {
                return;
            }
        }
        // if all values are correct return standard styles
        for (let key in this.inputs) {
            this.inputs[key].className = '';
            this.inputs[key].removeAttribute('style');
            this.inputs[key].value = '';
        }
        // console.log(this.myValue);
        fetch("http://rest.learncode.academy/api/johnbob/friends", {
                method: 'POST', // or 'PUT'
                body: JSON.stringify(this.myValue), // data can be `string` or {object}!
                headers:{
                'Content-Type': 'application/json'
                }
            })
            .then(res => res.json())
            .then(response => {this.setState({responseData: response})})
            .catch(error => console.error('Error:', error));
            // console.log(this.state.responseData);
    }

    writeData = () => {
        // console.log(this.state.responseData);
        let arr = [];
        for (let key in this.state.responseData) {
            arr.push(<Li key = {key} text = {this.state.responseData[key]} id = {key}/>)
        }
        return arr;
    }

    checkUser = () => {
        if (this.userName.value === this.state.responseData.username && this.userPassword.value === this.state.responseData.password) {
            alert(`Welcome ${this.userName.value}`);
            this.userName.value = '';
            this.userPassword.value = '';
        }
    }

   

    render (){
        return (
            <div className = 'wrapper'>
                <div className="container">
                
                <div id = 'closeForm' onClick = {this.props.callback}>&#x02A2F;</div>
                    <div className="item_1">
                        <ul>
                            {this.writeData()}
                        </ul>
                    </div>
                    <div className="item_2">
                        <div className="sign">
                            <div className={this.state.sign?'active':'not_active'} id="sign_up" onClick = {this.changeSignUp}>Sign Up</div>
                            <div className={this.state.sign?'not_active':'active'} id="sign_in" onClick = {this.changeSignIn}>Sign In</div>
                        </div>
                        <div className="form_section">
                            <form action="" id="form_1" style = {this.state.sign?{display: 'block'}:{display: 'none'}}>
                                <label id="name">
                                    <input type="text" ref = {e => this.inputs[0]=e} onInput = {e => this.validation(e.target, 'sign_up')} className="name" placeholder="Name" name="name" autoComplete="off"/>
                                    <span></span>
                                </label>
                                <label id="surname">
                                    <input type="text" ref = {e => this.inputs[1]=e} onInput = {e => this.validation(e.target, 'sign_up')} className="surname" placeholder="Surname" name="surname" autoComplete="off"/>
                                    <span></span>
                                </label>
                                <label id="email">
                                    <input type="email" ref = {e => this.inputs[2]=e} onInput = {e => this.validation(e.target, 'sign_up')} className="email" placeholder="E-Mail" name="email" autoComplete="off"/>
                                    <span></span>
                                </label>
                                <label id="username">
                                    <input type="text" ref = {e => this.inputs[3]=e} onInput = {e => this.validation(e.target, 'sign_up')} className="username" placeholder="Username" name="username" autoComplete="off"/>
                                    <span></span>
                                </label>
                                <label id="password">
                                    <input type="password" ref = {e => this.inputs[4]=e} onInput = {e => this.validation(e.target, 'sign_up')} className="password" placeholder="Password" name="password" autoComplete="off"/>
                                    <span></span>
                                </label>
                                <label id="confirm_password">
                                    <input type="password" ref = {e => this.inputs[5]=e} onInput = {e => this.validation(e.target, 'sign_up')} className="confirm_password" placeholder="Confirm Password" name="confirm_password" autoComplete="off"/>
                                    <span></span>
                                </label>
                                <button type="button" onClick = {this.sendData}>Register</button>
                            </form>
                            <form action="" id="form_2" style = {this.state.sign?{display: 'none'}:{display: 'block'}}>
                                <label>
                                    <input type="text" ref = {e => this.userName = e} className="username" placeholder="Username" name="username" autoComplete="off"/>
                                    <span></span>
                                </label>
                                <label>
                                    <input placeholder="Password" ref = {e => this.userPassword = e} className="password" name="password" autoComplete="off"/>
                                    <span></span>
                                </label>
                                <button type="button" onClick = {this.checkUser}>Login</button>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Form;