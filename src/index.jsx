import React, {Component} from 'react';
import {render} from 'react-dom';
import {Router, Route, browserHistory} from 'react-router';
import About from './routes/about';
import Home from './routes/home';
import Projects from './routes/projects';
import APIStatus from './routes/apistatus';

class App extends Component {
    render() {
        return (
            <Router history={browserHistory}>
                <Route path="/" component={Home}/>
                <Route path="/about" component={About}/>
                <Route path="/projects" component={Projects}/>
                <Route path="/apistatus" component={APIStatus}/>
            </Router>
        );
    }
}

render(<App/>, document.getElementById('app'));
