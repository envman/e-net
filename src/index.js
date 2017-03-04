import { Router, Route, hashHistory } from 'react-router'
import React from 'react'
import ReactDOM from 'react-dom'
import App from './App'
import NewStarter from './NewStarter'
import './index.css'

ReactDOM.render(
  (<Router history={hashHistory}>
    <Route path="/" component={App}/>
    <Route path="/newstarter" component = {NewStarter}/>
  </Router>),
  document.getElementById('root')
);
