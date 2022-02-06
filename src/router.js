import React from "react";
import { HashRouter, Route, Routes, Navigate } from "react-router-dom";
import Home from "./page/App/home";
class Router extends React.Component {
  render() {
    return (
      <HashRouter>
        <Home />
        {/* <Routes>
        <Route exact path="/login" component={Login} /> 
           <Route
            path="/"
            render={() => {
              return <Navigate to="/home" />
            }}
          />
        </Routes> */}
      </HashRouter>
    );
  }
};

export default Router;
