import React, { Component } from 'react';
import './App.css';
import Form from './components/form/Form'

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="container">
          <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
          <a className="navbar-brand" href="#">App-Usuarios</a>
          </nav>

        <div className="jumbotron">
          <Form/>
        </div>
      </div>
      </div>
    );
  }
}

export default App;
