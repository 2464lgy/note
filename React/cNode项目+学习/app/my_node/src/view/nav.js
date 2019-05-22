import React,{Component} from "react";
import {Menu,Icon} from "antd";
import {Link,withRouter} from "react-router-dom";
class Nav extends Component{
    constructor(arg){
        super(arg);
        console.log(this.props);
        let now=this.getNow(this.props.location);
        this.state={
            now
        }

    }
    getNow(location){
        let now=location.pathname.split('/');
        return now[1]
    }
    shouldComponentUpdate(nextProps){
        let now=this.getNow(nextProps.location);
        if(now!==this.state.now){
            this.setState({
                now
            })
            return false;
        }
        return true;
    }
    render(){
        let {mode,id} = this.props;
        return (
            <Menu mode={mode} theme="dark" id={id} selectedKeys={[this.state.now]}>
                <Menu.Item key="index">
                    <Link to="/index/all"><Icon type="home"></Icon>首页</Link>
                </Menu.Item>
                <Menu.Item key="book">
                    <Link to="/book"><Icon type="book"></Icon>教程</Link>
                </Menu.Item>
                <Menu.Item key="about">
                    <Link to="/about"><Icon type="info-circle-o"></Icon>关于</Link>
                </Menu.Item>
            </Menu>
        )
    }
}

export default withRouter((props)=>{
    console.log(props);
    let {mode,id,location} = props;
    return <Nav 
        mode={mode}
        iid={id}
        location={location}
    />
});










