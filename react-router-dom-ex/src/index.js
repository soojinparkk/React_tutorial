import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
// import App from './App';
import * as serviceWorker from './serviceWorker';
import {BrowserRouter, Route, Switch, NavLink, useParams} from 'react-router-dom';
// HashRouter: /#/

function Home() {
  return (
    <div>
      <h2>Home</h2>
      Home...
    </div>
  )
}

var contents = [
  {id:1, title:'HTML', description:'HTML is ...'},
  {id:2, title:'JS', description:'JS is ...'},
  {id:3, title:'React', description:'React is ...'}
]

// useParams: 해당 parameter 불러옴 (hook)
function Topic() {
  var params = useParams();
  var topic_id = params.topic_id;
  var selected_topic = {
    title:'Sorry',
    description:'Not Found'
  }
  for (var i=0; i<contents.length; i++) {
    if (contents[i].id === Number(topic_id)) {
      selected_topic = contents[i];
      break;
    }
  }

  return (
    <div>
      <h3>{selected_topic.title}</h3>
      {selected_topic.description}
    </div>
  )
}

function Topics() {
  var list = [];
  for (var i = 0;i < contents.length; i++) {
    list.push(
      <li key={contents[i].id}><NavLink to={'/topics/'+contents[i].id}>{contents[i].title}</NavLink></li>
    )
  }

  return (
    <div>
      <h2>Topics</h2>
      <ul>
        {list}
      </ul>

      <Route path="/topics/:topic_id">
        <Topic></Topic>
      </Route>

    </div>
  )
}

// Route 사용방법 (1)
// params를 이용해 /:id로 간단하게 사용 가능

/* Route 사용방법 (2)
<Switch>
        <Route path="/topics/1">
          HTML is ...
        </Route>
        <Route path="/topics/2">
          JS is ...
        </Route>
        <Route path="/topics/3">
          React is ...
        </Route>
      </Switch>
*/

function Contact() {
  return (
    <div>
      <h2>Contact</h2>
      Contact...
    </div>
  )
}

function App() {
  return (
    <div>
      <h1>React Router DOM</h1>

      <ul>
        <li><NavLink exact to="/">Home</NavLink></li>
        <li><NavLink to="/topics">Topics</NavLink></li>
        <li><NavLink to="/contact">Contact</NavLink></li>
      </ul>

      <Switch>
        <Route exact path="/"><Home></Home></Route>
        <Route path="/topics"><Topics></Topics></Route>
        <Route path="/contact"><Contact></Contact></Route>
        <Route path="/">Not Found</Route>
      </Switch>
      
    </div>
  )
}

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter><App /></BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root')
);


serviceWorker.unregister();
