import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Jobs from "./page/App/jobs";
import PageError from "./page/App/404";

import CustomHeader from './components/layout/header.js';
import CustomFooter from './components/layout/footer.js';

const routes = [
    {
        path: "/jobs",
        component: Jobs
    },
    {
        path: "/companies",
        component: Jobs
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
