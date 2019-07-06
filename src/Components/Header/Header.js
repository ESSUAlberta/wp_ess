import React from 'react';
import { Link } from 'react-router-dom'

class Header extends React.Component {

    state = {
        // isMobile: false,
    }

    updateDimensions() {
        if (window.innerWidth < 1300) {
            // this.setState({ isMobile: true });
        } else {
            // this.setState({ isMobile: false });
        }
    }

    componentDidMount() {
        this.updateDimensions();
        window.addEventListener("resize", this.updateDimensions.bind(this));
    }

    componentWillUnmount() {
        window.removeEventListener("resize", this.updateDimensions.bind(this));
    }

    render() {
        return (
            <div className="header">
                Header AF
            </div>
        );
    }
}

export default Header;
