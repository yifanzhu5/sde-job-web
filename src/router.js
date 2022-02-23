import React from "react";
import {BrowserRouter,Switch, HashRouter, Route,  useLocation} from "react-router-dom";
import Home from "./page/App/home";
import PageError from "./page/App/404";

import CustomHeader from './components/layout/header.js';
import CustomFooter from './components/layout/footer.js';

const routes = [
    {
        path: "/jobs",
        component: <Home />
    },
    {
        path: "/companies",
        component: <Home />
    },
    {
        path: "/*",
        component: <PageError />
    },

];
class Router extends React.Component {
    render() {
        // return (
        //   <HashRouter>
        //     <CustomHeader></ CustomHeader>
        //     <Home />
        //     {/* <PageError /> */}
        //     {/* <Routes>
        //     <Route exact path="/login" component={Login} />
        //        <Route
        //         path="/"
        //         render={() => {
        //           return <Navigate to="/home" />
        //         }}
        //       />
        //     </Routes> */}
        //     <CustomFooter></CustomFooter>
        //   </HashRouter>
        // );
        return (
            <BrowserRouter>
                <CustomHeader></ CustomHeader>
                <Switch>
                    {routes.map((route)=>(
                        <Route path={route.path}>
                            {route.component}
                        </Route>
                    ))}
                </Switch>
                <CustomFooter></CustomFooter>
            </BrowserRouter>
        );

    }
};

export default Router;
