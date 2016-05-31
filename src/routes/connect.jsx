import React, {Component} from 'react';
import {FormGroup, ControlLabel, FormControl, Button} from 'react-bootstrap';
import Layout from '../components/layout';
import '../styles/connect.scss';

class Connect extends Component {
    formData = {
        name: "",
        fromEmail: "",
        emailSubject: "",
        emailContent: ""
    }

    constructor(props) {
        super(props);
        this.submitClick = this.submitClick.bind(this);
        this.handleEmailChange = this.handleEmailChange.bind(this);
        this.handleNameChange = this.handleNameChange.bind(this);
        this.handleSubjectChange = this.handleSubjectChange.bind(this);
        this.handleMessageChange = this.handleMessageChange.bind(this);
    }

    submitClick() {
        var data = '?body=' + this.formData.emailContent + '&subject=' + this.formData.emailSubject;
        var encoded = encodeURI(data);
        window.location.href = "mailto:daniel@danielchao.me" + encoded;
    }

    handleNameChange(event) {
        this.formData.name = event.target.value;
    }

    handleEmailChange(event) {
        this.formData.fromEmail = event.target.value;
    }

    handleSubjectChange(event) {
        this.formData.emailSubject = event.target.value;
    }

    handleMessageChange(event) {
        this.formData.emailContent = event.target.value;
    }

    render() {
        return (
            <Layout jumboText="connect.">
                <div className="content">
                    <h3>Wanna chat?</h3>
                    <p>Connect with me using the below form.</p>
                    <div className="form">
                        <form>
                            <FormGroup controlId="formName">
                                <ControlLabel>Name</ControlLabel>
                                <FormControl type="text" placeholder="Who are you?" onChange={this.handleNameChange}/>
                            </FormGroup>
                            <FormGroup controlId="formSubject">
                                <ControlLabel>Subject</ControlLabel>
                                <FormControl type="text" placeholder="What topic are you connecting about?" onChange={this.handleSubjectChange}/>
                            </FormGroup>
                            <FormGroup controlId="formMessage">
                                <ControlLabel>Message</ControlLabel>
                                <FormControl className="messageText" componentClass="textarea" placeholder="What do you want to say?" onChange={this.handleMessageChange}/>
                            </FormGroup>
                            <Button bsStyle="primary" bsSize="large" onClick={this.submitClick} className="submitButton">
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
