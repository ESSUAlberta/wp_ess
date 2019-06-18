import React from "react";
import { AUCompo } from '../../../Components';
import "./style.scss";

export class Contact extends React.Component {
    render() {
        return (
            <div className="aboutUsContact">
                <div>
                    <AUCompo title="MAILING ADDRESS">
                        2-300 Donadeo Innovation Centre for Engineering
                        <br />
                        University of Alberta
                        <br />
                        Edmonton, AB T6G 1H9
                    </AUCompo>
                    <AUCompo title="OFFICE HOURS">
                        Monday – Friday: 9:00am – 4:00pm
                        <br />
                        Saturday – Sunday: Closed
                    </AUCompo>
                    <AUCompo title="PHONE">
                        Office: 780.492.6334
                        <br />
                        Fax: 780.492.0500
                    </AUCompo>
                    <AUCompo title="EMAIL">
                        info@ess.ualberta.ca
                        <br />
                        esscomm@ualberta.ca
                        <br />
                        vp.external@ess.ualberta.ca
                    </AUCompo>
                </div>
                <img alt="map screenshot" src={`${require("../../../assets/ContactUs_Map_Screenshot.png")}`} />
            </div>
        );
    }
}

export default Contact;
