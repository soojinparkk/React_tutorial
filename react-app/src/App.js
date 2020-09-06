// import React from 'react';
import React, { Component } from 'react';
import './App.css';
import Subject from './components/Subject'
import Nav from './components/Nav'
import Control from './components/Control'
import ReadContent from './components/ReadContent'
import CreateContent from './components/CreateContent'
import UpdateContent from './components/UpdateContent'


// class 방식
class App extends Component {
  constructor(props) {
    super(props);

    this.max_content_id = 3;
    
    this.state = {
      mode:'welcome',
      selected_content_id:1,
      subject:{title:'WEB', sub:'World Wide Web'},
      welcome:{title:'Welcome', desc:'Hello, React'},
      contents:[
        {id:1, title:'HTML',desc:'HTML is for information'},
        {id:2, title:'CSS',desc:'CSS is for design'},
        {id:3, title:'JS',desc:'JS is for interactive'}
      ]
    }
  }

  // 현재 선택된 contents[i]를 return 하는 함수
  getReadMode() {
    var i = 0;
      while(i < this.state.contents.length) {
        var data = this.state.contents[i];
        if (data.id === this.state.selected_content_id) {
          return data;
        }
        i++;
      }
  }

  // 해당 mode에 따른 content를 띄워주는 함수
  getContent() {
    var _title, _desc = null;
    var _article = null;
    if (this.state.mode === 'welcome') {
      _title = this.state.welcome.title;
      _desc = this.state.welcome.desc;

      _article = <ReadContent title={_title} desc={_desc}></ReadContent>

    } else if (this.state.mode === 'read') {
      var _data = this.getReadMode();
      _article = <ReadContent title={_data.title} desc={_data.desc}></ReadContent>

    } else if (this.state.mode === 'create') {
      _article = <CreateContent onSubmit={function(_title, _desc){
        this.max_content_id++;

        // add content to this.state.contents
        // push: 원본에 새로운 데이터 추가
        // concat: 원본은 그대로, 새로운 데이터 추가한 배열 return
        //      -> 원본 불변함 (immutable)
        // Array.from(배열): 해당 배열 복제
        //      -> 변수에 복제본을 저장한 후 push하면 concat과 같은 결과
        // Object.assign(객체): 해당 객체 복제
        //      -> ex) Object.assgin({}, obj) or Object.assign({plus:1, minus:2}, obj)
        var _contents = this.state.contents.concat(
          {id:this.max_content_id, title:_title, desc:_desc}
        );
        this.setState({
          contents:_contents,
          mode:'read',
          selected_content_id:this.max_content_id
        });
      }.bind(this)}></CreateContent>

    } else if (this.state.mode === 'update') {
      _data = this.getReadMode();
      _article = <UpdateContent data={_data} onSubmit={function(_id, _title, _desc){
        var _contents = Array.from(this.state.contents);

        var i = 0;
        while(i < _contents.length) {
          if (_contents[i].id === _id) {
            _contents[i] = {id:_id, title:_title, desc:_desc};
            break;
          }
          i++;
        }

        this.setState({
          contents:_contents,
          mode:'read'
        });
      }.bind(this)}></UpdateContent>
    }

    return _article
  }

  render() {
    return (
      <div className="App">

        <Subject title={this.state.subject.title} 
        sub={this.state.subject.sub}
        onChangePage={function(){
          this.setState({mode:'welcome'});
        }.bind(this)}></Subject>

        <br></br>

        <Nav data={this.state.contents} onChangePage={function(id){
          this.setState({
            mode:'read',
            // String으로 받으면 타입 변환
            // Number(id)
            selected_content_id:id
          });
        }.bind(this)}></Nav>

        <br></br>

        <Control onChangeMode={function(_mode){
          if (_mode === 'delete') {
            // window.confirm(): 확인창
            // 확인 -> true return
            // 취소 -> false return
            if (window.confirm('Really?')) {
              var _contents = Array.from(this.state.contents)
              var i = 0;
              while(i < _contents.length) {
                if (_contents[i].id === this.state.selected_content_id) {
                  _contents.splice(i, 1);
                  break;
                }
                i++;
              }
              this.setState({
                mode:'welcome',
                contents:_contents
              });
              alert('deleted');
            }
          } else {
            this.setState({
              mode:_mode
            });
          }
        }.bind(this)}></Control>

        <br></br>

        {this.getContent()}

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
