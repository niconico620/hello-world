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
import Stylesheet from './components/Stylesheet';
import Inline from './components/Inline';
import './appStyles.css';
import styles from './appStyles.module.css';
import Form from './components/Form';
import LifecycleA from './components/LifecycleA';
import FragmentDemo from './components/FragmentDemo';
import Table from './components/Table';
import Form2 from './components/Form2';
import PureComp from './components/PureComp';
import ParentComp from './components/ParentComp';
import RefsDemo from './components/RefsDemo';
import FocusInput from './components/FocusInput';
import FRParentInput from './components/FRParentInput';
import PortalDemo from './components/PortalDemo';
import Hero from './components/Hero';
import ErrorBoundary from './components/ErrorBoundary';

function App() {
  return (
    <div className="App">
      <div className="App-header">

        
       {/*  <ErrorBoundary>
          <Hero heroName="Batman" />
        </ErrorBoundary>
        <ErrorBoundary>
          <Hero heroName="Superman" />
        </ErrorBoundary>
        <ErrorBoundary>
          <Hero heroName="Joker" />
        </ErrorBoundary>
      */}
        <PortalDemo />

        <FRParentInput />

        <FocusInput />

        <RefsDemo />

        <ParentComp />

        <Form2 />

        <Table />

        <FragmentDemo />


        <LifecycleA />

        <Form />

        <h1 className="error">Error</h1>
        <h1 className={styles.success}>Success</h1>

        <Inline />

        <Stylesheet primary={true} />

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
