import React, {Component} from 'react'
import {Router, Route} from 'react-router';
import Home from './routes/home'
import Layout from './components/layout'

export default class Index extends Component {
    constructor(props){
        super(props);
    }
    render(){
        return(
            <Layout title="Daniel's Website">
            </Layout>
        )
    }
}