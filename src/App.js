import React from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { HomeScreen, AboutUsScreen, Errors } from "./Screens";
import { Header } from "./Components";

class App extends React.Component {
  render() {
    return (
      <Router basename="/beta/">
        <Switch>
          <Route path="/" component={withHeader(HomeScreen)} exact />
          <Route path="/about-us" exact component={withHeader(AboutUsScreen)} />
          <Route component={Errors.Error404} />
        </Switch>
      </Router>
    );
  }
}

function withHeader(Component) {
  return class includeHeaderComponent extends React.Component {
    render() { return ([<Header id="header" />, <Component id="compo" />]) };
  };
}

export default App;
