import React, { Component } from 'react'
import UpdatedComponent from './withCounter'

export class HoverCounter extends Component {
    

    render() {     
        return (
            <div>
                <h2 onMouseOver={this.props.clickEvent}> {this.props.name} Hovered {this.props.count} times</h2>
            </div>
        )
    }
}

export default UpdatedComponent(HoverCounter, 6)
