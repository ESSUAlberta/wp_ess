import React from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { AdminRedirectScreen, AdminLoginScreen, AdminDashboardScreen, /*AdminDocumentationScreen, AdminUsersScreen, AdminPagesScreen, AdminSettingsScreen,*/ GenericScreen } from "./Screens";
import './Utils'

class App extends React.Component {
  render() {
    return (
      <Router>
        <Switch>
          <Route path="/admin" component={AdminRedirectScreen} exact />
          <Route path="/admin/login" component={AdminLoginScreen} exact />
          <Route path="/admin/dashboard" component={AdminDashboardScreen} exact />
          {/* <Route path="/admin/documentation" component={AdminDocumentationScreen} exact />
          <Route path="/admin/users" component={AdminUsersScreen} exact />
          <Route path="/admin/pages" component={AdminPagesScreen} exact />
          <Route path="/admin/settings" component={AdminSettingsScreen} exact /> */}
          <Route component={GenericScreen} />
        </Switch>
      </Router>
    );
  }
}

export default App;
