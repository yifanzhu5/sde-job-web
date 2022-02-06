// import

// const { Header } = Layout;

import { PageHeader } from 'antd';

const routes = [
    {
        path: 'index',
        breadcrumbName: 'First-level Menu',
    },
    {
        path: 'first',
        breadcrumbName: 'Second-level Menu',
    },
    {
        path: 'second',
        breadcrumbName: 'Third-level Menu',
    },
];

const Header = () => {
    return (
        //         <PageHeader
        //     className="site-page-header"
        //     title="Title"
        //     breadcrumb={{ routes }}
        //     subTitle="This is a subtitle"
        //   />
        <PageHeader
            className="page-header"
            title="SDE-job accumulate"
        />  
    );
};

export default Header;