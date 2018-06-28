import React, { Component } from "react";
import { Container } from "semantic-ui-react";
import { Route, Switch } from "react-router-dom";
import Loadable from 'react-loadable';
import LoadingComponent from '../../app/layout/LoadingComponent';
import ModalManager from '../../features/modals/ModalManager';
import { UserIsAuthenticated } from '../../features/auth/authWrapper';

const AsyncHomePage = Loadable({
  loader: () => import("../../features/home/HomePage"),
  loading: LoadingComponent
})

const AsyncPrivacyPage = Loadable({
  loader: () => import("../../features/privacypolicy/PrivacyPolicy"),
  loading: LoadingComponent
})

const AsyncEventForm = Loadable({
  loader: () => import("../../features/event/EventForm/EventForm"),
  loading: LoadingComponent
})

const AsyncNavBar = Loadable({
  loader: () => import("../../features/nav/NavBar/NavBar"),
  loading: LoadingComponent
})

const AsyncFooter = Loadable({
  loader: () => import("../../features/footer/footer"),
  loading: LoadingComponent
})

const AsyncEventDashboard = Loadable({
  loader: () => import("../../features/event/EventDashboard/EventDashboard"),
  loading: LoadingComponent
})

const AsyncSettingsDashboard = Loadable({
  loader: () => import("../../features/user/Settings/SettingsDashboard"),
  loading: LoadingComponent
})

const AsyncEventDetailedPage = Loadable({
  loader: () => import("../../features/event/EventDetailed/EventDetailedPage"),
  loading: LoadingComponent
})

const AsyncPeopleDashboard = Loadable({
  loader: () => import("../../features/user/PeopleDashboard/PeopleDashboard"),
  loading: LoadingComponent
})

const AsyncUserDetailedPage = Loadable({
  loader: () => import("../../features/user/UserDetailed/UserDetailedPage"),
  loading: LoadingComponent
})

const AsyncNotFound = Loadable({
  loader: () => import('../../app/layout/NotFound'),
  loading: LoadingComponent
})


class App extends Component {
  render() {
    return (
      <div>
        <ModalManager />
        <Switch>
          <Route exact path="/" component={AsyncHomePage} />
        </Switch>

        <Route
          path="/(.+)"
          render={() => (
            <div>
              <AsyncNavBar />
              <Container className="main">
                <Switch>
                  <Route path="/events" component={AsyncEventDashboard} />
                  <Route path="/event/:id" component={AsyncEventDetailedPage} />
                  <Route path="/manage/:id" component={UserIsAuthenticated(AsyncEventForm)} />
                  <Route path="/people" component={UserIsAuthenticated(AsyncPeopleDashboard)} />
                  <Route path="/profile/:id" component={UserIsAuthenticated(AsyncUserDetailedPage)} />
                  <Route path="/settings" component={UserIsAuthenticated(AsyncSettingsDashboard)} />
                  <Route path="/createEvent" component={UserIsAuthenticated(AsyncEventForm)} />
                  <Route path="/privacy" component={UserIsAuthenticated(AsyncPrivacyPage)} />
                  <Route path="/error" component={AsyncNotFound} />
                  <Route component={AsyncNotFound} />
                </Switch>
              </Container>
              <AsyncFooter />
            </div>
          )}
        />
      </div>
    );
  }
}

export default App;
