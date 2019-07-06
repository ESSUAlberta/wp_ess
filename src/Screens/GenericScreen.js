import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { Header, Footer } from "../Components";

export class GenericScreen extends Component {
    static propTypes = {

    }

    render() {
        return (
            <div>
                Generic Screen
            </div>
        )
    }
}

function withHeaderAndFooter(Component) {
    return class includeHeaderComponent extends React.Component {
        render() {
            return (
                <div
                    style={{
                        display: "flex",
                        flexDirection: "column",
                        justifyContent: "space-between",
                        minHeight: "100vh"
                    }}
                >
                    <Header />
                    <Component />
                    <Footer />
                </div>
            )
        };
    };
}

export default GenericScreen
