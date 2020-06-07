import React from 'react';
import logo from './logo.svg';
import './App.css';
import Greet from './components/Greet';
import Welcome from './components/Welcome';
import Hello from './components/Hello';
import Message from './components/Message';
import Counter from './components/Counter';
import FunctionClick from './components/FunctionClick';
import ClassClick from './components/ClassClick';
import EventBind from './components/EventBind';
import ParentComponent from './components/ParentComponent';
import UserGreeting from './components/UserGreeting';
import NameList from './components/NameList';

function App() {
  return (
    <div className="App">
      <div className="App-header">
        <NameList />

        <UserGreeting />

        <ParentComponent />

        <EventBind />

        <FunctionClick />
        <ClassClick />

        <Message />
        <Counter />

        {/*functional*/}
        <Greet name="Mikee" heroName="M.">
          <p>This is children property.</p>
        </Greet>
        <Greet name="Robert" heroName="R.">
          <button>Action</button>
        </Greet>
        <Greet name="Kobe" heroName="K." />

        {/*class*/}
        <Welcome name="Mikee" heroName="M." />
        <Welcome name="Robert" heroName="R." />
        <Welcome name="Kobe" heroName="K." />

        {/* <Hello /> */}
      </div>
    </div>
  );
}

export default App;
