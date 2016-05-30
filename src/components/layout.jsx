import React, {Component} from 'react';
import {Jumbotron} from 'react-bootstrap';
import NavigationBar from './navbar';
import Footer from './footer';
import '../styles/layout';

class Layout extends Component {
    static propTypes = {
        jumboText: React.PropTypes.string.isRequired,
        children: React.PropTypes.node
    }
    render() {
        return (
            <div className="container">
                <NavigationBar/>
                <Jumbotron id="jumbo">
                    <h1 id="jumboHeader">{this.props.jumboText}</h1>
                </Jumbotron>
                {this.props.children}
                <Footer/>
            </div>
        );
    }
}

export default Layout;
