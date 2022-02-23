import React, { useState, useEffect } from "react";
import { Form, Input, Button, Checkbox, Divider, Pagination, Space } from 'antd';
import { Row, Col } from 'antd';

import axios from 'axios'
// import {request} from '../../../utils/request'

import JobCard from "../../../components/job-show/jobCard";
import { Link } from "react-router-dom";

const { Search } = Input;

const companyOptions = [
  { label: 'Google', value: 'Google' },
  { label: 'Amazon', value: 'Amazon' },
  { label: 'Shopify', value: 'Shopify' },
  { label: 'Microsoft', value: 'Microsoft' },
  { label: 'Others', value: 'others' }
];

const cityOptions = [
  { label: 'Remote', value: 'Remote' },
  { label: 'Vancouver', value: 'Vancouver' },
  { label: 'Toronto', value: 'Toronto' },
  { label: 'Montreal', value: 'Montreal' },
  { label: 'Ottawa', value: 'Ottawa' },
  { label: 'Waterloo', value: 'Waterloo' },
  { label: 'Others', value: 'others' }
];

class Home extends React.Component {

  constructor(props) {
    super(props);
  }

  state = {
    page_size: 20,
    current_page: 1,
    count: 0,
    keywords: '',
    cities: [],
    companys: [],
    publish_time: null,
    has_remote: null,
    jobs: [],
  };

  componentDidMount() {
    this.getData()
    console.log('123122',this.props.history)
  }

  getData=()=>{
    // Locations array have Remote.
    // submitted location should not inclucde Remote
    let city_submit= [];
    Object.assign(city_submit, this.state.cities);
    if (city_submit.includes('Remote')) {
      this.setState({ has_remote: true })
      let index_i = city_submit.indexOf('Remote')
      city_submit.splice(index_i, 1)
    } else {
      this.setState({ has_remote: null })
    }
    console.log('this', this)
    const params = {
      "keywords": this.state.keywords,
      "cities": city_submit,
      "companys": this.state.companys,
      "page_size": this.state.page_size,
      "current_page": this.state.current_page,
      "has_remote": this.state.has_remote
    }
    axios.post('http://localhost:8080/api/v1/jobs/search', params).then((res) => {
      this.setState({
        'jobs': res.data.jobs,
        'count': res.data.count,
      })
      console.log('success', res)
    }).catch((data) => {
      console.log('error', data)
    })
  };


  onJobChange = (pg) => {
    this.setState({ current_page: pg }, () => {
      this.getData()
    })
  };

  formFilter() {
    return <Form
      layout="vertical"
      onFinish={this.getData}
    >
      <Form.Item
        label="cities"
        name="cities"
      >
        <Checkbox.Group
          options={cityOptions}
          onChange={(e) => {
            this.setState({ cities: e,current_page:1})
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
            this.setState({ companys: e, current_page:1})
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
    return <div class="job-cards"><Space size={"large"} direction={"vertical"}>
      {this.state.jobs.map((item) => {
        // locations cities
        return <JobCard
          title={item.title}
          company={item.company}
          cities={item.city}
          from_url={item.from_url}
          apply_url={item.apply_url}
          publish_time={item.publish_time}
          content={item.description}
        />
      })
      }</Space>
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
              onSearch={(e) => {
                this.setState({ keywords: e ,current_page:1},()=>{
                  this.getData()
                })
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