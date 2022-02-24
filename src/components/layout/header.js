// import

// const { Header } = Layout;

import {PageHeader, Tooltip} from 'antd';
import {Menu} from 'antd';
import {MailOutlined, AppstoreOutlined, SettingOutlined, LinkOutlined} from '@ant-design/icons';
import React from "react";
import { Avatar } from 'antd';
import { UserOutlined } from '@ant-design/icons';
import {Link} from 'react-router-dom'

const {SubMenu} = Menu;

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
                    CASDEJOBS
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
                    <Avatar size="small" icon={<UserOutlined />} />
                </div>
            </div>


        );
    }
}

export default CustomHeader;