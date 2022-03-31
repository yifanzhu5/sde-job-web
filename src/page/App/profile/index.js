import React from "react";
import axios from "axios";
import {Pagination, Space} from "antd";
import JobCard from "../../../components/job-show/jobCard";

class Profile extends React.Component {
    constructor(props) {
        super(props);
    }

    state = {
        loading: 'initial',
        favJobs: [],
        current_page: 1,
        page_size: 20
    };

    componentDidMount() {
        let token = localStorage.getItem('token');
        if (token == null) {
            this.setState({
                loading: false
            });
            return;
        }
        const config = {
            headers: {
                'token': token
            }
        }
        axios.get('/api/v1/user', config).then(
            res => {
                console.log('profile res.data.favJobs: ', res.data.favJobs);
                this.setState({
                    favJobs: res.data.favJobs,
                    loading: 'true',
                });
            },
            err => {
                window.location = "http://localhost:3000";
                console.log(err);
            }
        )
    }

    getData = () => {
        const params = {
            "ids": this.state.favJobs,
            "current_page": this.state.current_page,
            "page_size": this.state.page_size
        }
        console.log("profile this.state.favJobs: ", this.state.favJobs)
        console.log("profile this.state.loading: ", this.state.loading)
        console.log("profile params: ", params)
        axios.post('api/v1/jobs/search', params).then((res) => {
            console.log('profile res.data: ', res.data);
            this.setState({
                'jobs': res.data.jobs,
                'count': res.data.count,
                'loading': 'false'
            })
            document.documentElement.scrollTo(0, 0)
        }).catch((data) => {
            console.log('error', data)
        })
    };

    jobCards(page_size) {
        console.log('this.state.jobs: ', this.state.jobs);
        return <div class="job-cards"><Space size={"large"} direction={"vertical"}>
            {this.state.jobs.map((item) => {
                return <JobCard
                    id={item.id}
                    title={item.title}
                    isLike={true}
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

    onJobChange = (pg) => {
        this.setState({current_page: pg}, () => {
            this.getData()
        })
    };

    render() {
        if (this.state.loading == 'initial') {
            return <h2>Intializing...</h2>;
        }
        if (this.state.loading == 'true') {
            this.getData();
            return <h2>Loading...</h2>;
        } else if (this.state.loading == 'false') {
            return (
                <div class="custom-body">
                    <div class="left-col">
                        <div class="left-col-content">
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


    }
}

export default Profile;