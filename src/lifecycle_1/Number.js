import React, { Component } from 'react';

class Number extends Component{
    state = {
        i: 0
    }
    incr = () => {
        this.setState({i: this.state.i + 1})
    }
    componentDidMount() {
        this.interval = setInterval(this.incr, 1000);
    }
    componentWillUpdate(){
        console.log(1)
    }
    componentWillUnmount(){
        clearInterval(this.interval);
    }
    render() {
        return (
            <p>{this.state.i}</p>
        );
    }
}

export default Number;