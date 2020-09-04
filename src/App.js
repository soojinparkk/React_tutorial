// import React from 'react';
import React, { Component } from 'react';
import './App.css';
import Subject from './components/Subject'
import Nav from './components/Nav'
import Content from './components/Content'


// class 방식
class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      mode:'welcome',
      subject:{title:'WEB', sub:'World Wide Web'},
      welcome:{title:'Welcome', desc:'Hello, React'},
      contents:[
        {id:1, title:'HTML',desc:'HTML is for information'},
        {id:2, title:'CSS',desc:'CSS is for design'},
        {id:3, title:'JS',desc:'JS is for interactive'}
      ]
    }
  }

  render() {
    var _title, _desc = null;
    if (this.state.mode === 'welcome') {
      _title = this.state.welcome.title;
      _desc = this.state.welcome.desc;
    } else if (this.state.mode === 'read') {
      _title = this.state.contents[0].title;
      _desc = this.state.contents[0].desc;
    }

    return (
      <div className="App">
        {/* <Subject title={this.state.subject.title} 
        sub={this.state.subject.sub}></Subject> */}
        
        <header>
          <h1><a href="/" onClick={function(e){
            e.preventDefault();
            // this.state.mode = 'welcome';
            this.setState({
              mode:'welcome'
            });
          }.bind(this)}>{this.state.subject.title}</a></h1>
          {this.state.subject.sub}
        </header>

        <br></br>

        <Nav data={this.state.contents}></Nav>
        <br></br>

        <Content title={_title} desc={_desc}></Content>
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
