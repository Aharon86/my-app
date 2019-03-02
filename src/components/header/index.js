import React, { Component, Fragment } from 'react';
import Li from './returnLi';
import Box from './Box';

class Header extends Component {
    // state = {
    //     name1: 'Vardan'
    // };
    // showLi = () => {
    //     let arr = ['Hello', 'Blog', 'About', 'Contacts'];
    //     let arr2 = [];
    //     for (let i = 0; i < arr.length; i++) {
    //         arr2.push(<Li name ={arr[i]} />)
            
    //     }
    //     return arr2;
    // }
    // change = ()=>{
    //     this.setState({surname: 'Mamikonyan'})
    // }
    

    render() {
        return (
            // <Fragment>
            // <header>
            //     <h1>{this.state.name1} {this.state.surname}</h1>
            //     <button onClick={this.change}>Change</button>
            //     <ul>
            //         {this.showLi()}
            //     </ul>
            // </header>
            // <div className='box'></div>
            // </Fragment>
            <Box />
        );
    }
}

export default Header;