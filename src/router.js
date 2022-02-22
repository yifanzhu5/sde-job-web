import React from "react";
import { HashRouter, Route, Routes, Navigate } from "react-router-dom";
import Home from "./page/App/home";
import PageError from "./page/App/404";

import CustomHeader from './components/layout/header.js';
import CustomFooter from './components/layout/footer.js';

class Router extends React.Component {
  render() {
    return (
      <HashRouter>
        <CustomHeader></ CustomHeader>
        <Home />
        {/* <PageError /> */}
        {/* <Routes>
        <Route exact path="/login" component={Login} /> 
           <Route
            path="/"
            render={() => {
              return <Navigate to="/home" />
            }}
          />
        </Routes> */}
        <CustomFooter></CustomFooter>
      </HashRouter>
    );
  }
};

export default Router;
