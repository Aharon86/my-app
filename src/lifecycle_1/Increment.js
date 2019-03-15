import React, { Component, Fragment } from 'react';
import Number from './Number';

class Increment extends Component{
    state = {
        event: true
    }
    delete = () => {
        this.setState({event: false})
    }

    render() {
        return (
            <Fragment>
                {this.state.event?<Number/>:null}
                <button onClick = {this.delete}>Delete</button>
            </Fragment>
        );
    }
}

export default Increment;