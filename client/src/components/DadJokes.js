import React, { Component } from 'react';
import axios from 'axios';
import { CardColumns, Card, CardHeader, CardText } from 'reactstrap';

class DadJokes extends Component {
  state = {
      jokes: [],
  };
  componentDidMount() {
      const token = localStorage.getItem('authToken');
  
      const requestOptions = {
        headers: {
          Authorization: token,
        },
      };
  
      axios
        .get('http://localhost:5000/api/jokes', requestOptions)
        .then(response => {
          this.setState({ jokes: response.data});
        })
        .catch(err => {
          console.log(err);
        });
  };
  render() {
    return (
      <CardColumns>
        {this.state.jokes.map(joke => {
          return (
            <Card >
              <CardHeader >{joke.setup}</CardHeader>
              <CardText >{joke.punchline}</CardText>
            </Card>
          );
        })}
      </CardColumns>
    );
  }
};

export default DadJokes;