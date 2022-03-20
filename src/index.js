import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import './style/index.scss'
import axios from "axios";

axios.defaults.baseURL = 'http://localhost:8080/'
axios.defaults.headers.common['Authorization'] = 'Bearer ' + localStorage.getItem('token')

ReactDOM.render(<App />, document.getElementById("root"));
