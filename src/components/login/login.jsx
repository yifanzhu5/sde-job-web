import React from "react";
import { Form } from 'antd';
import loginImg from "../../assets/login.svg";
import {LockOutlined, UserOutlined} from "@ant-design/icons";
import axios from "axios";
import Qs from "qs";

export class Login extends React.Component {
    constructor(props) {
        super(props);
    }

    state = {
        username: "",
        password: "",
    };

    handleClick = () => {
        let userInfo = new FormData();
        userInfo.append('username',this.state.username);
        userInfo.append('password',this.state.password);
        axios.post(`api/v1/login`, Qs.stringify({userInfo}))
            .then((res) => {
                const isMatch = res.data.isMatch
                if (isMatch) {
                    // alert("Login success! Redirect to home page after 3 seconds!")
                    // setTimeout(function(){ window.location = "http://localhost:3000/jobs"; },3000);
                    localStorage.setItem('token', res.data.token);
                } else {
                    alert("Incorrect username or password!")
                }
            }).catch((data) => {
            console.log('error', data)
        })
    }

    render() {
        return (
                <div className="base-container" ref={this.props.containerRef}>
                    <div className="header">Login</div>
                    <div className="content">
                        <div className="image">
                            <img src={loginImg}/>
                        </div>
                        <Form className="form">
                            <Form.Item
                                name="username"
                                rules={[
                                    {
                                        required: true,
                                        message: 'Please input your username!',
                                    },
                                ]}
                            >
                                <input
                                    prefix={<UserOutlined className="site-form-item-icon" />}
                                    placeholder="username"
                                    onChange={(e) => {
                                        this.setState({ username: e.target.value });
                                    }}
                                />
                            </Form.Item>
                            <Form.Item
                                name="password"
                                rules={[
                                    {
                                        required: true,
                                        message: 'Please input your password!',
                                    },
                                ]}
                            >
                                <input
                                    prefix={<LockOutlined className="site-form-item-icon" />}
                                    type="password"
                                    placeholder="password"
                                    onChange={(e) => {
                                        this.setState({ password: e.target.value });
                                    }}
                                />
                            </Form.Item>
                        </Form>
                    </div>
                    <div className="footer">
                        <button
                            type="button"
                            className="btn"
                            onClick= {this.handleClick}
                        >
                            Login
                        </button>
                    </div>
                </div>
        );
    }


}