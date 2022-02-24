import React from "react";
import { BrowserRouter, Switch, Route, useLocation } from "react-router-dom";
import Home from "./page/App/home";
import PageError from "./page/App/404";

import CustomHeader from './components/layout/header.js';
import CustomFooter from './components/layout/footer.js';

const routes = [
    {
        path: "/jobs",
        component: Home
    },
    {
        path: "/companies",
        component: Home
    },
    {
        path: "/*",
        component: PageError
    },

];


class Router extends React.Component {
    render() {
        return (
            <BrowserRouter>
                <CustomHeader></ CustomHeader>
                <Switch>
                    {routes.map((route) => (
                        <Route {...route} />
                    ))}
                </Switch>
                <CustomFooter></CustomFooter>
            </BrowserRouter>
        );

    }
};

export default Router;
