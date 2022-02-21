import React from 'react';

import {Card, Divider, Tooltip} from 'antd';
import {LinkOutlined, MoreOutlined, BankOutlined, BankFilled,GlobalOutlined,FieldTimeOutlined,EnvironmentOutlined} from '@ant-design/icons';

class JobCard extends React.Component {
    // console.log(props.jobTitle)
    // props.applyUrl
    //
    render() {
        return (
            <a target="_blank" href={this.props.from_url}>
                <Card
                    class={"job-card"}
                    hoverable="true"
                >
                    <div class={"job-card-head"}>
                        <div className={"job-card-head-link"}>
                            <div className={"job-card-head-link-title"}>{this.props.title}
                            </div>
                            <Tooltip title="Apply">
                                <a target="_blank" href={this.props.apply_url}>
                                    <LinkOutlined/>
                                </a>
                            </Tooltip>
                        </div>

                        <div className="job-card-head-info">
                            <Tooltip title="company">
                                <div>
                                    <BankOutlined/>
                                    {this.props.company}
                                </div>
                            </Tooltip>
                            <Tooltip title="locations">
                                <div>
                                    <EnvironmentOutlined/>
                                    {this.props.locations}
                                </div>
                            </Tooltip>
                            <Tooltip title="update_time">
                                <div>
                                    <FieldTimeOutlined/>
                                    {this.props.update}
                                </div>
                            </Tooltip>
                        </div>


                    </div>

                    <div class="job-card-content">
                        {this.props.content}
                    </div>
                </Card>
            </a>
        )
    }
};
export default JobCard;