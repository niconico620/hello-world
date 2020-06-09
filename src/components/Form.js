import React, { Component } from 'react'

 class Form extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             username: '',
             comment: '',
             topic: 'react'
        }
    }
    

    handleUsernameChange = (event) =>{
        this.setState({
            username: event.target.value
        })
    }

    handleCommentsChange = (event) => {
        this.setState({
            comment: event.target.value
        })
    }

    handleTopicChange = (event) => {
        this.setState({
            topic: event.target.value
        })
    }

    handleSubmit = (event) => {
        alert(`Username: ${this.state.username}, Comments: ${this.state.comment}, Topic: ${this.state.topic}`)
        event.preventDefault();
    }

    render() {
        const {username, comment, topic} = this.state
        return (
            <form onSubmit={this.handleSubmit}>
                <div>
                    <label>Username: </label>
                    <input type="text" value={username} onChange={this.handleUsernameChange}/>
                </div>
                <div>
                    <label>Comments: </label>
                    <textarea value={comment} onChange={this.handleCommentsChange}></textarea>
                </div>
                <div>
                    <label>Topic: </label>
                    <select value={topic} onChange={this.handleTopicChange}>
                    <option value="react">React</option>
                    <option value="angular">Angular</option>
                    <option value="vue">Vue</option>
                    </select>
                </div>
                <button type="submit">Submit</button> 
            </form>

        )
    }
}

export default Form