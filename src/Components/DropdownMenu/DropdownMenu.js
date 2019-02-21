import React from "react";
import { Link } from "react-router-dom";
import "./style.scss";

class DropdownMenu extends React.Component {
  container = React.createRef();

  data = [
    { label: "VP Communications - Joanna Bibangco", value: 1 },
    { label: "Director of Outreach - Jennifer Long", value: 2 },
    { label: "Director of Branding - Gordon Banh", value: 3 },
    {
      label: "Director of IT - Mohammad Al-Ahdal",
      value: 4,
      email: "director.it@ess.ualberta.ca"
    },
    { label: "Director of IT - Kenta Tellambura", value: 5 },
    { label: "Director of Photography - Thu Truong", value: 6 },
    { label: "Director of Publications - Aishwarya Venkitachalam", value: 7 }
  ];

  state = {
    open: false,
    value: { label: "VP Communications - Joanna Bibangco", value: 1 }
  };

  handleButtonClick = () => {
    this.setState(state => {
      return {
        open: !state.open
      };
    });
  };

  componentDidMount() {
    document.addEventListener("mousedown", this.handleClickOutside);
  }
  componentWillUnmount() {
    document.removeEventListener("mousedown", this.handleClickOutside);
  }

  handleClickOutside = event => {
    if (
      this.container.current &&
      !this.container.current.contains(event.target)
    ) {
      this.setState({
        open: false
      });
    }
  };

  render() {
    let optionItems = this.data.map(v => (
      <li key={v.value} value={v.email}>
        {v.label} <br /> <a href={v.email}>{v.email}</a>
      </li>
    ));

    return (
      <div className="container" ref={this.container}>
        <button type="button" class="button" onClick={this.handleButtonClick}>
          {this.state.value.label} >
        </button>
        {this.state.open && (
          <div class="dropdown">
            <ul>{optionItems}</ul>
          </div>
        )}
      </div>
    );
  }
}

export default DropdownMenu;
