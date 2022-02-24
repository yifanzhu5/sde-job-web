import { Result, Button } from 'antd';
import { BrowserRouter, Switch, Link } from "react-router-dom";


const PageError = (props) => {
  function handleClick(e) {
    props.history.push('/jobs')
  }

  return (
    <Result
      status="404"
      title="404"
      subTitle="Sorry, the page you visited does not exist."
      extra={
        <Button onClick={handleClick} type="primary">
          Back Home
        </Button>
      }
    />
  )
}
export default PageError;