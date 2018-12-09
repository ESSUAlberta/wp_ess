import React from 'react';
import { BrowserRouter as Router, Route } from "react-router-dom";
import { HomeScreen, AboutUsScreen } from "./Screens";
import { Header } from "./Components";

class App extends React.Component {
  render() {
    return (
      <Router basename="/beta/">
        <div>
          <Header />
          <Route path="/" component={HomeScreen} exact />
          <Route path="/about-us" component={AboutUsScreen} />
        </div>
      </Router>
    );
  }
}

export default App;
