import React, { Component } from "react";
import {Row,Col,Pagination} from "antd";
import IndexMenu from "./indexMenu";
import IndexList from "./list";
let arr = [];
for (let i=0;i<50;i++){
    arr.push(<li>这是第{i}个li</li>)
}
class Index extends Component{
    render(){
        let tab=this.props.match.params.id;
        return (
            <Row className="wrap">
                <Col md={6} xs={0}>
                    <IndexMenu id="indexMenu" mode="vertical"/>
                </Col>
                <Col md={0} xs={24}>
                    <IndexMenu id="indexXsMenu" mode="horizontal"/>
                </Col>

                <Col className='indexList' md={18} xs={24}>
                   <IndexList tab={tab}></IndexList>
               
                </Col>
            </Row>
                 )
    }
}
export default Index;