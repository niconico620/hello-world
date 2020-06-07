//Functional Component

import React from 'react'

/* function Greet(){
    return <h1>Hello Nico.</h1>
} */

//arrow function. Works the same as function Greet()
/* const Greet = (props) => {
    console.log(props);
    return (
        <div><h1>Hello {props.name} a.k.a</h1><h2>{props.heroName}</h2>
        {props.children}
        </div>
    )
}
 */

//destructuring props
const Greet = (props) => {
    const {name, heroName} = props
    return (
        <div><h1>Hello {name} a.k.a</h1><h2>{heroName}</h2>
        </div>
    )
}
export default Greet