import React, {Component} from 'react';
import Shape from './shape';

class Selector extends Component {
    constructor(props) {
        super();
        this.state = {
            selectedShape: 'square',
        }
    }

    // Our methods live here.
    selectShape = (shapeName) => {
        this.setState({
            selectedShape: shapeName,
        })
    }

    render () {
        return (
            <div className="container">
                <div className="navbar">
                    <div>Selected: <span>{this.state.selectedShape}</span></div>
                </div>
                <div className="shape-list"> 
                    <Shape shape="square" selectShape={this.selectShape}/>
                    <Shape shape="triangle" selectShape={this.selectShape}/>
                    <Shape shape="circle" selectShape={this.selectShape}/>
                    <Shape shape="oval" selectShape={this.selectShape} />
                </div>
                <div className="shape-list">
                    <Shape shape="triangle_left" selectShape={this.selectShape} />
                    <Shape shape="trapezium" selectShape={this.selectShape} />
                    <Shape shape="star" selectShape={this.selectShape} />
                    <Shape shape="triangle_right" selectShape={this.selectShape} />


                </div>
            </div>
        )
    }
}

export default Selector;