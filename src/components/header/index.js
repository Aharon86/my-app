import React, { Component } from 'react';
import Li from './returnLi';

class Header extends Component {
    showLi = () => {
        let arr = ['Hello', 'Blog', 'About', 'Contacts'];
        let arr2 = [];
        for (let i = 0; i < arr.length; i++) {
            arr2.push(<Li name ={arr[i]} />)
            
        }
        return arr2;
    }
    render() {
        return (
            <header>
                <ul>
                    {this.showLi()}
                    {/* <Li name ="Hello" text="we are happy"/>
                    <Li name ="Blog"/>
                    <Li name ="About"/>
                    <Li name ="Contacts"/> */}
                </ul>
            </header>
        );
    }
}

export default Header;