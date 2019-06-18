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
          The ESS is a non-profit organization formed by undergraduate engineering students for undergraduate engineering 
          students. Every engineering student automatically becomes a member of the society and is entitled to the 
          privileges of being a member. The ESS is an umbrella society which governs the smaller departmental engineering 
          clubs and provides an aid to professional and social development of tomorrow’s engineers. 
        </AUCompo>
        <AUCompo title="OUR SERVICES">
          The ESS offers a variety of services and events. 
          These services include the EnggLink, the Handbook, The Bridge, Peer Assisted Study Sessions, and the sale of 
          engineering paper and other various merchandise at the GEER Store, which is the store run by the ESS and student 
          volunteers. The major events hosted by ESS every year include Next Level Talks, Engineering Carnival, Headshave, 
          Career Fair, and GEER Week. GEER Week deserves special attention as it is the largest engineering event of 
          the year. Spanning over a week, it is a special series of events organized and run by ESS with activities 
          such as Are You Smarter Than A First Year?, Barrel Racing, Tug-of-War, Battle of the Bands, and the Engineering Ball. 
        <br/>
          Besides these services and events, the ESS also performs crucial functions for the engineering students. 
          The ESS is the link between the students in Engineering and the Student’s Union, the Faculty of Engineering, 
          and the University of Alberta itself. It also provides student input to the Association of Professional 
          Engineers and Geoscientists of Alberta (APEGA). 
        </AUCompo>
        <AUCompo title="HOW WE'RE RUN">
          The ESS is run by an Executive team and a Board of Directors (BoD). 
          The ESS Executives are elected by the student body every March and BoD consists of the ESS Executives 
          and the 10 discipline club presidents. The Executive team runs the daily affairs of the Society whereas the 
          Board of Directors controls any matters that concern any individual club, as opposed to the Engineering 
          students as a whole. 
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
