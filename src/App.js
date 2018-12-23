
import React from 'react';
import { HomeScreen, AboutUsScreen, ContactUsScreen, Errors } from "./Screens";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { Header, Footer } from "./Components";

class App extends React.Component {
  render() {
    return (
      <Router>
        <Switch>
          <Route path="/" component={withHeaderAndFooter(HomeScreen)} exact />
          <Route path="/about-us" exact component={withHeaderAndFooter(AboutUsScreen)} />
          <Route path="/contact-us" component={withHeaderAndFooter(ContactUsScreen)} />
          <Route component={Errors.Error404} />
        </Switch>
      </Router>
    );
  }
}

function withHeaderAndFooter(Component) {
  return class includeHeaderComponent extends React.Component {
    render() { return ([<Header id="header" />, <Component id="compo" />, <Footer id="footer" />]) };
  };
}

export default App;
