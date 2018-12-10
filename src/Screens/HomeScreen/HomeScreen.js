import React from 'react';
import './style.scss'

import Slider from 'react-animated-slider'
import 'react-animated-slider/build/horizontal.css';

const sliderContent = [
    { title: "Take a Break", image: `${require('../../assets/homeSlider/952.jpg')}`, description: "Engineering can be Stressful. Join us for some board games!", link: null },
    { title: "Engg Ball", link: "/EnggBall/2018/eventbrite" }
]
//available properties: title, description, link (to + text), image (css type)

export class HomeScreen extends React.Component {
    componentWillMount() {
        document.title = "ESS | Home";
    }
    render() {
        return (
            <div key={"homeContent"}>
                {/* Big News Slider */}
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
                {/* Who we are */}
                {/* What we offer */}
                {/* Social Media Feed */}
            </div>

        );
    }
}

export default HomeScreen;