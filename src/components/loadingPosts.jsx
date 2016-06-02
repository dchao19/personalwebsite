import React, {Component} from 'react';
import '../styles/loadingPanel';

class LoadingPostsPanel extends Component {
    static propTypes = {
        error: React.PropTypes.bool.isRequired
    }
    render() {
        return (
            <div className="loadingPanel">
                {(() => {
                    if (this.props.error) {
                        return (
                           <div className="card card-block card-inverse card-danger errorCard">
                                <h3>Error!</h3>
                                <p>There was an error loading the posts!</p>
                           </div>
                        );
                    } else {
                        return (
                            <div className="card card-block">
                                <h3>Loading</h3>
                                <p>We're loading the posts now.</p>
                            </div>
                        );
                    }
                })()}
            </div>
        );
    }
}

export default LoadingPostsPanel;
