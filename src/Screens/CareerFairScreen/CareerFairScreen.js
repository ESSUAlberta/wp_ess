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
        <AUCompo title="ESS CAREER FAIR 2020">
          The 20th Annual ESS Career Fair will run on January 8 and 9, 2020 from 10 AM to 3 PM, in the
  Engineering Teaching and Learning Complex Solarium on the University of Alberta North
  Campus.
          <br />
          <br />
          With over 4500 undergraduate students and 1500 graduate students from 9 engineering
  disciplines, the ESS Career Fair provides a great opportunity for engineering companies to
  connect face-to-face with some of the brightest engineering minds in Canada.
        </AUCompo>

        <div style={{display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', fontSize: "1.5em"}}>
          For more information, click the link relavant to you below:
        </div>
        <div style={{display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', fontSize: "1.5em"}}>
          <a href="/career-fair/students">Students</a>
          <a href="/career-fair/employers">Employers</a>
        </div>
        <div style={{textAlign: 'center'}}>
          Questions? Contact us at <a href="mailto:director.careerfair@ess.ualberta.ca">director.careerfair@ess.ualberta.ca</a>.
        </div>
      </div>
    );
  }
}

export default CareerFairScreen;
