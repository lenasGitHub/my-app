import React, { Component } from "react";
import { Route, Switch } from "react-router-dom";

import HomePage from "../features/home/HomePage";
import EventDashboard from "../features/event/EventDashboard/EventDashboard";
import EventDetailedPage from "../features/event/EventDetailed/EventDetailedPage";
import EventForm from "../features/event/EventForm/EventForm";

import LoginForm from "../features/auth/Login/LoginForm";

import SidebarNav from "../features/sidebar/SidebarNav/SidebarNav";

import TestComponent from "../../features/testarea/TestComponent";

class App extends Component {
  render() {
    return (
      <div>
        <Switch>
          <Route exact path="/" component={HomePage} />
        </Switch>

        <Route
          path="/(.+)"
          render={() => (
            <div>
              <div className="my-teachable-layout">
                <div className="container-fluid">
                  <div className="row">
                    <SidebarNav />
                    <div className="main my-teachable-dashboard">
                      <Switch>
                        <Route path="/events" component={EventDashboard} />
                        <Route
                          path="/event/:id"
                          component={EventDetailedPage}
                        />
                        <Route path="/manage/:id" component={EventForm} />
                        <Route path="/createEvent" component={EventForm} />

                        <Route path="/test" component={TestComponent} />
                        <Route path="/login" component={LoginForm} />

                        {/* <Route
                          path="/event/:id"
                          component={EventDetailedPage}
                        />
                        <Route path="/people" component={PeopleDashboard} />
                        <Route
                          path="/profile/:id"
                          component={UserDetailedPage}
                        />
                        <Route path="/settings" component={SettingsDashboard} />
                        <Route path="/createEvent" component={EventForm} /> */}
                      </Switch>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}
        />
        {/* <div className="my-teachable-layout">
          <div className="container-fluid">
            <div className="row">
              <SidebarNav />
              <div className="main my-teachable-dashboard">
                <EventDashboard />
              </div>
            </div>
          </div>
        </div> */}
      </div>
    );
  }
}

export default App;
