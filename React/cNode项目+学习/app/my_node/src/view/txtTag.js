import React,{Component} from "react";
import {Tag} from "antd";
import tab from "./tab";
// const tab={
//     top:{
//         color:"magenta",
//         txt:"置顶"
//     },
//     good:{
//         color:"geekblue",
//         txt:"精华"
//     },
//     job:{
//         color:"cyan",
//         txt:"招聘"
//     },
//     ask:{
//         color:"green",
//         txt:"问答"
//     },
//     share:{
//         color:"purple",
//         txt:"分享"
//     },
//     dev:{
//         color:"lime",
//         txt:"问答"
//     }
// };
function getTab(data){
    console.log(data)
    let nowTab=(
        data.top?
            "top":
                data.good?
                    "good":data.tab
    );
    console.log(nowTab);
 //   console.log(data);
    return tab.filter((item)=>{
        return item.tab===nowTab
    })[0]; 
}
export default class TxtTag extends Component{ 

    render(){
        let nowTab=getTab(this.props.data);
       // console.log(nowTab);
        return (
                <Tag color={nowTab.color}>{nowTab.txt}</Tag>
        )
    }
}