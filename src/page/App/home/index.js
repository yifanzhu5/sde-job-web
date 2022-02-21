import React, { useState, useEffect } from "react";
import { Form, Input, Button, Checkbox, Divider, Pagination } from 'antd';
import { Row, Col } from 'antd';

import axios from 'axios'
// import {request} from '../../../utils/request'

import JobCard from "../../../components/job-show/jobCard";

const { Search } = Input;

const companyOptions = [
  { label: 'Google', value: 'Google' },
  { label: 'Amazon', value: 'Amazon' },
  { label: 'Shopify', value: 'Shopify' },
  // { label: 'Others', value: 'Others' }
];

const locationOptions = [
  { label: 'Remote', value: 'Remote' },
  { label: 'Vancouver', value: 'Vancouver' },
  { label: 'Toronto', value: 'Toronto' },
  { label: 'Montreal', value: 'Montreal' },
  { label: 'Ottawa', value: 'Ottawa' },
  { label: 'Others', value: 'Others' }
];

class Home extends React.Component {
  state = {
    page_size: 20,
    current_page: 1,
    count: 0,
    keywords: '',
    locations: [],
    companys: [],
    update_time: null,
    has_remote: false,
  };

  onFilterSubmit = () => {
    const params = {
      "keywords": this.state.keywords,
      // "locations": this.state.locations,
      "page_size": this.state.page_size,
      "current_page": this.state.current_page,
    }
    axios.post('http://localhost:8080/api/v1/jobs/search', params).then((res) => {
      this.setState({'page_size': res.data.page_size})
      console.log('success', res)
    }).catch((data)=>{
      console.log(data)
    })
    // request({
    //   url: `/v1/jobs`,
    //   method: 'post',
    //   data: ,
    // }).then({
    // })
  };

  onJobChange = () => {
    console.log('onjobchange')
  };

  formFilter() {
    return <Form
      // form={form}
      layout="vertical"
      onFinish={this.onFilterSubmit}
    >
      <Form.Item
        label="Locations"
        name="locations"
      >
        <Checkbox.Group
          options={locationOptions}
          onChange={(e) => {
            if (e.includes('Remote')) {
              // Only canbe delete when submit
              this.setState({ has_remote: true })
              // let index_i = e.indexOf('Remote')
              // e.splice(index_i, 1)
            };
            this.setState({ locations: e })
            console.log('eee', this.state.locations)
          }}
        />
      </Form.Item>
      <Divider />
      <Form.Item
        label="Company"
        name="companys"
      >
        <Checkbox.Group
          options={companyOptions}
          onChange={(e) => {
            this.setState({ companys: e })
          }}
        />
      </Form.Item>
      <Form.Item >
        <Button type="primary" htmlType="submit">
          Submit
        </Button>
      </Form.Item>
    </Form>
  };

  jobCards(page_size) {
    return <div class="job-cards">
      <JobCard
        title="Job Title"
        content={<p>this is content</p>}
        apply_url="https://careers.google.com/jobs/results/111150522284548806-technical-solutions-consultant-telecom-carriers/?company=Google&company=Google%20Fiber&company=YouTube&distance=50&employment_type=FULL_TIME&gclid=CjwKCAiAx8KQBhAGEiwAD3EiP56ZjKDI3Ae4voCs3toxNvkmDy26gJfO43rSWaSdjdk2vxfVSU8HqBoCW88QAvD_BwE&gclsrc=aw.ds&hl=en_US&jlo=en_US&location=Canada&q=&sort_by=relevance&src=Online%2FHouse%20Ads%2FBKWS"
      />

      <Pagination
        current={this.state.current_page}
        total={this.state.count}
        pageSize={this.state.page_size}
        pageSizeOptions={["20", "50", "100"]}
        onChange={this.onJobChange}
        onShowSizeChange={(curr, size) => {
          this.setState({
            page_size: size
          })
        }}
      />
    </div>
  }

  render() {
    return (
      <div class="custom-body">
        <div class="left-col">
          <div class="left-col-content">
            <Search
              placeholder="Search Keywords"
              value={this.state.keywords}
              allowClear
              enterButton="Search"
              size="large"
              onChange={(e) => {
                this.setState({ keywords: e.target.value });
              }}
              onSearch={() => {
                console.log(this.state.keywords)
              }}
            />
            <Divider />
            {this.formFilter()}
          </div>
        </div>
        <div class="right-col">
          <div class="right-col-content">
            <div class="count">{this.state.count || 'No'} jobs matched</div>
            {this.jobCards(this.state.page_size)}
          </div>
        </div>
      </div>
    );
  }
};

export default Home;