import React from "react";
import { HashRouter, Route, Switch, Redirect } from "react-router-dom";
import { connect } from "react-redux";
import Home from "@/views/home";
class Router extends React.Component {
  render() {
    return (
      <HashRouter>
        <Switch>
          <Route
            path="/"
            render={() => {
                return <Home />
            }}
          />
        </Switch>
      </HashRouter>
    );
  }
};

export default Router;
