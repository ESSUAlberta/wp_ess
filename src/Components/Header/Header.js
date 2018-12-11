import React from 'react';
import { Link } from 'react-router-dom'
import { DrawerButton } from '../../Components'
import Drawer from 'rc-drawer'
import { Menu, Icon } from 'antd';

import './style.scss'
import 'rc-drawer/assets/index.css'
import 'antd/dist/antd.css';

const SubMenu = Menu.SubMenu;
const MenuItemGroup = Menu.ItemGroup;

class Header extends React.Component {

    state = {
        isMobile: false,
        open: false
    }

    updateDimensions() {
        if (window.innerWidth < 1300) {
            this.setState({ isMobile: true });
        } else {
            this.setState({ isMobile: false });
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
                <img alt="ESS" src={`${require("../../assets/ESS_Wordmark.svg")}`}></img>
                {
                    this.state.isMobile ?
                        <div>
                            <DrawerButton onClick={() => { this.setState({ open: !this.state.open }) }} />
                        </div>
                        :
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
                }
                <Drawer placement={"right"} width={window.innerWidth < 520 ? "80vw" : "350px"} handler={false} open={this.state.open} onMaskClick={() => { this.setState({ open: !this.state.open }) }}>
                    <div className="drawerLinks">
                        <Menu
                            style={{ height: '200%' }}
                            defaultOpenKeys={['sub1']}
                            mode="inline"
                        >
                            <Menu.Item><Link to="/">Home</Link></Menu.Item>
                            <Menu.Item><Link to="/about-us">About Us</Link></Menu.Item>
                            <Menu.Item><Link to="/governance">Governance</Link></Menu.Item>
                            <Menu.Item><Link to="/get-involved">Get Involved</Link></Menu.Item>
                            <Menu.Item><Link to="/events">Events</Link></Menu.Item>
                            <Menu.Item><Link to="/services">Services</Link></Menu.Item>
                            <Menu.Item><Link to="/geer-store">GEER Store</Link></Menu.Item>
                            <Menu.Item><Link to="/gallery">Gallery</Link></Menu.Item>
                        </Menu>
                    </div>
                </Drawer>
            </div>
        );
    }
}

export default Header;
