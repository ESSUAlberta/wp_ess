import React, { Component } from 'react'
import { Layout, Button } from '@essua/v1-sticks'
import { Redirect } from 'react-router-dom'

export class GenericScreen extends Component {

    state = {}

    componentDidMount() {
        console.log(`state route: dynamicpage.${window.location.pathname}`)
        global.subscribe(`dynamicpage.${window.location.pathname}`, `GenericScreenPage`, this.forceUpdate.bind(this))
        global.ESS_API({
            uri: 'getpage',
            method: 'post',
            bodyData: { path: window.location.pathname },
            stateName: `dynamicpage.${window.location.pathname}`
        })
    }

    render() {

        let data = global.getState(`dynamicpage.${window.location.pathname}`)

        if (data && !data.dirty) {
            return (this.renderPage(data))
        } else {
            return (<div>Loading Screen Place Holder</div>);
        }


    }

    renderPage(data) {
        if (data.code === 404) {
            return (this.render404());
        } else {
            return (this.renderContent(data));
        }
    }

    render404() {
        return (
            <div className="ess_error404">
                <h1>How did we wind up here?</h1>
                <p>This page does not exist - how about we take you back home?</p>
                <Button size="large" theme="light" style="solid" onClick={() => { this.setState({ goHome: true }) }}>Go Home</Button>
                {this.state.goHome ? <Redirect to="/" /> : null}
            </div>
        );
    }

    renderContent(data) {
        return (
            <Layout type={data.type} data={data.content} />
        );
    }
}

export default GenericScreen
