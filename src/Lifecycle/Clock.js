import React, { Component, Fragment } from 'react';

class Click extends Component{
    state = {
        date: new Date()
    }
    changeTime = () => {
        this.setState({
            date: new Date()
        })
    }
    deleteComponent = () => {
        this.setState({clicked: true})
    }
    componentDidMount() {
        this.time = setInterval(() => this.changeTime(), 1000)
    }
    componentDidUpdate(previousProps, previousState) {
        if (previousState !== this.state.date) {
            console.log(1);
        }
    }
    componentWillUnmount() {
        clearInterval(this.time)
    }

    render() {
        return(
            <p>the time is {this.state.date.toLocaleTimeString()}</p>
        );
    }
}

export default Click;