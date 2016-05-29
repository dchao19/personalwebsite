import React, {Component} from 'react';
export default class Layout extends Component {
    constructor(props){
        super(props);
    }
    render(){
        return (
            <html>
                <head>
                    <title>{this.props.title}</title>
                    <script src="bundle.js"></script>
                </head>
                <body>
                    {this.props.children}
                </body>
            </html>
        )
    }
}