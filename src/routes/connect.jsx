import React, {Component} from 'react';
import {FormGroup, ControlLabel, FormControl, Button} from 'react-bootstrap';
import Layout from '../components/layout';
import '../styles/connect.scss';

class Connect extends Component {
    render() {
        return (
            <Layout jumboText="connect.">
                <div className="content">
                    <h3>Wanna chat?</h3>
                    <h5>Connect with me using the below form.</h5>
                    <div className="form">
                        <form>
                            <FormGroup controlId="formName">
                                <ControlLabel>Name</ControlLabel>
                                <FormControl type="text" placeholder="Who are you?"/>
                            </FormGroup>
                            <FormGroup controlId="formEmail">
                                <ControlLabel>Email</ControlLabel>
                                <FormControl type="email" placeholder="Where can I send you a response?"/>
                            </FormGroup>
                            <FormGroup controlId="formSubject">
                                <ControlLabel>Subject</ControlLabel>
                                <FormControl type="text" placeholder="What topic are you connecting about?"/>
                            </FormGroup>
                            <FormGroup controlId="formMessage">
                                <ControlLabel>Message</ControlLabel>
                                <FormControl componentClass="textarea" placeholder="What do you want to say?"/>
                            </FormGroup>
                            <Button bsStyle="primary" bsSize="large">
                                Submit!
                            </Button>
                        </form>
                    </div>
                </div>
            </Layout>
        );
    }
}

export default Connect;
