import React, {Component} from 'react';
import moment from 'moment';
import $ from 'jquery';
import Layout from '../components/layout';
import ReactMarkdown from 'react-markdown';
import CommentForm from '../components/newComment';
import CommentsView from '../components/commentsView';

class Post extends Component {
    static propTypes = {
        params: React.PropTypes.any
    }
    constructor(props) {
        super(props);
        this.state = {
            post: {},
            success: false,
            isLoading: true,
            comments: []
        };
    }

    newComment(fields) {
        $.post('http://dchaowebsiteapi.azurewebsites.net/blog/posts/' + this.props.params.id + '/comment',
        fields,
        data => {
            this.setState({
                comments: this.state.comments.concat([data.result])
            });
        });
    }

    fetchPostData() {
        $.get('http://dchaowebsiteapi.azurewebsites.net/blog/posts/' + this.props.params.id, data => {
            this.setState({
                post: data.result,
                success: true,
                isLoading: false,
                comments: data.result.comments
            });
        }).fail(() => {
            this.setState({
                post: null,
                success: false,
                isLoading: false
            });
        });
    }

    componentDidMount() {
        ::this.fetchPostData();
    }

    render() {
        return (
            <Layout jumboText="blog.">
                {(() => {
                    if (this.state.success) {
                        return (
                            <div>
                                <div className="postView">
                                    <h3>{this.state.post.title}</h3>
                                    <span className="postedBy">Posted by </span>
                                    <a className="entryAuthor" href="/about">Daniel Chao</a>
                                    <span className="onText"> on </span>
                                    <span className="entryDate">{moment(this.state.post.date).format('MMMM D, YYYY')}</span>
                                    <p className="entryTags">Tags: {this.state.post.tags.join(", ")}</p>
                                    <ReactMarkdown
                                        source={this.state.post.markdown}
                                        skipHtml={true}
                                        softBreak="br"
                                    />
                                </div>
                                <CommentForm newComment={::this.newComment}/>
                                <CommentsView comments={this.state.comments}/>
                            </div>
                        );
                    } else if (this.state.isLoading) {
                        return (
                            <div className="card card-block">
                                <h3>We are loading the post!</h3>
                            </div>
                        );
                    } else {
                        return (
                            <div className="card card-block card-inverse card-danger" style={{color: "#EEE"}}>
                                <h3>Error!</h3>
                                <p>There was an error loading that post!</p>
                           </div>
                        );
                    }
                })()}
            </Layout>
        );
    }
}

export default Post;
