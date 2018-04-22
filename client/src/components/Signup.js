import React, { Component } from 'react';
import axios from 'axios';
import { Button, Form, FormGroup, Label, Input } from 'reactstrap';

class Signup extends Component {
    state = {
        username: '',
        password: '',
    }
    submitHandler = e => {
        e.preventDefault();
        axios
            .post('http://localhost:5000/api/users', this.state)
            .then(response => {
                console.log('New account created! Login to continue.');
                this.props.history.push('/signin');
            })
            .catch(error => {
                alert('There was an error creating a new account');
            });
    }

    inputHandler = ({ target }) => {
        const { name, value } = target;
        this.setState({ [name]: value });
    }
    render() {
        return (
            <Form onSubmit= { this.submitHandler.bind(this) }>
            <h2>Sign Up:</h2>
                <FormGroup>
                <Label for="username">User Name</Label>
                <Input required type="text" name="username" value={this.state.username} onChange={ this.inputHandler } placeholder="Enter your user name" />
                </FormGroup>
                <FormGroup>
                <Label for="Password">Password</Label>
                <Input required type="password" name="password" value={this.state.password} onChange={ this.inputHandler } placeholder="Enter your password" />
                </FormGroup>
                <Button>Submit</Button>
            </Form>
        );
    }
}

export default Signup;