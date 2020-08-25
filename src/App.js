import React, { Component } from 'react';
import Navbar from './components/layout/Navbar.js';
import UserItem from './components/users/UserItem.js';
import './App.css';

class App extends Component {
  render () {
    return (
      <div className="App">
        <Navbar />
        <UserItem />
      </div>
    );
  }
}

export default App;
