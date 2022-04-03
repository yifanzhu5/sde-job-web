import React from 'react';


import { Card, Tooltip, Space, message } from 'antd';
import {
    LinkOutlined,
    BankOutlined,
    FieldTimeOutlined,
    EnvironmentOutlined,
    HeartOutlined,
} from '@ant-design/icons';
import axios from "axios";

class JobCard extends React.Component {


    handleAddLike = () => {
        let token = localStorage.getItem('token')
        if (token == null) {
            message.error('Please login!', 3, onclose);
            return
        }
        const config = {
            headers: {
                'token': token
            }
        }
        const params = {
            "id": this.props.id,
            "isAdd": true
        }
        axios.post(`/api/v1/updateFavJobs`, params, config).then((res) => {
            // this.isLike = true
            this.props.changeLike()
        }).catch((data) => {
            message.error('Login expired. Please login!', 3, onclose);
            console.log('error', data)
        })
    }

    handleNoLike = () => {
        let token = localStorage.getItem('token')
        if (token == null) {
            message.error('Please login!', 3, onclose);
            return
        }
        const config = {
            headers: {
                'token': token
            }
        }

        const params = {
            "id": this.props.id,
            "isAdd": false
        }
        axios.post(`/api/v1/updateFavJobs`, params, config).then((res) => {
            this.props.changeLike()
        }).catch((data) => {
            message.error('Login expired. Please login!', 3, onclose);
            console.log('error', data)
        })
    }

    render() {
        let isLike = this.props.isLike;

        return (
            <Card hoverable="true">
                <div class={"job-card-head"}>
                    <div class={"job-card-head-link"}>
                        <a className="job-card" target="_blank" href={this.props.from_url}>
                            <div className={"job-card-head-link-title"}>{this.props.title}
                            </div>
                        </a>
                        <div class={"job-card-head-link-operation"}>
                            <Tooltip title="like">
                                {isLike ?
                                    <HeartOutlined
                                        onClick={this.handleNoLike}
                                        style={{ color: '#F00' }} /> :
                                    <HeartOutlined
                                        onClick={this.handleAddLike}
                                        style={{ color: '#08C' }}
                                    />
                                }
                            </Tooltip>
                            <Tooltip title="Apply">
                                <a target="_blank" href={this.props.apply_url}>
                                    <LinkOutlined />
                                </a>
                            </Tooltip>
                        </div>
                    </div>

                    <div class="job-card-head-info">
                        <div class={"job-card-head-info-layer1"}>
                            <Space size="small">
                                <Tooltip title="company">
                                    <div>
                                        <BankOutlined />
                                        {this.props.company}
                                    </div>
                                </Tooltip>
                                <Tooltip title="Cities">
                                    <div>
                                        <EnvironmentOutlined />
                                        {this.props.cities}
                                    </div>
                                </Tooltip>
                            </Space>
                        </div>
                        {(this.props.publish_time != "") &&
                            <Tooltip title="Publish time">
                                <div>
                                    <FieldTimeOutlined />
                                    {new Date(this.props.publish_time * 1000).toLocaleDateString()}
                                </div>
                            </Tooltip>}
                    </div>
                </div>
                <a className="job-card" target="_blank" href={this.props.from_url}>
                    <div className="job-card-content">
                        <div dangerouslySetInnerHTML={{ __html: this.props.content }}></div>
                    </div>
                </a>
            </Card>
        )
    }

};

export default JobCard;