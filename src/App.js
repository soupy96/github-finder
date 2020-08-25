import React, { Component } from 'react';
import Navbar from './components/layout/Navbar.js';
import Users from './components/users/Users.js';
import Search from './components/users/Search.js';
import Alert from './components/layout/Alert.js';
import axios from 'axios';
import './App.css';

class App extends Component {
  state = {
    users: [],
    loading: false,
    alert: null
  }

  // search github users
  searchUsers = async text => {
    this.setState({ loading: true });

    const res = await axios.get(`https://api.github.com/search/users?q=${text}&client_id=${process.env.REACT_APP_GITHUB_CLIENT_ID}&client_secret=${process.env.REACT_APP_GITHUB_CLIENT_SECRET}`);

    this.setState({ users: res.data.items, loading: false });
  }

  // clear users from state
  clearUsers = () => {
    this.setState({
      users: [],
      loading: false
    });
  }

  // set alert
  setAlert = (msg, type) => {
    this.setState({ alert: {msg: msg, type: type} });

    setTimeout(() => this.setState({ alert: null }), 3000);
  }

  render () {
    const { users, loading } = this.state;

    return (
      <div className="App">
        <Navbar />
        <div className="container">
          <Alert alert={this.state.alert} />
          <Search setAlert={this.setAlert} clearUsers={this.clearUsers} searchUsers={this.searchUsers} showClear={ users.length > 0 ? true: false } />
          <Users loading={loading} users={users} />
        </div>
      </div>
    );
  }
}

export default App;
