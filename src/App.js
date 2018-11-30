import React from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import { HomeScreen, AboutUsScreen, ContactUsScreen } from "./Screens";
import { Header } from "./Components";

class App extends React.Component {
  render() {
    return (
      <Router>
        <div>
          <Header />
          <Route path="/" component={HomeScreen} exact />
          <Route path="/about-us" component={AboutUsScreen} />
          <Route path="/contact-us" component={ContactUsScreen} />
        </div>
      </Router>
    );
  }
}

export default App;
