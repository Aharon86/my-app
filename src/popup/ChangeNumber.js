import React, { Component, Fragment } from 'react';
import PopUp from './PopUp';
import './style1.css';

class ChangeNumber extends Component{
    state = {
        popup: false
    }
    chnageInput = () => {
        console.log(this.text.value);
        this.setState({popup: !this.state.popup});
    }
    render() {
        return (
            <Fragment>
                <div id = 'inputs'>
                    <input type = 'text' ref = {(e) => this.text = e} />
                    <button onClick = {this.chnageInput}>Check</button>
                </div>
                {this.state.popup?<PopUp callback = {this.chnageInput} />:null}
            </Fragment>
        );
    }
}

export default ChangeNumber;