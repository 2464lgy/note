import React,{Component} from "react";
import {Layout,Row,Col,Divider,Icon,Dropdown,Button} from "antd";
import Nav from "./nav";
class MainHeader extends Component{
    render(){
        return (
            <Layout.Header>
                <Row className="wrap">
                    <Col md={6} xs={24}>
                        <h1 id="logo">
                        cNode
                              <Divider xs={0} type='vertical' className="headerDivider"/>
                        </h1>
                    </Col>
                    <Col md={18} xs={0}>
                        <Nav mode="horizontal" id="nav" />
                    </Col>
                    <Col md={0} xs={24} className="xsNav">
                        <Dropdown
                         overlay={
                            <Nav mode="vertical" id="xsNav" />
                        }
                         trigger={['click','hover','touchend']}
                         placement="bottomRight"
                        >
                            <Button><Icon type="bars" /></Button>
                        </Dropdown>
                    </Col>
                </Row>
            </Layout.Header>
        )
    }
}
export default MainHeader; 