import React from "react";
import { Form } from 'antd';
import loginImg from "../../assets/login.svg";
import {LockOutlined, UserOutlined} from "@ant-design/icons";

export class Register extends React.Component {
    constructor(props) {
        super(props);
    }

    // render() {
    //     return (
    //             <div className="base-container" ref={this.props.containerRef}>
    //                 <div className="header">Register</div>
    //                 <div className="content">
    //                     <div className="image">
    //                         <img src={loginImg}/>
    //                     </div>
    //                     <div className="form">
    //                         <div className="form-group">
    //                             <label htmlFor="userId">UserId</label>
    //                             <input type="text" name="userId" placeholder="userId"/>
    //                         </div>
    //                         <div className="form-group">
    //                             <label htmlFor="email">Email</label>
    //                             <input type="text" name="email" placeholder="email"/>
    //                         </div>
    //                         <div className="form-group">
    //                             <label htmlFor="password">Password</label>
    //                             <input type="text" name="password" placeholder="password"/>
    //                         </div>
    //                     </div>
    //                 </div>
    //                 <div className="footer">
    //                     <button type="button" className="btn">
    //                         Register
    //                     </button>
    //                 </div>
    //             </div>
    //     );
    // }

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
                            // className="form-group"
                            name="userId"
                            rules={[
                                {
                                    required: true,
                                    message: 'Please input your userId!',
                                },
                                {
                                    max: 20,
                                    message: 'UserId must be at most 20 characters in length!',
                                },
                                {
                                    pattern: /^[A-Za-z\d_]+$/,
                                    message: 'UserId can only contains letters, numbers and underscores',
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
                            name="email"
                            rules={[
                                {
                                    required: true,
                                    message: 'Please input your email!',
                                },
                                {
                                    pattern: /^\w+@\w+\.(com)$|(cn)$/,
                                    message: 'Please input valid email address!',
                                },
                            ]}
                        >
                            <input
                                prefix={<LockOutlined className="site-form-item-icon" />}
                                type="email"
                                placeholder="email"
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
                                },                                {
                                    pattern: /^[A-Za-z\d_]+$/,
                                    message: 'UserId can only contains letters, numbers and underscores',
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
                        Register
                    </button>
                </div>
            </div>
        );
    }
}