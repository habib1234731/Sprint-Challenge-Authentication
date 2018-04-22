import React, { Component } from 'react';
import './App.css';
import { Route } from 'react-router-dom';
import logo from './logo.svg';
import Landing from './components/Landing.js';
import DadJokes from './components/DadJokes.js';
import Signup from './components/Signup.js';
import Signin from './components/Signin.js';
import {Container, Row, Col} from 'reactstrap';
import PropTypes from 'prop-types';
import {BrowserRouter as Router} from 'react-router-dom';

const routes = [
  {
    path: "/",
    exact: true,
    main: (props) => <Landing {...props}/>,
  },
  {
    path: "/signup",
    main: (props) => <Container><Signup {...props}/></Container>,
  },
  {
    path: "/signin",
    main: (props) => <Signin {...props} onSignin={this.signInSuccess}/>,
  },
  {
    path: "/jokes",
    main: () =><Container><DadJokes /></Container>
  },
];

class App extends Component {
  state = {
    user: null,
  }
  render() {
    return (
      <Router>
        <Container fluid ={true} className="App">
          <Row className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
          </Row>
          <Row>
          <Col sm={12}>
                {routes.map((route, index) => (
                  <Route
                    key={index}
                    path={route.path}
                    exact={route.exact}
                    component={route.main}
                  />
                ))}
              </Col>
          </Row>
        </Container>
      </Router>
      
    );
  }
  signInSuccess = data => {
    this.state({user:data.user});
    console.log(data);
    localStorage.setItem('authToken', data.token);
    console.log(this.state);
  }
}

Container.propTypes = {
  fluid: PropTypes.bool
};

export default App;
