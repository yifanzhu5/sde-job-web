import React from "react";
import { Avatar,Menu, Button } from 'antd';
import { UserOutlined } from '@ant-design/icons';
import {Link} from 'react-router-dom'


class CustomHeader extends React.Component {

    state = {
        current: 'jobs',
    };

    handleClick = e => {
        this.setState({ current: e.key },()=>{
        });
    };

    render() {
        const { current } = this.state;
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
                            {<Link to="jobs" />}
                        </Menu.Item>
                        <Menu.Item key="companies">
                            Companies
                            {<Link to="companies" />}
                        </Menu.Item>
                    </Menu>
                </div>
                <div class={"custom-header-right"}>
                    <a href="http://localhost:3000/login">
                        <Button type="button">
                            Login
                        </Button>
                    </a>
                </div>
            </div>


        );
    }
}

export default CustomHeader;