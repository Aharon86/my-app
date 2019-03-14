import React, { Component, Fragment } from 'react';
import Clock from './Clock';

class Lifecycle extends Component{
    state = {
        clicked: false
    }

    delete = () => {
        this.setState({clicked: true})
    } 
   
    render() {
        return(
            <Fragment>
                <h1>Hello aaaaa</h1>
                {this.state.clicked? null: <Clock />}
                <button onClick = {this.delete}>Click</button>
            </Fragment>
        );
    }
}

export default Lifecycle;