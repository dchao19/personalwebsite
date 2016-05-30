import React, {Component} from 'react';
import '../styles/project.scss';

class ProjectRow extends Component {
    static propTypes = {
        title: React.PropTypes.string.isRequired,
        description: React.PropTypes.string.isRequired,
        screenshot: React.PropTypes.string.isRequired
    }
    render() {
        return (
            <div className="project">
                <div className="projectInfo">
                    <h4><strong>{this.props.title}</strong></h4>
                    <p><i>{this.props.description}</i></p>
                    <img src={this.props.screenshot}/>
                </div>
            </div>
        );
    }
}

export default ProjectRow;

