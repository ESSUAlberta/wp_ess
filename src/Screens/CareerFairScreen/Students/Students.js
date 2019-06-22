import React from 'react';
import { AUCompo } from '../../../Components'
import './style.scss'

class Students extends React.Component {
    render() {
        return (
            <div className="careerFairStudents">
                <AUCompo title="ESS CAREER FAIR 2020 - INFORMATION FOR STUDENTS">
                    The Engineering Students’ Society (ESS) of the University of Alberta invites you to participate in
    our 20th Annual Career Fair on January 8th &amp; 9th from 10:00 AM to 3:00 PM in the ETLC
    Solarium.
                    <br />
                    <br />
                    This event will host an abundance of employers and agencies promoting their summer jobs,
                    internships, career opportunities and graduate school programs to all students and alumni.
                    These employers hire Chemical, Civil, Computer, Electrical, Engineering Physics,
                    Environmental, Materials, Mechanical, Mining and Petroleum engineering, as well as several
                    sub-streams of engineering.
                    <br />
                    <br />
                    Check out our Facebook Page.
                    <br />
                    <br />
                    To be prepared for this event, attend an Engineering Employment Centre&#39;s &quot;How to Wow at a
                    Career Fair&quot; workshop on January 7th at 5 PM or Jan 8th at 11 AM.
                    There are limited spots available for the workshop, so keep an eye out for it at <a href="https://www.uab.ca/eec">www.uab.ca/eec.</a>
                    <br />
                    <br />
                    Interested in volunteering for the 2020 ESS Career Fair? Keep an eye out on this page!
                </AUCompo>


            </div>
        );
    }
}

export default Students;