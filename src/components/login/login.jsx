import React from "react";
import { Form } from 'antd';
import loginImg from "../../assets/login.svg";
import {LockOutlined, UserOutlined} from "@ant-design/icons";

export class Login extends React.Component {
    constructor(props) {
        super(props);
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
                                // className="form-group"
                                name="userId"
                                rules={[
                                    {
                                        required: true,
                                        message: 'Please input your userId!',
                                    },
                                ]}
                            >
                                {/*<label htmlFor="userId">UserId: </label>*/}
                                <input
                                    prefix={<UserOutlined className="site-form-item-icon" />}
                                    // type="text"
                                    // name="userId"
                                    placeholder="userId"
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
                                ]}
                            >
                                {/*<label htmlFor="password">Password: </label>*/}
                                <input
                                    prefix={<LockOutlined className="site-form-item-icon" />}
                                    type="password"
                                    placeholder="password"
                                />
                            </Form.Item>
                        </Form>
                    </div>
                    <div className="footer">
                        <button type="button" className="btn">
                            Login
                        </button>
                    </div>
                </div>
        );
    }


}