import React, { Component } from 'react'

 class HoverCounterTwo extends Component {
    
    render() {
        
        return (
            <div>
                <h2 onMouseOver={this.props.incrementCount}>HoverCounterTwo: Hovered {this.props.count} times</h2>
            </div>
        )
    }
}

export default HoverCounterTwo
