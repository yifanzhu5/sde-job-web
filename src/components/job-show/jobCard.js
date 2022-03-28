import React from 'react';


import {Card, Tooltip, Space, message} from 'antd';
import {
    LinkOutlined,
    BankOutlined,
    FieldTimeOutlined,
    EnvironmentOutlined,
    HeartTwoTone,
    getTwoToneColor,
    setTwoToneColor
} from '@ant-design/icons';
import axios from "axios";

class JobCard extends React.Component {
    handleLike = () => {
        const config = {
            headers: {
                token: localStorage.getItem('token')
            }
        }
        console.log('currentColor: ', getTwoToneColor())
        let isAdd = true
        if(getTwoToneColor() == '#F00') {
            isAdd = false
        }
        const params = {
            "id": this.props.id,
            "isAdd": isAdd
        }
        axios.post(`/api/v1/updateFavJobs`, params, config).then((res) => {
            if(isAdd) {
                setTwoToneColor('#F00')
            } else {
                setTwoToneColor('#1890ff')
            }
        }).catch((data) => {
            console.log('error', data)
        })
    }

    render() {
        return (
                <Card hoverable="true">
                    <div class={"job-card-head"}>
                        <div class={"job-card-head-link"}>
                            <a className="job-card" target="_blank"  href={this.props.from_url}>
                                <div className={"job-card-head-link-title"}>{this.props.title}
                                </div>
                            </a>
                          <div class={"job-card-head-link-operation"}>
                                  <Tooltip title="like">
                                          <HeartTwoTone onClick={this.handleLike} />
                                  </Tooltip>
                                  <Tooltip title="Apply">
                                      <a target="_blank" href={this.props.apply_url}>
                                          <LinkOutlined/>
                                      </a>
                                  </Tooltip>
                          </div>
                        </div>

                        <div class="job-card-head-info">
                            <div class={"job-card-head-info-layer1"}>
                                <Space size="small">
                                    <Tooltip title="company">
                                        <div>
                                            <BankOutlined/>
                                            {this.props.company}
                                        </div>
                                    </Tooltip>
                                    <Tooltip title="Cities">
                                        <div>
                                            <EnvironmentOutlined/>
                                            {this.props.cities}
                                        </div>
                                    </Tooltip>
                                </Space>
                            </div>
                            {(this.props.publish_time != "") &&
                                <Tooltip title="Publish time">
                                    <div>
                                        <FieldTimeOutlined/>
                                        {new Date(this.props.publish_time * 1000).toLocaleDateString()}
                                    </div>
                                </Tooltip>}
                        </div>
                    </div>
                    <a className="job-card" target="_blank" href={this.props.from_url}>
                        <div className="job-card-content">
                            <div dangerouslySetInnerHTML={{__html: this.props.content}}></div>
                        </div>
                    </a>
                </Card>
        )
    }

};

export default JobCard;