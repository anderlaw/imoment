import React from 'react';
import Breadcrumb from '@/components/breadcrumb'
import ajax from '@/common/fetch.js'

import { Table } from 'antd';
import { Button } from 'antd';

class UserBox extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            columns: [
                {title:'序号',dataIndex:'id'},
                {title:'域账户',dataIndex:'loginName'},
                {title:'姓名',dataIndex:'cnName'},
                {title:'邮箱',dataIndex:'mail'},
                {title:'电话',dataIndex:'mobile'},
                {
                    title:'用户',
                    dataIndex:'access',
                    render:text => {
                        switch(text){
                            case 0:return '普通用户';
                            case 1:return '运营用户';
                            case 2:return '审核用户';
                            case 3:return '管理员';
                            default:return '普通用户'
                        }
                    }
                },
                {
                    title:'操作',
                    width:'100',
                    dataIndex:'key',
                    render:text => {
                        return  <span className="tablebtncell">
                            <Button  type="primary">修改</Button>
                            <Button type="danger">删除</Button>
                        </span>
                    }
                }
            ],
            tableList:[],
            dataSource:[]
        };
    }
    fetchTableData() {
        ajax({
            url:'/user/list',
            method:'post',
        }).then(res => {
            if(res.statusCode == 200){
               this.setState({
                   dataSource:res.data.list.map((item)=>{item.key=item.id;return item})
               })
            }else{
                
            }
        })
        // this.setState({columns: 'Hello'});
    }
    componentDidMount() {
        this.fetchTableData();
    }

    componentWillUnmount() {

    }
    render() {
        return (
        <div>
            <Breadcrumb items={[{'value':'系统管理'},{value:'用户管理'}]}/>        
            <Table
                size="small"
                columns={this.state.columns}
                dataSource={this.state.dataSource}
                bordered
            />
        </div>
        );
    }
}
  export default  UserBox