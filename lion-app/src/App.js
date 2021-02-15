import React from 'react';
import './App.css';

const myStyle = {
  color : 'red',
  fontWeight : 700,
}

// new Component 생성 (Props)
function WorldClock2(props) {
  return (
    <div className={"WorldClock"}>
      <h2>🌎 City: {props.city}</h2>
      <p>⏰ Time: {props.time}</p>
    </div>
  )
}

// State 사용
// 요구사항 1) 시간과 분이 변화하는 것
// 요구사항 2) 동적으로 보이는 것
class WorldClock extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      hour: this.props.time,
      minute: 0,
      stop: false
    }
    /*
    // this.setState
    this.timer = setInterval(()=>{
      this.setState((state)=>(
        state.minute === 59
        ?{hour: state.hour + 1, minute: 0}
        :{minute: state.minute + 1}
      ))
    }, 1000)
    */
  }

  componentDidMount() {
    // this.setState
    this.timer = setInterval(()=>{
      this.setState((state)=>(
        state.minute === 59
        ?{hour: state.hour + 1, minute: 0}
        :{minute: state.minute + 1}
      ))
    }, 1000)
    console.log("Child Mount")
  }

  componentDidUpdate() {
    console.log("Child Update")
  }

  componentWillUnmount() {
    console.log("Child Unmount")
  }

  // arrow function 생성해야 함
  handlingClick = (event) => {
    this.setState({stop: event.target.value})
    clearInterval(this.timer)
  }


  // render: 미리 약속된 함수
  render() {
    return (
      <div className={"WorldClock"}>
        <h2>🌎 City: {this.props.city}</h2>
        <p>⏰ Time: {this.state.hour} : {this.state.minute}</p>
        <button value={true} onClick={this.handlingClick}>STOP</button>
      </div>
    )
  }
}


class App extends React.Component {

  constructor(props) {
    super(props)
    this.cityTimeData = [
      ['Seoul', 10],
      ['LA', 17],
      ['Beijing', 9],
      ['Busan', 10]
    ]

    this.state = {
      content: '',
      show: true
    }

    console.log("Parent Start")

  }

  componentDidMount() {
    console.log("Parent Mount")
  }

  componentDidUpdate() {
    console.log("Parent Update")
  }


  handlingChange = (event) => {
    this.setState({content: event.target.value})
  }

  handlingClick = (event) => {
    this.setState((prevState) => ({show: !prevState.show}))
  }

  render() {
    return (
      <div className="App">
        <h1 style={myStyle}>Hi</h1>
        <h1 className={'myStyle2'}>Hi2</h1>
        <div className={'post'}>
          <textarea value={this.state.content} onChange={this.handlingChange}></textarea>
        </div>
  
        <button onClick={this.handlingClick}>Exit</button>

        { this.state.show &&
          this.cityTimeData.map((cityTime, index)=>
          <WorldClock city={cityTime[0]} time={cityTime[1]} key={index}/>
        )}
  
      </div>
    );
  }
}


// Component
/*
function App() {
  const cityTimeData = [
    ['Seoul', 10],
    ['LA', 17],
    ['Beijing', 9],
    ['Busan', 10]
  ]

  const worldClockList = cityTimeData.map((cityTime, index)=>
      <WorldClock city={cityTime[0]} time={cityTime[1]} key={index}/>
  )

  return (
    <div className="App">
      <h1 style={myStyle}>Hi</h1>
      <h1 className={'myStyle2'}>Hi2</h1>
      <div className={'post'}>
        First Posting
      </div>

      {worldClockList}

    </div>
  );
}
*/


// Component export -> 다른 곳에서 import 가능
// default: 이 파일은 기본적으로 이것 하나만 export
export default App;
