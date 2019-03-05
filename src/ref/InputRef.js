import React, { Component } from 'react';

class InputRef extends Component {
    state = {
        text: '',
        number: 0
    }
    changeText = () => {
        this.setState({text: this.text.value});
    
    }
    show1 = () => {
        console.log(this.h1.innerHTML);
    }
    render() {
        return (
            <section>
                <input onChange = {this.changeText} type = 'text' ref = {el => this.text = el} name = 'text' />
                <p>{this.state.text}</p>
                <input onChange = {this.changeNumber} type = 'number' ref = {el => this.number = el} name = 'number'/>
                <p>{this.state.number}</p>
                <h1 ref = {el => this.h1 = el}>Hello</h1>
                <h2 ref = {el => this.h2 = el}>Hello</h2>
                <button onClick = {this.show1}>Show</button>
            </section>
        );
    }
}

export default InputRef;