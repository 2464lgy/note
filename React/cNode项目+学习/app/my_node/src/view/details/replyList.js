import React , {Component} from "react";
import {Card,List,Avatar} from "antd";
import {Link} from "react-router-dom";
export default class RealyList extends Component{
    render(){
        let  {replies,replyCount,loading}=this.props;

        return (
            <div>
                <Card 
                    loading={loading} 
                    title={replyCount+"条回复"}
                    type="inner"
                    >
                    <List className="replyList" dataSource={replies} itemLayout="vertical" renderItem={(item,index)=>{
                        return (
                            <List.Item key={item.id} extra={item.ups.length>0?<span>有{item.ups.length}人觉得这个回复很赞</span>:''}>
                                <List.Item.Meta 
                                    avatar={<Avatar src={item.author.avatar_url} />}
                                    description={
                                        <div>
                                            <Link to={"/user/"+item.author.loginname}>{item.author.loginname}</Link>
                                            <span style={{marginLeft:'10px'}}>发表于：{item.create_at.split('T')[0]}</span>
                                        </div>}
                                />
                                <div dangerouslySetInnerHTML={{
                                    __html:item.content
                                }}></div>
                            </List.Item>
                        )
                    }}>
                        
                    </List>
                </Card>
            </div>
        )

    }
}