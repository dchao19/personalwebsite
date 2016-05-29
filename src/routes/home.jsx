import React, {Component} from 'react'
import NavigationBar from '../components/navbar'
import '../styles/home.scss'

export default class Home extends Component {
    constructor(props){
        super(props);
    }
    render(){
        return(
            <div>
                <NavigationBar/>
            </div>
        )
    }
}