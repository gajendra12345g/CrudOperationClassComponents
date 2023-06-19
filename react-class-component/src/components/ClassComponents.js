import React, { Component } from 'react'

export default class ClassComponents extends Component {
    constructor(props) {
        super(props);
        this.state = { hello: "World!" };
    }
  
    componentWillMount() {
        console.log("componentWillMount()");
    }
  
    componentDidMount() {
        console.log("componentDidMount()");
    }
  
    changeState() {
        this.setState({ hello: "gajendra" });
    }
  
    render() {
        return (
            <div>
                <h1> Hello{this.state.hello}</h1>
                <h2>
                    <button onClick={this.changeState.bind(this)}>Press Here!</button>
                </h2>
            </div>);
    }
  
    shouldComponentUpdate(nextProps, nextState) {
        console.log("shouldComponentUpdate()");
        return true;
    }
  
    componentWillUpdate() {
        console.log("componentWillUpdate()");
    }
  
    componentDidUpdate() {
        console.log("componentDidUpdate()");
    }
}