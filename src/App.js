import React, { Component } from 'react'
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
        <p className="App-intro">
          Welcome to e-net!<code>src/App.js</code> and save to reload.

          <MuiThemeProvider>
            <RaisedButtonTest/>
          </MuiThemeProvider>

        </p>
      </div>
    )
  }
}

export default App;
