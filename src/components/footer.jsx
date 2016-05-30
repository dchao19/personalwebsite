import React, {Component} from 'react';
import '../styles/footer';

class Footer extends Component {
    render() {
        return (
            <div className="footer">
                <span>Daniel Chao 2016 - </span>
                <a href="https://github.com/dchao19">Github</a>
                <span> - Made with </span>
                <a href="https://facebook.github.io/react">React</a>
                <span> and </span>
                <a href="https://github.com/react-router/react-router">react-router</a>
            </div>
        );
    }
}

export default Footer;
