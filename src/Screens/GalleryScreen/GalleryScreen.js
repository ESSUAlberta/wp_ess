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
                <Breadcrumb separator={<img alt=">" src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAA0AAAANBAMAAACAxflPAAAAJ1BMVEUAAACMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIzrCJbOAAAADHRSTlMAAQIOHCMmZODv9/12HtN0AAAAKUlEQVQIW2NgYGSAAAsHCB29BEKz7YIKZKML1ExC4UPlYVyYfph5EPMBE6oKHYcV2M8AAAAASUVORK5CYII=" />}>
                    <Breadcrumb.Item href="/gallery"><Icon type="home" /></Breadcrumb.Item>
                    {this.state.crumbs}
                </Breadcrumb>
            </div>
        );
    }
}

export default GalleryScreen;