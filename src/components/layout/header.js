import React from "react";
import {Menu, Button} from 'antd';
import {Link} from 'react-router-dom'
import axios from "axios";


class CustomHeader extends React.Component {

    state = {
        current: 'jobs',
    };

    componentDidMount() {
        const config = {
            headers: {
                token: localStorage.getItem('token')
            }
        }
        axios.get('/api/v1/user', config).then(
            res => {
                this.setState({
                    user: res.data
                });
            },
            err => {
                console.log(err);
            }
        )
    }

    handleClick = e => {
        this.setState({current: e.key}, () => {
        });
    };

    handleLogout = () => {
        axios.post(`api/v1/logout`).then((res) => {
            if (res.data.message === "logout succeed") {
                localStorage.clear();
                window.location.href = "http://localhost:3000/jobs"
            }
        }).catch((data) => {
            console.log('error', data)
        })
    }

    render() {
        const {current} = this.state;

        let welcome
        if (this.state.user) {
            welcome = (
                <div>
                    Hi {this.state.user.username}!
                </div>
            )
        }

        let button
        if (this.state.user) {
            button = (
                <Button
                    type="button"
                    onClick={this.handleLogout}
                >
                    Logout
                </Button>
            )
        } else {
            button = (
                <a href="http://localhost:3000/login">
                    <Button type="button">
                        Login
                    </Button>
                </a>
            )
        }

        return (
            <div class={"custom-header"}>
                <div class={"custom-header-left"}>
                    CA-SDE-JOBS
                </div>
                <div class={"custom-header-mid"}>
                    <Menu
                        onClick={this.handleClick}
                        selectedKeys={[current]}
                        mode="horizontal">

                        <Menu.Item key="jobs">
                            Jobs
                            {<Link to="jobs"/>}
                        </Menu.Item>
                        <Menu.Item key="companies">
                            Companies
                            {<Link to="companies"/>}
                        </Menu.Item>
                    </Menu>
                </div>
                <div class={"custom-header-right"}>
                    {welcome}
                    {button}
                </div>
            </div>


        );
    }
}

export default CustomHeader;