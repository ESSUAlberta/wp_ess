import React from 'react';
import './style.scss';

class InformativeTextBox extends React.Component {
    render(){
        return(
            <div className="informativeTextBox">
                {this.props.children}
            </div>
        );
    }
}

export default InformativeTextBox;