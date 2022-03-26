import React from "react";
import {Form, message} from 'antd';
import loginImg from "../../assets/login.svg";
import {LockOutlined, UserOutlined} from "@ant-design/icons";
import axios from "axios";
import md5 from 'md5';

export class Register extends React.Component {
    constructor(props) {
        super(props);
    }

    state = {
        username: "",
        email: "",
        password: "",
    };

    handleClick = () => {
        let userInfo = new FormData();
        userInfo.append('username', this.state.username);
        userInfo.append('email', this.state.email);
        userInfo.append('password', this.state.password);
        axios.post(`api/v1/register`,
            userInfo,
            {headers:{'Content-Type':'application/x-www-form-urlencoded'}})
            .then((res) => {
                const [isValidUsername, isValidEmail] = res.data.isRegistered
                if (isValidUsername && isValidEmail) {
                    message.success(
                        "Registration success! Redirect to login page after 3 seconds!",
                        3,
                        onclose);
                    setTimeout(function () {
                        window.location = "http://localhost:3000/login";
                    }, 3000);
                } else {
                    if (!isValidUsername && !isValidEmail) {
                        message.error(
                            "The username and email address are already taken!",
                            3,
                            onclose);
                    } else if (!isValidUsername) {
                        message.error(
                            "The username is already taken!",
                            3,
                            onclose);
                    } else if (!isValidEmail) {
                        message.error(
                            "The email is already taken!",
                            3,
                            onclose);
                    }
                }
            }).catch((data) => {
            console.log('error', data)
        })
    }

    render() {
        return (
            <div className="base-container" ref={this.props.containerRef}>
                <div className="header">Register</div>
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
                                {
                                    max: 20,
                                    message: 'Username must be at most 20 characters in length!',
                                },
                                {
                                    pattern: /^[A-Za-z\d_]+$/,
                                    message: 'Username can only contains letters, numbers and underscores',
                                },
                            ]}
                        >
                            <input
                                prefix={<UserOutlined className="site-form-item-icon"/>}
                                placeholder="username"
                                onChange={(e) => {
                                    this.setState({username: e.target.value});
                                }}
                            />
                        </Form.Item>
                        <Form.Item
                            name="email"
                            rules={[
                                {
                                    required: true,
                                    message: 'Please input your email!',
                                },
                                {
                                    pattern: /^[A-Za-z\d]+([-_.][A-Za-z\d]+)*@([A-Za-z\d]+[-.])+[A-Za-z\d]{2,4}$/,
                                    message: 'Please input valid email address!',
                                },
                            ]}
                        >
                            <input
                                prefix={<LockOutlined className="site-form-item-icon"/>}
                                type="email"
                                placeholder="email"
                                onChange={(e) => {
                                    this.setState({email: e.target.value});
                                }}
                            />
                        </Form.Item>
                        <Form.Item
                            // className="form-group"
                            name="password"
                            rules={[
                                {
                                    required: true,
                                    message: 'Please input your password!',
                                },
                                {
                                    max: 10,
                                    message: 'Password must be at most 10 characters in length!',
                                },
                                {
                                    min: 6,
                                    message: 'Password must be at least 6 characters in length!',
                                },
                                {
                                    pattern: /^[A-Za-z\d_]+$/,
                                    message: 'Username can only contains letters, numbers and underscores',
                                },
                            ]}
                        >
                            <input
                                prefix={<LockOutlined className="site-form-item-icon"/>}
                                type="password"
                                placeholder="password"
                                onChange={(e) => {
                                    this.setState({password: md5(e.target.value)});
                                }}
                            />
                        </Form.Item>
                    </Form>
                </div>
                <div className="footer">
                    <button
                        type="button"
                        className="btn"
                        onClick={this.handleClick}
                    >
                        Register
                    </button>
                </div>
            </div>
        );
    }
}

export default Register