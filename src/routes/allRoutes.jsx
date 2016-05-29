import React from 'react'
import {Router, Route} from 'react-router'
import Home from './home'
import About from './about'
export default (
    <Router>
    
    <Route path="/" component={Home}/>
    <Route path="/about" component={About}/>
    </Router>
)