import React, { useEffect } from "react";
import { Switch, Route, useLocation, Redirect } from "react-router-dom";

import "./css/style.scss";

import { focusHandling } from "cruip-js-toolkit";

// Import pages
import Users from "./pages/Users";
import Categories from "./pages/Categories";
import Courses from "./pages/Courses";
import Login from "./pages/Login";

function App() {
  const location = useLocation();

  useEffect(() => {
    document.querySelector("html").style.scrollBehavior = "auto";
    window.scroll({ top: 0 });
    document.querySelector("html").style.scrollBehavior = "";
    focusHandling("outline");
  }, [location.pathname]); // triggered on route change

  return (
    <>
      <Switch>
        <Route exact path="/">
          <Redirect to="/courses" />
        </Route>
        <Route exact path="/courses">
          <Courses />
        </Route>
        <Route exact path="/users">
          <Users />
        </Route>
        <Route exact path="/categories">
          <Categories />
        </Route>
        <Route exact path="/login">
          <Login />
        </Route>
      </Switch>
    </>
  );
}

export default App;
