// import

// const { Header } = Layout;

import {PageHeader, Tooltip} from 'antd';
import {Menu} from 'antd';
import {MailOutlined, AppstoreOutlined, SettingOutlined, LinkOutlined} from '@ant-design/icons';
import React from "react";
import { Avatar } from 'antd';
import { UserOutlined } from '@ant-design/icons';


const {SubMenu} = Menu;

// const state = {
//     current: 'mail',
//   };

// const handleClick = (e) => {
//     console.log('click ', e);
//     this.setState({ current: e.key });
//   };

// class CustomHeader extends React.Component {
//    render() {
//        return (
//            <Menu mode="horizontal">
//                <Menu.Item key="mail" icon={<MailOutlined />}>
//                    Mail us
//                </Menu.Item>
//                <Menu.Item key="alipay">
//                    Change Routes
//                    <a href="https://ant.design" target="_blank" rel="noopener noreferrer" />
//                </Menu.Item>
//            </Menu>
//
//        );
//    }
// }

// <div className={"job-card-head"}>
//     <div className={"job-card-head-link"}>
//         <div className={"job-card-head-link-title"}>{this.props.title}
//         </div>
//         <Tooltip title="Apply">
//             <a target="_blank" href={this.props.apply_url}>
//                 <LinkOutlined/>
//             </a>
//         </Tooltip>
//     </div>

class CustomHeader extends React.Component {
    render() {
        return (
            <div class={"custom-header"}>
                <div class={"custom-header-left"}>
                    CANADA SDE CAREERS
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