import React from 'react';
import { Link } from 'react-router-dom'
import { DrawerButton } from '../../Components'
import Drawer from 'rc-drawer'
import { Menu, Dropdown } from 'antd';

import './style.scss'
import 'rc-drawer/assets/index.css'
import 'antd/dist/antd.css';

const SubMenu = Menu.SubMenu;
const MenuItemGroup = Menu.ItemGroup;

const themeChosen = "dark"

const aboutUsLinks = [
    <Menu.Item><Link to="/about-us/history-and-traditions">History and Traditions</Link></Menu.Item>,
    <Menu.Item><Link to="/about-us/our-team">Our Team</Link></Menu.Item>,
    <Menu.Item><Link to="/about-us/our-affiliates">Our Affiliates</Link></Menu.Item>,
    <Menu.Item><Link to="/about-us/contact">Contact</Link></Menu.Item>
];
const governanceLinks = [
    <Menu.Item><Link to="/governance/bod-meetings">BoD Meetings</Link></Menu.Item>,
    <Menu.Item><Link to="/governance/senior-exec-meetings">Senior Exec Meetings</Link></Menu.Item>,
    <Menu.Item><Link to="/governance/bylaws-and-policy">Bylaws and Policy</Link></Menu.Item>,
    <Menu.Item><Link to="/governance/finances">Finances</Link></Menu.Item>
];
const getInvolvedLinks = [
    <Menu.Item><Link to="/get-involved/discipline-clubs">Discipline Clubs</Link></Menu.Item>,
    <Menu.Item><Link to="/get-involved/student-project-groups">Student Project Groups</Link></Menu.Item>,
    <Menu.Item><Link to="/get-involved/first-year-engg-club">First Year Engg Club</Link></Menu.Item>
];
const eventsLinks = [
    <Menu.Item><Link to="/events/events-calendar">Events Calendar</Link></Menu.Item>,
    <Menu.Item><Link to="/events/confrences">Confrences</Link></Menu.Item>
];
const servicesLinks = [
    <Menu.Item><Link to="/services/first-year-survival-guide">First Year Survival Guide</Link></Menu.Item>,
    <Menu.Item><Link to="/services/pass">PASS</Link></Menu.Item>,
    <Menu.Item><Link to="/services/mentorship">Mentorship</Link></Menu.Item>,
    <Menu.Item><Link to="/services/health-and-wellness">Health and Wellness</Link></Menu.Item>,
    <Menu.Item><Link to="/services/resources">Resources</Link></Menu.Item>,
    <Menu.Item><Link to="/services/textbook-exchange">Textbook Exchange</Link></Menu.Item>
];
const geerStoreLinks = [
    <Menu.Item><Link to="/geer-store/merch">Merch</Link></Menu.Item>,
    <Menu.Item><Link to="/geer-store/locker-rentals">Locker Rentals</Link></Menu.Item>
];

function overlayWithLinks(links) { return (<Menu theme={themeChosen}>{links}</Menu>) };

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
                <Link to="/"><img alt="ESS" src={`${require("../../assets/ESS_Wordmark.svg")}`}></img></Link>
                {
                    this.state.isMobile ?
                        <DrawerButton onClick={() => { this.setState({ open: !this.state.open }) }} />
                        :
                        <Menu mode="horizontal">
                            <div className="horizontalNavs">
                                <Menu.Item key="home"><Link to="/">Home</Link></Menu.Item>

                                <Dropdown key="about-us" placement="bottomCenter" overlay={overlayWithLinks(aboutUsLinks)}><Link to="/about-us">About Us</Link></Dropdown>

                                <Dropdown key="governance" placement="bottomCenter" overlay={overlayWithLinks(governanceLinks)}><Link to="/governance">Governance</Link></Dropdown>

                                <Dropdown key="get-involved" placement="bottomCenter" overlay={overlayWithLinks(getInvolvedLinks)}><Link to="/get-involved">Get Involved</Link></Dropdown>

                                <Dropdown key="events" placement="bottomCenter" overlay={overlayWithLinks(eventsLinks)}><Link to="/events">Events</Link></Dropdown>

                                <Dropdown key="services" placement="bottomCenter" overlay={overlayWithLinks(servicesLinks)}><Link to="/services">Services</Link></Dropdown>

                                <Dropdown key="geer-store" placement="bottomCenter" overlay={overlayWithLinks(geerStoreLinks)}><Link to="/geer-store">GEER Store</Link></Dropdown>

                                <Menu.Item key="gallery"><Link to="/gallery">Gallery</Link></Menu.Item>
                            </div>
                        </Menu>
                }
                <Drawer placement={"right"} width={window.innerWidth < 520 ? "80vw" : "350px"} handler={false} open={this.state.open} onMaskClick={() => { this.setState({ open: !this.state.open }) }}>
                    <Menu
                        style={{ height: '200%' }}
                        mode="inline"
                    >
                        <Menu.Item><Link to="/">Home</Link></Menu.Item>
                        <SubMenu title="About Us">
                            <Menu.Item><Link to="/about-us">About Us</Link></Menu.Item>
                            <MenuItemGroup>{aboutUsLinks}</MenuItemGroup>
                        </SubMenu>
                        <SubMenu title="Governance">
                            <Menu.Item><Link to="/governance">Governance</Link></Menu.Item>
                            <MenuItemGroup>{governanceLinks}</MenuItemGroup>
                        </SubMenu>
                        <SubMenu title="Get Involved">
                            <Menu.Item><Link to="/get-involved">Get Involved</Link></Menu.Item>
                            <MenuItemGroup>{getInvolvedLinks}</MenuItemGroup>
                        </SubMenu>
                        <SubMenu title="Events">
                            <Menu.Item><Link to="/events">Events</Link></Menu.Item>
                            <MenuItemGroup>{eventsLinks}</MenuItemGroup>
                        </SubMenu>
                        <SubMenu title="Services">
                            <Menu.Item><Link to="/services">Services</Link></Menu.Item>
                            <MenuItemGroup>{servicesLinks}</MenuItemGroup>
                        </SubMenu>
                        <SubMenu title="Geer Store">
                            <Menu.Item><Link to="/geer-store">GEER Store</Link></Menu.Item>
                            <MenuItemGroup>{geerStoreLinks}</MenuItemGroup>
                        </SubMenu>
                        <Menu.Item><Link to="/gallery">Gallery</Link></Menu.Item>
                    </Menu>
                </Drawer>
            </div>
        );
    }
}

export default Header;
