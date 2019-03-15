import React, { Component } from 'react';

class Number extends Component{
    state = {
        i: 0
    }
    incr = () => {
        this.setState({i: this.state.i + 1})
    }
    componentDidMount() {
        setInterval(this.incr, 1000);
    }
    render() {
        return (
            <p>{this.state.i}</p>
        );
    }
}

export default Number;