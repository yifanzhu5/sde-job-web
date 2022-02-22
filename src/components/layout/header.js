// import

// const { Header } = Layout;

import {PageHeader, Tooltip} from 'antd';
import {Menu} from 'antd';
import {MailOutlined, AppstoreOutlined, SettingOutlined, LinkOutlined} from '@ant-design/icons';
import React from "react";
import { Avatar } from 'antd';
import { UserOutlined } from '@ant-design/icons';


const {SubMenu} = Menu;

class CustomHeader extends React.Component {
    render() {
        return (
            <div class={"custom-header"}>
                <div class={"custom-header-left"}>
                    CASDEJOBS
                </div>
                <div class={"custom-header-mid"}>
                    <Menu mode="horizontal">
                        <Menu.Item key="mail">
                            Home
                        </Menu.Item>
                        <Menu.Item key="alipay">
                            Jobs
                            <a href="https://ant.design" target="_blank" rel="noopener noreferrer" />
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