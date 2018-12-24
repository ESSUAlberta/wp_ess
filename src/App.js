
import React from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { AboutUsScreen, Errors, EventsScreen, GalleryScreen, GeerStoreScreen, GetInvolvedScreen, GovernanceScreen, HomeScreen, ServicesScreen } from "./Screens";
import { Header, Footer } from "./Components";

class App extends React.Component {
  render() {
    return (
      <Router>
        <Switch>
          <Route path="/" component={withHeaderAndFooter(HomeScreen)} exact />

          <Route path="/about-us" exact component={withHeaderAndFooter(AboutUsScreen)} />
          <Route path="/about-us/history-and-traditions" exact component={withHeaderAndFooter(AboutUsScreen.HistoryAndTraditions)} />
          <Route path="/about-us/our-team" exact component={withHeaderAndFooter(AboutUsScreen.OurTeam)} />
          <Route path="/about-us/our-affiliates" exact component={withHeaderAndFooter(AboutUsScreen.OurAffiliates)} />
          <Route path="/about-us/contact" exact component={withHeaderAndFooter(AboutUsScreen.Contact)} />

          <Route path="/governance" exact component={withHeaderAndFooter(GovernanceScreen)} />

          <Route path="/get-involved" exact component={withHeaderAndFooter(GetInvolvedScreen)} />

          <Route path="/events" exact component={withHeaderAndFooter(EventsScreen)} />

          <Route path="/services" exact component={withHeaderAndFooter(ServicesScreen)} />

          <Route path="/geer-store" exact component={withHeaderAndFooter(GeerStoreScreen)} />

          <Route path="/gallery" exact component={withHeaderAndFooter(GalleryScreen)} />

          <Route component={Errors.Error404} />

        </Switch>
      </Router>
    );
  }
}

function withHeaderAndFooter(Component) {
  return class includeHeaderComponent extends React.Component {
    render() {
      return (
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "space-between",
            minHeight: "100vh"
          }}
        >
          <Header />
          <Component />
          <Footer />
        </div>
      )
    };
  };
}

export default App;
