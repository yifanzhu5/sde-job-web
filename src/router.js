import React from "react";
import { BrowserRouter, Switch, Route, useLocation } from "react-router-dom";
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

class ScrollToTop extends React.Component {
    componentWillReceiveProps(nextProps) {
        // 当路由切换时
        if (this.props.location !== nextProps.location) {
            const layoutContentNode = document.querySelector('.layout-content')
            // 重点在这里， 需要是在 产生 scroll 的父元素 上进行 scrollTo，而不能在window上，因为在项目中，window不是产生滑动的父元素
            layoutContentNode && layoutContentNode.scrollTo(0, 0)
        }
    }

    render() {
        return this.props.children
    }
}

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
                <ScrollToTop>
                    <CustomHeader></ CustomHeader>
                    <Switch>

                        {routes.map((route) => (
                            <Route path={route.path}>
                                {route.component}
                            </Route>
                        ))}
                    </Switch>
                    <CustomFooter></CustomFooter>
                </ScrollToTop>
            </BrowserRouter>
        );

    }
};

export default Router;
