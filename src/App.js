// import React from 'react';
import React, { Component } from 'react';
import './App.css';
import Subject from './components/Subject'
import Nav from './components/Nav'
import Content from './components/Content'


// class 방식
class App extends Component {
  render() {
    return (
      <div className="App">
        <Subject title="WEB" sub="World Wide Web!"/>
        <br></br>
        <Nav />
        <br></br>
        <Content title="HTML" desc="HTML is HyperText Markup Language."/>
      </div>
    );
  }
}

export default App;



// function 방식
/*
function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
*/
