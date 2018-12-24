
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
          <Route path="/governance/bod-meetings" exact component={withHeaderAndFooter(GovernanceScreen.BoDMeetings)} />
          <Route path="/governance/bylaws-and-policy" exact component={withHeaderAndFooter(GovernanceScreen.BylawsAndPolicy)} />
          <Route path="/governance/finances" exact component={withHeaderAndFooter(GovernanceScreen.Finances)} />
          <Route path="/governance/senior-exec-meetings" exact component={withHeaderAndFooter(GovernanceScreen.SeniorExecMeetings)} />

          <Route path="/get-involved" exact component={withHeaderAndFooter(GetInvolvedScreen)} />
          <Route path="/get-involved/discipline-clubs" exact component={withHeaderAndFooter(GetInvolvedScreen.DisciplineClubs)} />
          <Route path="/get-involved/first-year-engg-club" exact component={withHeaderAndFooter(GetInvolvedScreen.FirstYearEnggClub)} />
          <Route path="/get-involved/student-project-groups" exact component={withHeaderAndFooter(GetInvolvedScreen.StudentProjectGroups)} />

          <Route path="/events" exact component={withHeaderAndFooter(EventsScreen)} />
          <Route path="/events/conferences" exact component={withHeaderAndFooter(EventsScreen.Conferences)} />
          <Route path="/events/events-calendar" exact component={withHeaderAndFooter(EventsScreen.EventsCalendar)} />

          <Route path="/services" exact component={withHeaderAndFooter(ServicesScreen)} />
          <Route path="/services/first-year-survival-guide" exact component={withHeaderAndFooter(ServicesScreen.FirstYearSurvivalGuide)} />
          <Route path="/services/health-and-wellness" exact component={withHeaderAndFooter(ServicesScreen.HealthAndWellness)} />
          <Route path="/services/mentorship" exact component={withHeaderAndFooter(ServicesScreen.Mentorship)} />
          <Route path="/services/pass" exact component={withHeaderAndFooter(ServicesScreen.Pass)} />
          <Route path="/services/resources" exact component={withHeaderAndFooter(ServicesScreen.Resources)} />
          <Route path="/services/textbook-exchange" exact component={withHeaderAndFooter(ServicesScreen.TextbookExchange)} />

          <Route path="/geer-store" exact component={withHeaderAndFooter(GeerStoreScreen)} />
          <Route path="/geer-store/merch" exact component={withHeaderAndFooter(GeerStoreScreen.Merch)} />
          <Route path="/geer-store/locker-rentals" exact component={withHeaderAndFooter(GeerStoreScreen.LockerRentals)} />

          <Route path="/gallery" component={withHeaderAndFooter(GalleryScreen)} />

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
            flex: 1,
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
