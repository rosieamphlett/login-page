import React, { Component } from 'react';
import Login from './Login'
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src= {require('./tcm-logo.png')} alt="logo"/>
        </header>
        <div className="content">
          <Login />
        </div>
      </div>
    );
  }
}

export default App;
