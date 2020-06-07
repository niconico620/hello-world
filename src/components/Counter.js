import React, { Component } from 'react'

class Counter extends Component {

    constructor(props) {
        super(props)

        this.state = {
            count: 0
        }
    }

    incrementNumber() {
       /*  this.setState({
            count: this.state.count + 1
        }, () => console.log('Callback value', this.state.count)) */

        this.setState((prevState) => ({
            count: prevState.count + 1
        }))

    }

    incrementFive(){
        this.incrementNumber()
        this.incrementNumber()
        this.incrementNumber()
        this.incrementNumber()
        this.incrementNumber()
    }

    render() {
        return (<div>
            <div>Count: {this.state.count}</div>
            <button onClick={() => this.incrementFive()}>Add</button>
        </div>)
    }
}

export default Counter