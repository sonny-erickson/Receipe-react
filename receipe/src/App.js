import React, {Component} from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  render(){
    return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <p class="">SONNY</p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Receipe HAHAHA
        </a>
        <div class="alert alert-danger" role="alert">
          A simple primary alert—check it out!
        </div>
      </header>
    </div>
  );
  }
  
}

export default App;
