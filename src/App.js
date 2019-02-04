import React, { Component } from 'react';
import './App.css';

import Navbar from './components/navbar.js';
import List from './components/list.js';

class App extends Component {
  render() {
    return (
      <div className="indigo lighten-1">
        <Navbar />
        <List />
        <p className='blue-text'> test text </p>
      </div>
    );
  }
}

export default App;
