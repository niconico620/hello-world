import React from 'react'

const UpdatedComponent = (OriginalComponent, incrementNumber) => {
    class NewComponent extends React.Component {
        constructor(props) {
            super(props)
        
            this.state = {
                 count: 0
            }
        }
        incrementCount = (event) => {
        
            this.setState(prevState =>({
                count: prevState.count  + incrementNumber
            }))
            if(this.state.count % 2){
                event.target.style.color = "pink"
            }else{
                event.target.style.color = "red"
            }
        }
        render() {
            return <OriginalComponent name="NicoNico" count = {this.state.count} clickEvent={this.incrementCount} {...this.props}/>
        }
    }
    return NewComponent
}

export default UpdatedComponent