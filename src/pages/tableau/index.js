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
                {title:'报表名称',dataIndex:'name'},
                {title:'URL',dataIndex:'url'},
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
            url:'/table/list',
            method:'post',
        }).then(res => {
            console.log(res)
            if(res.statusCode === 200){
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
            <Breadcrumb items={[{'value':'系统管理'},{value:'Tableau报表'}]}/>        
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