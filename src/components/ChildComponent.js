import React from 'react';

function ChildComponent(props) {
    const {greetHandler} = props
    return (
        <div>
            <h3>Child component calling a Parent component's method: <button onClick = {() => greetHandler('child')}>Greet Parent</button></h3>
        </div>
    );
}

export default ChildComponent;