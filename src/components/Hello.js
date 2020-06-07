import React from 'react';

const Hello = () => {
 //JSX Method
       return(
        <div className='hello2'>
            <h1>Hey Nico.</h1>
        </div>
    ) 

 //Method not in JSX
        //return React.createElement('div', {id: 'hello', className: 'hello2'}, React.createElement('h1', null, 'Hey Nico.'));
}

export default Hello


//JSX is a simpler approach.
//To be able to use JSX, we always have to import the React library.