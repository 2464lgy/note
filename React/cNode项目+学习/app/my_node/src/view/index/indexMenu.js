import React,{Component} from "react";
import {Menu} from "antd";
import {Link,withRouter} from "react-router-dom";
import tab from "../tab";
// let data=[
//     {
//         tab:"all",
//         txt:"全部"
//     },{
//         tab:"good",
//         txt:"精华"
//     },{
//         tab:"ask",
//         txt:"问题"
//     },{
//         tab:"share",
//         txt:"分享"
//     },{
//         tab:"job",
//         txt:"招聘"
//     },{
//         tab:"dev",
//         txt:"测试"
//     }
// ]
class IndexMenu extends Component{
    constructor(arg){
        super(arg);
        let now = this.getNow(this.props.location);
        this.state={
            now
        }
    }
    getNow(location){
        let now = location.pathname.split("/");
        return now[2];
    }
    shouldComponentUpdate(nextProps){
        let now =this.getNow(nextProps.location);
        if(now!==this.state.now){
            this.setState({
                now
            })
            return false;
        }
        return true;
    }
    render(){
        return (
            <Menu id={this.props.id} mode={this.props.mode} selectedKeys={[this.state.now]}>
                {tab.map((item)=>{
                    if(!item.isIndex){
                        return false;
                    }
                    return (
                        <Menu.Item key={item.tab}>
                            <Link to={"/index/"+item.tab}>{item.txt}</Link>
                        </Menu.Item>
                    )
                })}
            </Menu>
        )
    }
}
export default withRouter((props)=>{
    let {mode,id,location}=props;
    return <IndexMenu 
            mode={mode}
            id={id}
            location={location}
    />
})