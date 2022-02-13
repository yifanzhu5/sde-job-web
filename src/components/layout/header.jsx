// import

// const { Header } = Layout;

import { PageHeader } from 'antd';
import {Menu} from 'antd';
import { MailOutlined, AppstoreOutlined, SettingOutlined } from '@ant-design/icons';

const {SubMenu} = Menu;

// const state = {
//     current: 'mail',
//   };

// const handleClick = (e) => {
//     console.log('click ', e);
//     this.setState({ current: e.key });
//   };

const CustomHeader = () => {
    // const { current } = this.state;
    //  onClick={this.handleClick} selectedKeys={[current]}
    return (
      <Menu mode="horizontal">
        <Menu.Item key="mail" icon={<MailOutlined />}>
            Mail us
            </Menu.Item>
        <Menu.Item key="alipay">
            Change Routes
          <a href="https://ant.design" target="_blank" rel="noopener noreferrer" />
        </Menu.Item>
      </Menu>
    );
};


export default CustomHeader;