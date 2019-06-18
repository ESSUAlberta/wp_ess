import React from 'react';
import './style.scss'

import Slider from 'react-animated-slider'
import 'react-animated-slider/build/horizontal.css';

const sliderContent = [
    { title: "Take a Break", image: `${require('../../assets/homeSlider/952.jpg')}`, description: "Engineering can be Stressful. Join us for some board games!", link: null },
    // { title: "Engg Ball", link: "/EnggBall/2018/eventbrite" }
]
//available properties: title, description, link, image (css type)

export class HomeScreen extends React.Component {
    componentWillMount() {
        document.title = "ESS | Home";
    }
    render() {
        return (
            <div className="homeContent" key={"homeContent"}>
                {/* Big News Slider */}
                <div className="bigNewsSlider">
                    <Slider infinite autoplay={3000}>
                        {sliderContent.map((content, index) => {
                            return (
                                <div className="sliderSlide"
                                    onClick={content.link ? () => { window.location = content.link } : undefined}
                                    style={{
                                        cursor: content.link ? "pointer" : undefined,
                                        backgroundPosition: "50% 50%",
                                        backgroundSize: "cover",
                                        backgroundImage: content.image ? `linear-gradient(#FFFFFFFF, #FFFFFF00), url(${content.image})` : undefined,
                                    }}>
                                    <div>
                                        {content.title ? <h2>{content.title}</h2> : null}
                                        {content.description ? <div>{content.description}</div> : null}
                                    </div>
                                </div>
                            );
                        })}
                    </Slider>
                </div>


                {/* Who we are */}
                <div className="whoWeAre">
                    <h1>What is the Engineering Student's Scoiety?</h1>
                    <p>The Engineering Students’ Society of the University of Alberta is a non-profit organization founded in 1919. Consisting of over 60 titled positions, the ESS advocates for the 4200 engineering students’ interests at the faculty and university levels, offers academic and professional development opportunities, and builds community among engineering students.</p>
                </div>


                {/* What we offer */}
                <div className="whatWeOffer">
                </div>


                {/* Social Media Feed */}
                <div className="socialMediaFeed">
                    
                </div>
            </div>

        );
    }
}

export default HomeScreen;