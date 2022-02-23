import {Result, Button} from 'antd';
import {BrowserRouter, Switch, Link} from "react-router-dom";


const PageError = () => {
    function handleClick(e) {
        e.preventDefault();
        console.log('The link was clicked.');
    }

    return (
        // TODO: combine button with router
        <Result
            status="404"
            title="404"
            subTitle="Sorry, the page you visited does not exist."
            extra={
                <Link to="/jobs">
                    <Button type="primary">
                        Back Home
                    </Button>
                </Link>}
        />)
}

export default PageError;