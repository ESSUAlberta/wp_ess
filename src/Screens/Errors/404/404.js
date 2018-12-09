import React from 'react';
import './style.scss';
import { Link } from 'react-router-dom'
import { InformativeTextBox } from '../../../Components';

export default class Error404 extends React.Component {
    render() {
        return (
            [
                <div className="E404S">
                    <div>
                        <Link to="/">
                            <img alt="Home" src={require('../../../assets/ESS_Wordmark.svg')} />
                        </Link>
                        <InformativeTextBox>
                            <h1>Error 404 | Page not found</h1>
                            {"Looks like you're lost! Let's head back "}
                            <Link to="/">home</Link>
                        </InformativeTextBox>
                    </div>
                </div>
            ]
        );
    }
}