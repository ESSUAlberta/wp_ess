import React from "react";
import { AUCompo, PageTitle } from "../../Components";
import "./style.scss";

export class AboutUsScreen extends React.Component {
  componentWillMount() {
    document.title = "ESS | About Us";
  }

  render() {
    return (
      <div className="aboutUsScreen">
        <PageTitle>About Us</PageTitle>
        <AUCompo title="OUR MISSION">
          To promote professional awareness among engineering students by
          encouraging a sense of unity and integrity through the combined
          efforts of all engineers working together in both social and technical
          activities.
        </AUCompo>
        <AUCompo title="OUR 2018-2019 GOALS">
          To represent all undergraduate engineering students to the University,
          the campus community and the public.
          <br />
          To promote engagement among student members through a new website and
          greater outreach and marketing.
          <br />
          To encourage development among members and improve relations with
          alumni through the Engineering Students’ Society Career Fair, mixers
          and an alumni focused social event; and,
          <br />
          To create a healthy environment necessary for member success through
          social and charity events, our mentorship program, Peer Assisted Study
          Sessions (PASS) and other various health and wellness initiatives.
        </AUCompo>
        <AUCompo title="CONTACT US">
          <h2>Mailing Address</h2>
          <p>
            2-300 Donadeo Innovation Centre for Engineering
            <br />
            University of Alberta
            <br />
            Edmonton, AB T6G 1H9
          </p>
          <h2>Office Hours</h2>
          <p>
            Monday – Friday: 9:00am – 4:00pm
            <br />
            Saturday – Sunday: Closed
          </p>
          <h2>Phone</h2>
          <p>
            Office: 780.492.6334
            <br />
            Fax: 780.492.0500
          </p>
          <h2>Email</h2>
          <p>
            info@ess.ualberta.ca
            <br />
            esscomm@ualberta.ca
            <br />
            vp.external@ess.ualberta.ca
          </p>
        </AUCompo>
      </div>
    );
  }
}

export default AboutUsScreen;
