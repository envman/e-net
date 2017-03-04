import { Router, Route, hashHistory } from 'react-router'
import React from 'react'
import ReactDOM from 'react-dom'
import App from './App'
import NewStarter from './NewStarter'
import CallGetOk from './apiCalls/callGetOk'
import './index.css'

ReactDOM.render(
  (<Router history={hashHistory}>
    <Route path="/" component={App} />
    <Route path="/newstarter" component={NewStarter} />
    <Route path="/apiCalls/callGetOk" component={CallGetOk} />
  </Router>),
  document.getElementById('root')
);
