// import CustomHeader from 
import React, { useState, useEffect } from "react";
import { Form, Input, Button, Checkbox } from 'antd';

import CustomHeader from '../../../components/layout/header.jsx';
import CustomFooter from '../../../components/layout/footer.jsx';

const { Search } = Input;

const onSearch = value => console.log(value);


const Home = () => {
    return (<div>
        <CustomHeader></ CustomHeader>
        <div class="custom-body">
            <div class="left-col">
                123
                {/* <Form
                    name */}
            </div>

            <div class="right-col">
                <Search
                    placeholder="input search text"
                    allowClear
                    enterButton="Search"
                    size="large"
                    onSearch={onSearch}
                />
            </div>
        </div>
        <CustomFooter></CustomFooter>
    </div>
    );
};

export default Home;