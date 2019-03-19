import React, { Component, Fragment } from 'react';
import Form from './Form';

class Home extends Component{
    state = {
        popUpForm: false,
        windowForm: true
    }
    openSignUp = () => {
        this.setState({popUpForm: !this.state.popUpForm, windowForm: true})
    }
    openSignIn = () => {
        this.setState({popUpForm: !this.state.popUpForm, windowForm: false})
    }
    closeForm = () => {
        this.setState({popUpForm: !this.state.popUpForm})
    }
    render() {
        return (
            <Fragment>
                <div id = 'homeButtons'>
                    <button onClick = {this.openSignUp}>Sign Up</button>
                    <button onClick = {this.openSignIn}>Sign In</button>
                </div>
                {this.state.popUpForm? <Form callback = {this.closeForm} signUpIn = {this.state.windowForm}/>: null}
            </Fragment>
        );
    }
}

export default Home;