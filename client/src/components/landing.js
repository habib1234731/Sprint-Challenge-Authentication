import React from 'react';
import { Button } from 'reactstrap';

class Landing extends React.Component {
    constructor(props){
        super(props);
    }
    render() {
        return(
            <div>
                <Button onClick={() => this.props.history.push('/signup')}>
                    Sign Up
                </Button>
                <Button onClick={() => this.props.history.push('/signin')}>
                    Sign In
                </Button>
            </div>
        )
    }
}

export default Landing;