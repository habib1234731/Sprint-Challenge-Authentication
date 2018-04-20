import React, { Component } from 'react';
import axios from 'axios';
import { Button, Form, FormGroup, Label, Input, FormText } from 'reactstrap';

class Auth extends Component {
    state = {
        username : '',
        password : '',
    };

    render() {
        return (
            <Form>
                <FormGroup onSubmit= { this.submitHandler }>
                <Label>User Name</Label>
                <Input type="text" name="username" value={this.state.username} onChange={ this.inputHandler } placeholder="Enter your user name" />
                </FormGroup>
                <FormGroup>
                <Label for="examplePassword">Password</Label>
                <Input type="password" name="password" value={this.state.password} onChange={ this.inputHandler } placeholder="Enter your password" />
                </FormGroup>
                <Button>Submit</Button>
            </Form>
        );
    }
    inputHandler = ({ target }) => {
        const { name, value } = target;
        this.setState({ [name]: value });
    }
    submitHandler = e => {
        e.preventDefault();
        axios
            .post('http://loalhost:5000/api/login', this.state)
            .then( response => {
                console.log('response', response.data);
                this.props.onSignin(response.data);
                //this.props.history.push('/');
            })
            .catch( error => {
                console.log('error', error);
            })
    }
}

export default Auth;