import React, {Component} from 'react';
import Shape from './shape';

class Selector extends Component {

    render () {
        return (
            <div className="container">
                <div className="navbar">
                    <div>Selected: <span> What goes here!?!?</span></div>
                </div>
                <div className="shape-list"> 
                    <Shape shape="square"/>
                    <Shape shape="triangle"/>
                    <Shape shape="circle"/>
                </div>
            </div>
        )
    }
}

export default Selector;