import React from 'react';

function FunctionClick() {

    //event handling. function inside a function
    const clickHandler = () =>{
        console.log("Button clicked.");
    }

    return (
        <div>
            <button onClick={clickHandler}>Function Click</button>
        </div>
    );
}

export default FunctionClick;