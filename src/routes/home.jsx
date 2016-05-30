import React, {Component} from 'react';
import Layout from '../components/layout';

class Home extends Component {
    render() {
        return (
            <Layout jumboText="hi.">
                <strong><h3>Hello!</h3></strong>
                <p> Hi. I'm Daniel Chao, a freshman at Kent Denver School in Englewood, Colorado. I work at Readytalk as an extended-hire engineering intern. This website is also my AP Computer Science final project.</p>
            </Layout>
        );
    }
}

export default Home;
