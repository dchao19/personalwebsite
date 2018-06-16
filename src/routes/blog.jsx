import React, {Component} from 'react';
import $ from 'jquery';
import Layout from '../components/layout.jsx';
import LoadingPostsPanel from '../components/loadingPosts';
import ShortPost from '../components/post';
import moment from 'moment';
class Blog extends Component {
    constructor(props) {
        super(props);
        this.state = {
            error: false,
            errorText: "",
            isLoading: true,
            posts: []
        };
    }

    fetchPosts() {
        $.get('https://dchaowebsiteapi.azurewebsites.net/blog/posts', data => {
            this.setState({
                posts: data.result,
                isLoading: false
            });
        }).fail(() => {
            this.setState({
                error: true
            });
        });
    }

    componentDidMount() {
        ::this.fetchPosts();
    }

    render() {
        return (
            <Layout jumboText="blog.">
                {
                    this.state.isLoading ? <LoadingPostsPanel error={this.state.error}/> : null
                }
                {(() => {
                    if (this.state.posts.length > 0) {
                        return (
                            this.state.posts.map((post, index) => {
                                var created = moment(post.createdAt).format('MMMM D, YYYY');
                                var isLastEntry = index === this.state.posts.length - 1;
                                return (
                                    <ShortPost postID={post._id} key={index} title={post.title} content={post.content} tags={post.tags} date={created} isLastEntry={isLastEntry}/>
                                );
                            })
                        );
                    } else if (!this.state.isLoading) {
                        return (
                            <div className="card card-block">
                                <h4 className="card-title">Oh no! There are no posts!</h4>
                            </div>
                        );
                    }
                })()}
            </Layout>
        );
    }
}

export default Blog;
