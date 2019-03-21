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
    componentDidUpdate(prevProps, prevState, snapshot){
        
        console.log(prevState.i, this.state.i, snapshot)
    }
    componentWillUnmount(){
        clearInterval(this.interval);
    }

    // shouldComponentUpdate(nextProps, nextState){
    //     if (nextState.i !== this.state.i) {
    //         return true;
    //     }
    //     return false;
    // }

    getSnapshotBeforeUpdate(prevProps, prevState){
        console.log('snapshhot');
        return 'kk';
    }
    render() {
        return (
            <p>{this.state.i}</p>
        );
    }
}

export default Number;