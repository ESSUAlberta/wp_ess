import React from "react";
import { Link } from "react-router-dom";
import { DrawerButton } from "../../Components";
import Drawer from "rc-drawer";
import { Menu, Dropdown } from "antd";

import "./style.scss";
import "rc-drawer/assets/index.css";
import "antd/dist/antd.css";

const SubMenu = Menu.SubMenu;
const MenuItemGroup = Menu.ItemGroup;

const themeChosen = "dark";

const aboutUsLinks = [
  <Menu.Item key="1">
    <Link to="/about-us/history-and-traditions">History and Traditions</Link>
  </Menu.Item>,
  <Menu.Item key="2">
    <Link to="/about-us/our-team">Our Team</Link>
  </Menu.Item>,
  <Menu.Item key="3">
    <Link to="/about-us/our-affiliates">Our Affiliates</Link>
  </Menu.Item>,
  <Menu.Item key="4">
    <Link to="/about-us/contact">Contact</Link>
  </Menu.Item>
];

function overlayWithLinks(links) {
  return <Menu theme={themeChosen}>{links}</Menu>;
}

class Header extends React.Component {
  state = {
    isMobile: false,
    open: false
  };

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
        <Link to="/">
          <img
            className="drawer"
            alt="ESS"
            src={`${require("../../assets/ESS_Wordmark.svg")}`}
          />
        </Link>
        {this.state.isMobile ? (
          <DrawerButton
            onClick={() => {
              this.setState({ open: !this.state.open });
            }}
          />
        ) : (
          <Menu mode="horizontal">
            <Menu.Item key="home">
              <Link to="/">Home</Link>
            </Menu.Item>

            <Dropdown
              key="about-us"
              placement="bottomCenter"
              overlay={overlayWithLinks(aboutUsLinks)}
            >
              <Link to="/about-us">About Us</Link>
            </Dropdown>
          </Menu>
        )}
        <Drawer
          placement={"right"}
          width={window.innerWidth < 520 ? "80vw" : "350px"}
          handler={false}
          open={this.state.open}
          onMaskClick={() => {
            this.setState({ open: !this.state.open });
          }}
        >
          <Menu style={{ height: "200%" }} mode="inline">
            <Menu.Item>
              <Link to="/">Home</Link>
            </Menu.Item>
            <SubMenu title="About Us">
              <Menu.Item>
                <Link to="/about-us">About Us</Link>
              </Menu.Item>
              <MenuItemGroup>{aboutUsLinks}</MenuItemGroup>
            </SubMenu>
          </Menu>
        </Drawer>
      </div>
    );
  }
}

export default Header;
