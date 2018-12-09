import React from 'react';

export class HomeScreen extends React.Component {
    componentWillMount() {
        document.title = "ESS | Home";
    }
    render() {
        return (
            <div key={"homeContent"}>
                {/* Big News Slider */}
                {/* Who we are */}
                {/* What we offer */}
                {/* Social Media Feed */}
            </div>

        );
    }
}

export default HomeScreen;