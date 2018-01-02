import './index.css'
import React from 'react';
import {Link} from 'react-router-dom'
class BreadCrumb extends React.Component {
    render() {
        const length = this.props.items.length;
        let breadItems  = null;
        if(length === 1){
            //只有一项时
            let itemAlone = this.props.items[0]
            if(itemAlone.url){  
                //有url
                breadItems = (<span>
                    <Link className="link" to={ itemAlone.url }>{ itemAlone.value }
                    </Link>
                </span>)
            }else{  
                //无url
                breadItems = (<span>{ itemAlone.value }</span>)
            }
        }else{
            //大于一项的时候
            breadItems = this.props.items.map((item,index) =>{
                if(index < length - 1){
                    //不是最后一项
                    if(item.url){  
                        //有url
                        return (<span key={index}>
                            <Link className="link" to={ item.url }> { item.value } 
                            </Link>
                            <span className="iconfont icon-right arrow"></span>
                        </span>)
                    }else{  
                        //无url
                        return (<span key={index}>
                            <span> { item.value }  </span>
                            <span className="iconfont icon-right arrow"></span>
                            </span>)
                    }
                }else{
                    //最后一项
                    if(item.url){  
                        //有url
                        return (<span key={index}>
                            <Link className="link" to={ item.url }> { item.value } 
                            </Link>
                        </span>)
                    }else{  
                        //无url
                        return (<span key={index}>{ item.value } </span>)
                    }
                }
            })
        }
        return <div className="breadcrumb"> {breadItems} </div>;
    }
}
export default  BreadCrumb