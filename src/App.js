import React from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { HomeScreen, AboutUsScreen, Errors } from "./Screens";
import { Header, Footer } from "./Components";

class App extends React.Component {
  render() {
    return (
      <Router>
        <Switch>
          <Route path="/" component={withHeaderAndFooter(HomeScreen)} exact />
          <Route path="/about-us" exact component={withHeaderAndFooter(AboutUsScreen)} />
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
