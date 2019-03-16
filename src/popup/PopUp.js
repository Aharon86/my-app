import React, { Component } from 'react';

class PopUp extends Component{
    click = () => this.props.callback()

    render() {
        return (
            <div id = 'pop_up'>
                <div id = 'container'>
                    <h1>h1</h1>
                    <p>p</p>
                    <button id = 'close' onClick = {this.click}>X</button>
                </div>
            </div>
        );
    }
}

export default PopUp;