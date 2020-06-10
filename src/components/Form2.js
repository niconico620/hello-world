import React, { Component } from 'react'

 class Form2 extends Component {
     constructor(props) {
         super(props)
     
         this.state = {
              message: ''
         }
     }

     inputHandler = (event) =>{
         this.setState({
             message: event.target.value
         })
     }

     submitHandler = (event) => {
        alert(`The username '${this.state.message}' has ${this.state.message.length} characters.`)
        /*event.preventDefault()*/
     }
     
    render() {
        return (
            <form onSubmit={this.submitHandler}>
                <label>Please enter your name here: </label>
                <input type="text" value={this.state.message} onChange={this.inputHandler}></input>
                <button type="submit">Check length</button>
            </form>
        )
    }
}

export default Form2
