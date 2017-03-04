import React, { Component } from 'react'
import { Link } from 'react-router'
import ReactDOM from 'react-dom';
import logo from './logo.svg'
import './App.css'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import RaisedButtonTest from './materialTest';

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Welcome to e-net</h2>
        </div>
        <div>
          <ul role="nav">
            <li><Link to="/newstarter">New Starter</Link></li>
            <li><Link to="/api/ok">Call api/Test</Link></li>
          </ul>
        </div>
        <p className="App-intro">
          Welcome to e-net!<code>src/App.js</code> and save to reload.
        </p>

        <MuiThemeProvider>
          <RaisedButtonTest />
        </MuiThemeProvider>


      </div>
    )
  }
}

export default App;
