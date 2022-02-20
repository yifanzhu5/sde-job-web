import React from 'react';

import { Card, Divider, Tooltip } from 'antd';
import { LinkOutlined, MoreOutlined } from '@ant-design/icons';

class JobCard extends React.Component {
  // console.log(props.jobTitle)
  // props.applyUrl
  // 
  render() {
    return (
      <Card
        hoverable="true"
      >
        <div class="card-head">
          <p class="card-head-title">{this.props.title}</p>
          <div>
          <Tooltip title="Apply">
            <a target="_blank" href={this.props.apply_url} >
              <LinkOutlined />
            </a>
          </Tooltip>
          <Tooltip title="More">
            <a target="_blank" href={this.props.from_url} >
              <MoreOutlined />
            </a>
          </Tooltip>
          </div>

        </div>
        <Divider />
        <div class="card-content">
          {this.props.content}
        </div>
      </Card>
    )
  }
};
export default JobCard;