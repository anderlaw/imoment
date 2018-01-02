//当前组件的css样式
import './index.css'
import logo from '@/assets/logo.png'

//引入自定义组件
import UserManage from '@/pages/usermanage'
import TableAu from '@/pages/tableau'

import React from 'react';
import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom';


import { Menu } from 'antd';
const SubMenu = Menu.SubMenu;

class Header extends React.Component {
  state = {
    current: 'effort-1',
  }
  handleClick = (e) => {
    console.log('click ', e);
    this.setState({
      current: e.key,
    });
  }
  render() {
    return (
      <Router>
        <div style={{ height:'calc(100% - 82px)' }}>
          <div id="header">
            <div id="logo">
              <Link className="link" to="/">
                <img src={logo} alt="logo"/>
                <strong>IMoment</strong>
              </Link>
            </div>
            <Menu
              onClick={this.handleClick}
              defaultSelectedKeys={['effort-1']}
              theme="dark"
              // defaultOpenKeys={['sub1','sub2']}
              mode="horizontal">           
              <SubMenu key="effort" title={<span>效果分析</span>}>
                <Menu.Item key="effort-1">
                  <Link to="/">场景分析</Link>
                </Menu.Item>
                <Menu.Item key="effort-2">
                  <Link to="/stragety-ana">策略分析</Link>
                </Menu.Item>
              </SubMenu>
              <SubMenu key="service" title={<span>业务管理</span>}>
                <Menu.Item key="service-1">
                  <Link to="/scene-class">场景分类</Link>
                </Menu.Item>
                <Menu.Item key="service-2">
                  <Link to="/scene-mana">场景管理</Link>
                </Menu.Item>
                <Menu.Item key="service-3">
                  <Link to="/stragety-mana">策略管理</Link>
                </Menu.Item>
                <Menu.Item key="service-4">
                  <Link to="/algorithm-mana">算法管理</Link>
                </Menu.Item>
                <Menu.Item key="service-5">
                  <Link to="/template-mana">模板管理</Link>
                </Menu.Item>
              </SubMenu>
              <SubMenu key="system" title={<span>系统管理</span>}>
                <Menu.Item key="system-1">
                  <Link to="/user-mana">用户管理</Link>
                </Menu.Item>
                <Menu.Item key="system-2">
                  <Link to="/table">Tableau报表</Link>
                </Menu.Item>
                <Menu.Item key="system-3">
                  <Link to="/system-config">系统设置</Link>
                </Menu.Item>
              </SubMenu>
            </Menu>
          </div>
          <div id="content">
            <Route exact path="/" render={()=>(<div> this is home page </div>)}/>
            <Route  path="/user-mana" component={UserManage}/>
            <Route  path="/table" component={TableAu}/>
          </div>
        </div>
      </Router>
    );
  }
}
export default  Header