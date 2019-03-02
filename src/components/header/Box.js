import React, { Component } from 'react';

class Box extends Component {
    state = {
        color: '',
        text: 0,
        time: 5
    }
    change = ()=>{
            this.setState({
                color: 'rgb(' + Math.round(Math.random()*255) + ','+Math.round(Math.random()*255)+','+Math.round(Math.random()*255)+')', 
                text: this.state.text+1

            });
    }
    render() {
        return (
            <div className='box' style={{background: this.state.color}}  onClick={this.change}>{this.state.text}</div>
        );
    }
}

export default Box;