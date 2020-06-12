import React, { Component } from 'react'

class ClickCounterTwo extends Component {
   
    
    render() {
        return (
            <div>
                <button onClick={this.props.incrementCount}>ClickCounter2: Click {this.props.count} times</button>
            </div>
        )
    }
}

export default ClickCounterTwo
