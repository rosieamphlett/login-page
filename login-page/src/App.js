import React, { Component } from 'react';
import Login from './Login'
import './App.scss';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src= {require('./pics/Vector.png')} alt="logo"/>
        </header>

        <Login />
      </div>
    );
  }
}

export default App;
