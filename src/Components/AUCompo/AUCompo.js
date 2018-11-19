import React from "react";
import "./style.scss";

class AUCompo extends React.Component {
  render() {
    return (
      <div className="aucompo">
        <h1 className="title">{this.props.title}</h1>
        <div className="content">{this.props.children}</div>
      </div>
    );
  }
}

export default AUCompo;
