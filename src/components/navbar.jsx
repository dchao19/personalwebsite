import React, {Component} from 'react';
import {Link} from 'react-router';
import '../styles/nav';

class NavigationBar extends Component {
    render() {
        return (
            <nav className="navigation">
                <Link className="nameHeader" to="/">daniel chao</Link>
                <div className="headerLinks">
                    <ul className="headerList">
                        <li className="navListItem"><Link to="/" className="navItem">home</Link></li>
                        <li className="navListItem"><Link to="/about" className="navItem">about me</Link></li>
                        <li className="navListItem"><Link to="/projects" className="navItem">projects</Link></li>
                        <li className="navListItem"><Link to="/connect" className="navItem">let's talk</Link></li>
                        <li className="navListItem"><Link to="/blog" className="navItem">blog</Link></li>
                        <li className="navListItem"><a href="https://github.com/dchao19/" className="navItem">github</a></li>
                    </ul>
                </div>
            </nav>
        );
    }
}

export default NavigationBar;
