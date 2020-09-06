import React, {useState} from 'react';
import './App.css';

function App() {
  return (
    <div className="container">
      <h1>Hello World</h1>
      <FuncComp initNum={2}></FuncComp>
      <ClassComp initNum={2}></ClassComp>
    </div>
  );
}

function FuncComp(props) {
  // React.useState(state의 초기값): 두 개의 값을 가진 배열 return
  // 첫번째 값: 상태값 -> 초기값으로 설정 가능
  // 두번째 값: 상태를 바꿀 수 있는 함수
  //            -> class의 setState 기능을 가진 함수
  // state 만들 때마다 useState() 사용
  var numberState = useState(props.initNum);
  var number = numberState[0];
  var setNumber = numberState[1];

  // useState 사용 방법(1)
  // var dateState = useState((new Date()).toString());
  // var _date = dateState[0];
  // var setDate = dateState[1];

  // useState 사용 방법 (2)
  var [_date, setDate] = useState((new Date()).toString());

  return (
    <div className="container">
      <h2>function style component</h2>
      <p>Number : {number}</p>
      <p>Date : {_date}</p>

      <input type="button" value="random" 
        onClick={function(){
          setNumber(Math.random());
        }}></input>

      <input type="button" value="date" 
        onClick={function(){
          setDate((new Date()).toString());
        }}></input>
    </div>
  );
}

class ClassComp extends React.Component {
  state = {
    number:this.props.initNum,
    date:(new Date()).toString()
  }

  render() {
    return (
      <div className="container">
        <h2>class style component</h2>
        <p>Number : {this.state.number}</p>
        <p>Date : {this.state.date}</p>

        <input type="button" value="random" 
          onClick={function(){
            this.setState({
              number:Math.random()
            })
          }.bind(this)}></input>

        <input type="button" value="date" 
          onClick={function(){
            this.setState({
              date:(new Date()).toString()
            })
          }.bind(this)}></input>
      </div>
    )
  }
}

export default App;
