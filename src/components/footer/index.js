//当前组件的css样式
import './index.css'

import React from 'react';




class Footer extends React.Component {

  render() {
    return (
        <div className="footer">
            <span>版权所有 上汽通用</span>
            <br/>
            <span>
            Copyright @1997-2017 SAIC General Motors Corporation Limited All Rights Reserved
            </span>
        </div>
    );
  }
}
export default Footer