import React from 'react';

import { Breadcrumb, Icon } from 'antd'

import './style.scss'

class GalleryScreen extends React.Component {

    state = {
        crumbs: []
    }
    componentDidMount() {
        let paths = window.location.pathname.split("/")
        for (var i = 2; i < paths.length; i++) {
            if (paths[i] !== "") {
                let refPathname = paths.slice(0, i + 1).join("/");
                this.state.crumbs.push(<Breadcrumb.Item href={refPathname}>{paths[i].toUpperCase()}</Breadcrumb.Item>)
            }
        }
        this.forceUpdate();
    }
    render() {
        return (
            <div className="galleryScreen">
                <Breadcrumb separator=">">
                    <Breadcrumb.Item href="/gallery"><Icon type="home" /></Breadcrumb.Item>
                    {this.state.crumbs}
                </Breadcrumb>
            </div>
        );
    }
}

export default GalleryScreen;