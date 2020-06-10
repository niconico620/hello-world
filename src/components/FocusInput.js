import React, { Component } from 'react'
import Input from './Input';

class FocusInput extends Component {
    constructor(props) {
        super(props)
    
        this.componentRef = React.createRef();
    }

    clickHandler = () => {
        this.componentRef.current.focusInput();
    }

    clickHandler2 = () => {
        this.componentRef.current.getValue();
    }
    
    render() {
        return (
            <div>
            <Input ref={this.componentRef}/>
            <button onClick={this.clickHandler}>Focus Input</button>
            <button onClick={this.clickHandler2}>Get Input Value</button>
            </div>
        )
    }
}

export default FocusInput
