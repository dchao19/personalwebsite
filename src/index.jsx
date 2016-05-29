import React, {Component} from 'react'
import {render} from 'react-dom';
import {Router, Route, browserHistory} from 'react-router';
import About from './routes/about'
import Home from './routes/home'

class App extends Component {
    constructor(props){
        super(props);
    }
    render(){
        return(
            <Router history={browserHistory}>
                <Route path="/" component={Home}/>
                <Route path="/about" component={About}/>
            </Router>
        )
    }
}

render(<App/>, document.getElementById('app'));