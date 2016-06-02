import React, {Component} from 'react';
import {withRouter} from 'react-router';
import '../styles/blogentry';

class PostShort extends Component {
    static propTypes = {
        title: React.PropTypes.string.isRequired,
        content: React.PropTypes.string.isRequired,
        tags: React.PropTypes.arrayOf(React.PropTypes.string).isRequired,
        date: React.PropTypes.string.isRequired,
        isLastEntry: React.PropTypes.bool.isRequired,
        router: React.PropTypes.shape({
            push: React.PropTypes.func.isRequired
        }).isRequired,
        postID: React.PropTypes.string.isRequired
    }

    onEntryClick() {
        this.props.router.push('/posts/' + this.props.postID);
    }

    render() {
        return (
            <div className="blogEntry" onClick={::this.onEntryClick}>
                <div className="blogEntryContainer">
                    <h2 className="entryTitle">{this.props.title}</h2>
                    <span className="postedBy">Posted by </span>
                    <a className="entryAuthor" href="/about">Daniel Chao</a>
                    <span className="onText"> on </span>
                    <span className="entryDate">{this.props.date}</span>
                    <p className="entryTags">Tags: {this.props.tags.join(", ")}</p>
                    <p className="entryContent">{this.props.content}</p>
                </div>
                <hr/>
            </div>
        );
    }
}

export default withRouter(PostShort);
