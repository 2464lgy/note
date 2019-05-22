import React,{Component} from "react";
import {List,Avatar} from "antd";
//import data from "./data";
import axios from "axios";
import {Link} from "react-router-dom";
import TxtTag from "../txtTag";
import {connect} from "react-redux";
class IndeList extends Component{
    constructor(arg){
        super(arg);
        this.isStart=true;
        this.state={
            page:1
        }
        this.getData(this.props.tab,this.state.page);
    }
    // componentWillReceiveProps(nextProps){
    //     console.log(nextProps);
    //     if(this.props.tab!=nextProps.tab){
    //         this.getData(nextProps.tab);
    //     }
    // }
    shouldComponentUpdate(nextProps,nextState){
        this.isStart=false;
        if(this.state.page!==nextState.page){
            this.getData(nextProps.tab,nextState.page);
            return;
        }
        if(this.props.tab!==nextProps.tab){
            this.state.page=1;
            this.getData(nextProps.tab,this.state.page);
            return false;
        }
        return true;
    }
    getData(tab,page){
        this.props.dispatch((dispatch)=>{
            dispatch({
                type:"LIST_UPDATA"
            })
            axios.get(`https://cnodejs.org/api/v1/topics?tab=${tab}&page=${page}&limit=6`)
                 .then((res)=>{
                    dispatch({
                        type:"LIST_UPDATA_SUCC",
                        data:res.data
                    })
                 })
                 .catch((error)=>{
                    dispatch({
                        type:"LIST_UPDATA_ERR",
                        data:error
                    })
                 })
        })
    }
    render(){
        //loading,data,tab,page
        let {loading,data}=this.props;
        let pagination={
            current:this.state.page,
            pageSize:10,
            total:1000,
            onChange:((current)=>{{
                console.log(current);
                this.setState({
                    page:current
                })
            }})
        }
        return (
           <List
                dataSource={data} 
                loading={loading} 
                pagination={this.isStart?false:pagination}
                renderItem={(item)=>{return (
                <List.Item actions={["回复"+item.reply_count,"访问"+item.visit_count]} key={item.id}>
                    <List.Item.Meta 
                                    avatar={<Avatar src={item.author.avatar_url} />}
                                    title={<div>
                                        <TxtTag data={item}/>
                                        <Link to={"/details/"+item.id}>{item.title}</Link></div>} 
                                    description={(<p><Link to={"/user"+item.author.loginname}>{item.author.loginname}</Link>发表于：{item.create_at.split('T')[0]}</p>)}
                        />
                        </List.Item>)}}>
                    </List>
        )
    }
}
export default connect(state=>state.list)(IndeList);