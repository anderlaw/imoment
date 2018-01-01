//当前组件的css样式
import './index.css'

import React from 'react';
import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom';
import { Menu } from 'antd';
import logo from '@/assets/logo.png'
const SubMenu = Menu.SubMenu;



class App extends React.Component {
  state = {
    current: 'result:1',
  }
  handleClick = (e) => {
    this.setState({
      current: e.key,
    });
  }
  render() {
    return (
      <Menu
        onClick={this.handleClick}
        selectedKeys={[this.state.current]}
        mode="horizontal">
        <img src={logo} alt="fafasf"/>
        <SubMenu title={<span>效果分析</span>}>
            <Menu.Item key="result:1">场景分析</Menu.Item>
            <Menu.Item key="result:2">策略分析</Menu.Item>
        </SubMenu>
        <SubMenu title={<span>业务管理</span>}>
            
            <Menu.Item key="service:1">场景管理</Menu.Item>
            <Menu.Item key="service:2">算法管理</Menu.Item>
            <Menu.Item key="service:3">模板管理</Menu.Item>
            <Menu.Item key="service:4">策略管理</Menu.Item>
            <Menu.Item key="service:5">场景分类</Menu.Item>
        </SubMenu>

      </Menu>
    );
  }
}
export default App