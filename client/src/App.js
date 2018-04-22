import React, { Component } from 'react';
import './App.css';
import { Route } from 'react-router-dom';
import logo from './logo.svg';
import DadJokes from './components/DadJokes.js';
//import Landing from './components/landing.js';
import Signin from './components/Signin.js';
import {Container, Row, Col} from 'reactstrap';
import PropTypes from 'prop-types';
import {BrowserRouter as Router} from 'react-router-dom';

const routes = [
  {
    path: "/",
    exact: true,
    main: () => <Signin onSignin={this.signInSuccess}/>,
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
          <div>
            { this.state.user && (
              <h1>Welcome { this.state.user.username } </h1>
            )}
          </div>
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
          {/* <Route path='/' component={Landing}/> */}
          {/* <Route path='/signin' render={props => <Signin onSignin={this.signInSuccess} />}/>
          <Route path='/jokes' component={DadJokes}/> */}
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
