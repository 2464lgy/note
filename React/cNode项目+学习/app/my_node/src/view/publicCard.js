import React,{Component} from "react";
import {Card} from "antd";
export default class PublicCard extends Component{
    render(){
        let {data}=this.props; 
        return (
            <div className="wrap" >                        
            {data.map((item,index)=>{
               return(  <Card title={item.title} loading={false} type="inner" key={index}>
                    <div dangerouslySetInnerHTML={{
                        __html:item.content
                    }}>

                    </div>
                </Card>)
            })}
        </div>      
        )
    }
}