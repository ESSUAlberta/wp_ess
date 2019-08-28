import React from "react";
import { AUCompo, PageTitle } from "../../Components";
import "./style.scss";

export class CareerFairScreen extends React.Component {
  componentWillMount() {
    document.title = "ESS | Career Fair";
  }

  render() {
    return (
      <div className="careerFairScreen">
        <AUCompo title="ESS Sponsors 2020">
          Thank you to our 2019-2020 sponsors.
          <br />
        </AUCompo>

        <AUCompo title="Ledcor">
          We’re a diversified construction company, made up of teams of people who are proven in their industries. All working to design, build, transport, operate, and maintain projects all over North America. 
          But we believe that projects are about more than concrete and steel. They’re about people and the power of partnerships. Partnerships with our employees, our communities, our contractors and clients.
          <br />
          <img src={`${require("../../assets/sponsors/ledcor.jpg")}`} />
        </AUCompo>
        
        <AUCompo title="Qualimet">
          Qualimet is a full service mechanical and metallurgical consulting organization. We provide welding and material engineering consulting to the oil and gas, and construction industries. 
          Our services include weld procedure development, welder testing, pressure equipment design, quality management systems, failure analysis, and mechanical and metallurgical lab testing. 
          Our goal is to be the welding and metallurgical engineering company that everyone else follows.
          <br />
          <img src={`${require("../../assets/sponsors/qualimet.jpg")}`} />
        </AUCompo>
        
      </div>
    );
  }
}

export default CareerFairScreen;
