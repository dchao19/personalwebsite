import React, {Component} from 'react';
import {FormGroup, ControlLabel, FormControl, Button} from 'react-bootstrap';

class CommentForm extends Component {
    fields = {
        name: "",
        text: ""
    }

    static propTypes = {
        newComment: React.PropTypes.func.isRequired
    }

    handleNameChange(event) {
        this.fields.name = event.target.value;
    }

    handleTextChange(event) {
        this.fields.text = event.target.value;
    }

    submitButton() {
        console.log("pressed: " + this.fields);
        this.props.newComment(this.fields);
    }

    render() {
        return (
            <div>
            <br/>
            <hr/>
            <h3>Leave a comment!</h3>
            <form>
                <FormGroup controlId="commentName">
                    <ControlLabel>Name</ControlLabel>
                    <FormControl type="text" placeholder="Who are you?" onChange={::this.handleNameChange}/>
                </FormGroup>
                <FormGroup controlId="commentText">
                    <ControlLabel>Comment</ControlLabel>
                    <FormControl type="text" componentClass="textarea" placeholder="What do you want to say?" onChange={::this.handleTextChange}/>
                </FormGroup>
                <Button bsStyle="primary" bsSize="large" onClick={::this.submitButton} className="submitButton">
                    Submit!
                </Button>
            </form>
            <hr/>
            </div>
        );
    }
}

export default CommentForm;
