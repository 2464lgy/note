import React,{Component} from "react";
import {Card,Avatar} from "antd";
import TxtTag from "../txtTag";
import {Link} from "react-router-dom";

export default class TxtDetails extends Component{
    render(){
        let {data,loading}=this.props;
        console.log(data);
        const title=(

            <div>
                <h1>{data.title}</h1>
                <div style={{
                    display:"flex",
                    alignItems:"center"
                }}>
                    <TxtTag data={data}/>
                    <Avatar src={data.author.avatar_url} />
                    <Link to={"/user/"+data.author.loginname}>{data.author.loginname
                    }</Link>
                    发表于：{data.create_at.split('T')[0]}

                </div>
            </div>
        )
        return (
            <Card title={title} loading={loading}>
                <div dangerouslySetInnerHTML={{
                    __html:data.content
                }}></div>
            </Card>
        )
    }
}