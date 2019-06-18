import React from 'react';
import {AUCompo} from '../../../Components'
import './style.scss'

class Employers extends React.Component {
    render() {
        return (
            <div className="careerFairEmployers">
                <AUCompo title="ESS CAREER FAIR 2020 - INFORMATION FOR EMPLOYERS">
                The University of Alberta Engineering Students’ Society (ESS) is excited to invite your company
to our 20th Annual ESS Career Fair on January 8 and 9, 2019.
                    <br />
                    <br />
                    Over the past 19 years, the student-organized ESS Career Fair has been an incredible success,
thanks to the support of companies like yours. The companies that have attended annually have
developed strong and meaningful relationships with the student body and the faculty. We are
excited for you to visit our campus and connect with our talented students at this event.
                    <br />
                    <br />
                    Check out the floor plans below to see which booths are still available! Please note however
that spots fill up fast! Make sure you register your booth as soon as you can!
                    <br />
                    {/* <br />
                    January 8th booths are officially sold out and January 9th booths are going fast! See the floor
plans below to find out which booths are available. */}
                    <br />
                    Floor Plan for January 8th, 2020
                    <br />
                    Floor Plan for January 9th, 2020
                    <br />
                    <br />
                    Click here to download the 2020 ESS Career Fair Invitation Package PDF document. This
package has more information about our career fair as well as our engineering programs, Co-op
Program, and the Engineering Employment Centre.
                    <br />
                    <br />
                    Are you a startup company? Contact us to find out what opportunities we have for you!
                    <br />
                    <br />
                    For more information and to register, please contact us at <a href="mailto:director.careerfair@ess.ualberta.ca">director.careerfair@ess.ualberta.ca</a>.
                </AUCompo>
            </div>
        );
    }
}

export default Employers;