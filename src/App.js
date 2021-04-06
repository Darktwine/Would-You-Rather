import React from 'react';
import './App.css';
// import {Container, Card} from 'react-bootstrap'
import CardPicker from './CardPicker.js';

class App extends React.Component {
  render() {
    return (
      <div className="App">
        <CardPicker />
      </div>
    );
  }
}

export default App;
