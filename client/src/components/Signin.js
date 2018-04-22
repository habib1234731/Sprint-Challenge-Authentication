import React, { Component } from 'react';
import axios from 'axios';
import { Button, Form, FormGroup, Label, Input } from 'reactstrap';

class Signin extends Component {
    state = {
            username : '',
            password : '',
    };
    submitHandler = e => {
        e.preventDefault();
        axios
            .post('http://localhost:5000/api/login', this.state)
            .then(response => {
                console.log('response', response.data);
                localStorage.setItem('authToken', response.data.token);
                //this.props.onSignin(response.data);
                this.props.history.push('/jokes');
            })
            .catch( error => {
                console.log('error', error);
            })
    }
    inputHandler = ({ target }) => {
            const { name, value } = target;
            this.setState({ [name]: value });
        }
    render() {
        return (
            <Form onSubmit= { this.submitHandler.bind(this) }>
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

export default Signin;