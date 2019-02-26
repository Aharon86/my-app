import React, {Component} from 'react';

class Li extends Component{
    render() {
        return(
            <li>{this.props.name} {this.props.text}</li>
        );
    }
}

export default Li;