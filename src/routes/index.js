import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { routes } from "./define.routes";
import PrivateRoute from "./PrivateRoute";
import PublicRoute from "./PublicRoute";
import NotFound from "../pages/NotFound";

export default function Routes() {
  return (
    <Router>
      <Switch>
        {routes.map((route, index) =>
          route.auth ? (
            <PrivateRoute
              exact
              key={index}
              path={route.path}
              component={route.component}
            />
          ) : (
            <PublicRoute
              exact
              key={index}
              path={route.path}
              component={route.component}
            />
          )
        )}
        <Route component={NotFound} />
      </Switch>
    </Router>
  );
}
