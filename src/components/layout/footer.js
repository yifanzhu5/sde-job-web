import Footer from 'antd'
import React from "react";

class CustomFooter extends React.Component {
   render() {
       return (
           <div class='custom-footer'>
               <p>Developed by Team11</p>
           </div>
           // <Footer style={{ textAlign: 'center' }}>Ant Design ©2018 Created by Ant UED</Footer>
       )
   }
}
export default CustomFooter;