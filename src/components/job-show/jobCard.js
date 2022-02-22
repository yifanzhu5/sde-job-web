import React from 'react';


import {Card, Divider, Tooltip, Space} from 'antd';
import {
    LinkOutlined,
    MoreOutlined,
    BankOutlined,
    BankFilled,
    GlobalOutlined,
    FieldTimeOutlined,
    EnvironmentOutlined
} from '@ant-design/icons';

class JobCard extends React.Component {
    // console.log(props.jobTitle)
    // props.applyUrl
    //
    render() {
        return (

            <a class="job-card" target="_blank" href={this.props.from_url}>
                <Card
                    hoverable="true"

                >

                    <div class={"job-card-head"}>
                        <div class={"job-card-head-link"}>
                            <div class={"job-card-head-link-title"}>{this.props.title}
                            </div>
                            <Tooltip title="Apply">
                                <a target="_blank" href={this.props.apply_url}>
                                    <LinkOutlined/>
                                </a>
                            </Tooltip>
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

                    <div class="job-card-content">
                        <div dangerouslySetInnerHTML={{__html: this.props.content}}></div>
                    </div>
                </Card>
            </a>

        )
    }

};

export default JobCard;