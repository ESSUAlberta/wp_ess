import React from 'react';
import "./style.scss"

class PageTitle extends React.Component {
    render() {
        return (
            <div className="pageTitle">
                <h1>{this.props.children}</h1>
            </div>
        );
    }
}

export default PageTitle