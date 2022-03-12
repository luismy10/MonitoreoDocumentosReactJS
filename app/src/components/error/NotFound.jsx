import React from 'react';
import { Link, withRouter } from 'react-router-dom';

class NotFound extends React.Component {
    constructor(props) {
        super(props);
        console.log("404")
    }


    render() {
        return (
            <main className="app-content">
                <div className="page-error tile">
                    <h1><i className="fa fa-exclamation-circle"></i> Error 404: Page not found</h1>
                    <p>The page you have requested is not found.</p>
                    <p>
                        <button className="btn btn-outline-info" onClick={() => this.props.history.goBack()}>Go Back</button>
                    </p>
                </div>
            </main>
        );
    }
}

export default NotFound;