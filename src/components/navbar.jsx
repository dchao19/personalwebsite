import React, {Component} from 'react'
import {Navbar, Nav, NavItem} from 'react-bootstrap'
import {Link} from 'react-router'

export default class NavigationBar extends Component {
    constructor(props){
        super(props);
    }
    
    render(){
        return(
            <Navbar>
                <Navbar.Header>
                    <Navbar.Brand>
                        <Link to="/">daniel chao</Link>
                    </Navbar.Brand>
                </Navbar.Header>
                <Nav pullRight>
                    <NavItem eventKey={1} href="/">home</NavItem>
                    <NavItem eventKey={2} href="/about">about me</NavItem>
                    <NavItem eventKey={3} href="/work">my work</NavItem>
                </Nav>
            </Navbar>            
        )
    }
}