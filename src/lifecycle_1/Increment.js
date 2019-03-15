import React, { Component } from 'react';
import Number from './Number';

class Increment extends Component{
    click = () => {
        alert(6546);
    }

    render() {
        return (
            <Number ev = {this.click}/>
        );
    }
}

export default Increment;