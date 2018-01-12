import React from 'react';
import Breadcrumb from '@/components/breadcrumb'
import ajax from '@/common/fetch.js'

import { Table,Button,message,Modal,Form,Input } from 'antd';
const FormItem = Form.Item;
const confirm = Modal.confirm;
// 固定表头时 需要设置column的width 否则可能表头和内容对不齐呢

class UserBox extends React.Component {
    //column里不能放操作，只能进行自定义的显示呢。操作应该放到rener函数里呢
    columns = [
        { title:'序号',dataIndex:'index', width:60},
        { 
            title:'域账号',
            dataIndex:'loginName', 
            width:150,
            defaultSortOrder: 'descend',
            sorter: (a, b) => a.loginName - b.loginName,
        },
        { title:'姓名',dataIndex:'cnName', width:200},
        { title:'邮箱',dataIndex:'mail',width:200 },
        { title:'电话',dataIndex:'mobile' , width:200},
        { title:'用户',dataIndex:'access' ,render : name => {
            if(name == 0){
                return <span>普通用户</span>
            }else if(name == 1){
                return <span>运营用户</span>
            }else if(name == 2){
                return <span>审核用户</span>
            }else if(name == 3){
                return <span>管理员</span>
            }
        } }
    ];
    state = {
        dataSource:[],
        selectedKeys:[],
        addDialogVisible:false,
        modifyDialogVisible:false,
    };
    rowSelection = {
        onChange:(selectedKeys,selectedRows) => {
            //更新选中状态
            this.setState({
                selectedKeys:selectedKeys
            })
            console.log(selectedKeys,selectedRows)
        },
        getCheckboxProps:record => ({
            disabled:record.index === 3
        })
    };
    showAddDialog =() =>{
        this.setState({
            addDialogVisible:true
        })
    }
    hideAddDialog =() =>{
        this.setState({
            addDialogVisible:false
        })
    }
    showModifyDialog =() =>{
        this.setState({
            modifyDialogVisible:true
        })
    }
    hideModifyDialog =() =>{
        this.setState({
            modifyDialogVisible:false
        })
    }
    //操作逻辑
    handleAddRow = row =>{
        ajax({
            url:'api/user/add',
            method:'post',
            data:{
                id:row.id
            }
        }).then(res => {
            if(res.statusCode == 200){
                message.success(res.message,1.5)
            }else{
                message.error(res.message,1.5)
            }
        })
    }
    handleModifyRow = row =>{
        //开启对话框
        this.setState({
            modifyDialogVisible:true
        })
        ajax({
            url:'api/user/modify',
            method:'post',
            data:{
                id:row.id
            }
        }).then(res => {
            if(res.statusCode == 200){
                message.success(res.message,1.5)
            }else{
                message.error(res.message,1.5)
            }
        })
    }
    handleDeleteRow = row =>{
        confirm({
            title: '确定删除勾选用户?',
            onOk() {
                ajax({
                    url:'api/user/delete',
                    method:'post',
                    data:{
                        id:this.state.selectedKeys
                    }
                }).then(res => {
                    if(res.statusCode == 200){
                        message.success(res.message,1.5)
                    }else{
                        message.error(res.message,1.5)
                    }
                })
            },
            onCancel() {
              //console.log('Cancel');
            },
          });
        
    }
    //必须写成箭头函数赋值形式，否则里面的this无法准确指向。
    handleTableChange = (pagination,filters,sorter) => {
        //对象的浅拷贝 Object.assign();

        const pager = { ...this.state.pagination };

        pager.current = pagination.current;
        // this.setState({
        //     pagination:pager,
        // });
        //this.fetchTableData();
        console.log(pagination)
    }
    fetchTableData = () => {
        ajax({
            url:'api/user/list',
            method:'post',
            data:{

            }
        }).then(res => {
            if(res.statusCode == 200){
                //每个data必须有个唯一的key值。相当于id。
                this.setState({ dataSource: res.data.list.map((item,index)=>{
                    item.key=item.id;
                    item.index = index+1;
                    return item;
                }) })
            }else{
                
            }
        })
    }
    componentDidMount() {
        this.fetchTableData();
    }
    render() {
        return (
        <div>
            <Breadcrumb items={[{'value':'系统管理'},{value:'用户管理'}]}/>   
            <div style={{ textAlign:'right' }}>
                {/* 此处放置操作按钮 */}
                <Button type="primary" onClick={this.showAddDialog}>新建</Button>
                <Button disabled={ this.state.selectedKeys.length !== 1 } onClick={this.showModifyDialog} style={{ margin:'0 10px' }}>修改</Button>
                <Button type="danger"  onClick={this.handleDeleteRow}>删除</Button>
                <Modal
                    visible={this.state.addDialogVisible}
                    title="新建用户"
                    onCancel={this.hideAddDialog}
                    footer={[
                        <Button key="back" onClick={this.hideAddDialog}>取消</Button>,
                        <Button key="submit" type="primary" onClick={this.handleAddRow}>
                        确定
                        </Button>
                    ]}
                >
                </Modal>
            </div>     
            <Table 
            columns={ this.columns } 
            dataSource={ this.state.dataSource }
            pagination={ this.state.pagination }
            rowSelection={ this.rowSelection }
            loading={ this.state.loading }
            rowKey={ record => record.id  }
            bordered={ true }
            onChange={ this.handleTableChange }
            scroll={{ y:300 }}
            >
            </Table>
        </div>
        );
    }
}
export default  UserBox