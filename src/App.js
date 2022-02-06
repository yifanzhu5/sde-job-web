import React, { Component } from 'react';
import { ConfigProvider } from "antd";      // general config antd
// import zhCN from "antd/es/locale/zh_CN";
// import store from "./store";
import Router from "./router";

class App extends Component {
  render() { 
    return (
      <ConfigProvider >
        <Router />
      </ConfigProvider>
    );
  }
}
 
export default App;
