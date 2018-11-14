import React from 'react';
import './style.scss'
import { Link } from 'react-router-dom'

class Header extends React.Component {
    render() {
        return (
            <div className="header">
                <img src={`${require("../../assets/ESS_Wordmark.svg")}`}></img>
                <div>
                    <Link to="/">Home</Link>
                    <Link to="/about-us">About Us</Link>
                    <Link to="/governance">Governance</Link>
                    <Link to="/get-involved">Get Involved</Link>
                    <Link to="/events">Events</Link>
                    <Link to="/services">Services</Link>
                    <Link to="/geer-store">GEER Store</Link>
                    <Link to="/gallery">Gallery</Link>
                </div>
            </div>
        );
    }
}

export default Header;