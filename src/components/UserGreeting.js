//Conditional Rendering

import React, { Component } from 'react'


class UserGreeting extends Component {

    constructor(props) {
        super(props)

        this.state = {
            isLoggedIn: true
        }
    }


    render() {

        //shortcircuit operator approach
      /*   return this.state.isLoggedIn && <div>Welcome Nico. You are logged in.</div> */
        

        //ternary conditional operator approach
          return this.state.isLoggedIn ? (
         <div>Welcome Nico. You are logged in.</div>
         ) : (
         <div>Welcome Guest. Please sign up to log in.</div>
          ) 

        //element variable approach
        /*  let message;
         if(this.state.isLoggedIn){
             message = <div>Welcome Nico. You are logged in.</div>
         }else{
             message = <div>Welcome Guest. Please sign up to log in.</div>
         }
         
         return message; */

        //if/else approach
        /*  if (this.state.isLoggedIn) {
            return <div> Welcome Nico. You are logged in.</div>
         }else{
             return <div>Welcome Guest. Please sign up to log in.</div>
         } */


        /*   return (
              <div>
                  <div> Welcome Nico.</div>
                  <div>Welcome Guest.</div>
              </div>
  
          ) */
    }
}

export default UserGreeting;
