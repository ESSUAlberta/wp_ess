import React from 'react';
import './style.scss'

class Footer extends React.Component {
    render() {
        return (
            <div className="footer">
                <div className="linksAndContactInfo">
                    {/* external links */}
                    <div className="extLinks">
                        <div>
                            <h3>External Links</h3>
                            <a href="https://uab.ca/">University of Alberta</a>
                            <a href="https://uab.ca/engineering">Faculty of Engineering UofA</a>
                            <a href="https://uab.ca/eec">Engineering Employment Center</a>
                        </div>
                    </div>
                    {/* social media accounts */}
                    <div className="socialMediaAccounts">
                        <div>
                            <h3>Social Media</h3>
                            <a href="https://www.facebook.com/UAlbertaESS/">Facebook</a>
                            <a href="https://twitter.com/UAlbertaESS/">Twitter</a>
                            <a href="https://www.instagram.com/essualberta/">Instagram</a>
                        </div>
                    </div>
                    {/* minified contact information */}
                    <div className="contactInfo">
                        <div>
                            <h3>Contact Information</h3>
                            <a href="https://www.google.com/maps/place/Donadeo+Innovation+Centre+for+Engineering/">2-300 Donadeo Innovation Centre for Engineering
                                University of Alberta
                                Edmonton, AB T6G 1H9
                            </a>
                            <a href="mailto:info@ess.ualberta.ca">info@ess.ualberta.ca</a>
                        </div>
                    </div>
                </div>
                {/* copyright notice */}
                <span className="copyrightNotice">
                    &copy; 2018 Engineering Student's Society at the University of Alberta
                </span>
            </div>
        );
    }
}

export default Footer;
