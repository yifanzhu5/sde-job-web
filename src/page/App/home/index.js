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

const cityOptions = [
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
    cities: [],
    companys: [],
    publish_time: null,
    has_remote: null,
    jobs: [],
  };

  componentDidMount(){
    this.onFilterSubmit()
  }

  onFilterSubmit = () => {
    // Locations array have Remote.
    // submitted location should not inclucde Remote
    let city_submit = [];
    Object.assign(city_submit, this.state.cities);
    if (city_submit.includes('Remote')) {
      this.setState({ has_remote: true })
      let index_i = city_submit.indexOf('Remote')
      city_submit.splice(index_i, 1)
    } else {
      this.setState({ has_remote: null })
    }
    const params = {
      //TODO
      //"keywords": this.state.keywords,
      //TODO others
      "cities": this.state.cities,
      //
      "companys": this.state.companys,
      "page_size": this.state.page_size,
      "current_page": this.state.current_page,
      "has_remote": this.state.has_remote
    }
    console.log(params)
    axios.post('http://localhost:8080/api/v1/jobs/search', params).then((res) => {
      this.setState({
        'jobs': res.data.jobs,
        'count': res.data.count
      })
      // this.setState()
      console.log('success', res)
    }).catch((data) => {
      console.log(data)
    })
  };

  onJobChange = (pg) => {
    this.setState({current_page: pg})
    this.onFilterSubmit()
  };

  formFilter() {
    return <Form
      // form={form}
      layout="vertical"
      onFinish={this.onFilterSubmit}
    >
      <Form.Item
        label="cities"
        name="cities"
      >
        <Checkbox.Group
          options={cityOptions}
          onChange={(e) => {
            this.setState({ cities: e })
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
      }
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