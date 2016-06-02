import React, {Component} from 'react';
import moment from 'moment';
import '../styles/commentView';

class CommentsView extends Component {
    static propTypes = {
        comments: React.PropTypes.any
    }

    render() {
        if (this.props.comments.length > 0) {
            return (
                <div>
                    {
                        this.props.comments.map((comment, index) => {
                            return (
                                <div className="commentContainer card card-block" key={index}>
                                    <h5>{comment.name}</h5>
                                    <span className="onText">Posted on </span>
                                    <span className="entryDate">{moment(comment.createdAt).format("MMMM D, YYYY")}</span>
                                    <p style={{marginBottom: 0, marginTop: "15px"}}>{comment.text}</p>
                                </div>
                            );
                        })
                    }
                </div>
            );
        } else {
            return (
                <div className="card card-block">
                    <h3 className="card-title">No comments yet!</h3>
                    <p className="card-text">Why don't you add one?</p>
                </div>
            );
        }
    }
}

export default CommentsView;
