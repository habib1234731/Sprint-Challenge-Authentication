import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Auth from './auth/auth.js';
import { Route } from 'react-router-dom';
import DadJokes from './jokes/DadJokes.js'

class App extends Component {
  state = {
    user: null,
  }
  render() {
    return (
      <div>
        <div>
          { this.state.user && (
            <h1>Welcome { this.state.user.username } </h1>
          )}
        </div>
        <Route path='/api/login' render = { props => <Auth {...props} onSignin={this.signin}/>}/>
        <Route path='/api/jokes' component={DadJokes}/>
      </div>
    );
  }

  signin = data => {
    this.setState({ user: data.user });
    localStorage.setItem('authtoken', data.token);
    console.log(this.state);
  }

}

export default App;
