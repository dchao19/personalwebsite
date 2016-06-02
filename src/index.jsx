import React, {Component} from 'react';
import {render} from 'react-dom';
import {Router, Route, browserHistory} from 'react-router';
import About from './routes/about';
import Home from './routes/home';
import Projects from './routes/projects';
import Blog from './routes/blog';
import Connect from './routes/connect';
import Post from './routes/post';
import './styles/application';

class App extends Component {
    render() {
        return (
            <Router history={browserHistory}>
                <Route path="/" component={Home}/>
                <Route path="/about" component={About}/>
                <Route path="/projects" component={Projects}/>
                <Route path="/blog" component={Blog}/>
                <Route path="/connect" component={Connect}/>
                <Route path="/posts/:id" component={Post}/>
            </Router>
        );
    }
}

render(<App/>, document.getElementById('app'));
