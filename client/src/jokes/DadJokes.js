import React, { Component, Fragment } from 'react';
import axios from 'axios';

class DadJokes extends Component {
    state = {
        jokes: [],
    };

    render() {
        return (
            <Fragment>
                <h1>Jokes ;P</h1>
                <ul>
                    {this.state.jokes.map(joke => {
                        return <li key={ joke._id }>{ joke.punchline }</li>
                    })}
                </ul>
            </Fragment>
        )
    };

    componentDidMount() {
        const token = localStorage.getItem('authtoken');
    
        const requestOptions = {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        };
    
        axios
          .get('http://localhost:5000/api/jokes', requestOptions)
          .then(({ data }) => {
            this.setState({ jokes: data });
          })
          .catch(err => {
            console.log(err);
          });
    };
};


export default DadJokes;