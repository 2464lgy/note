import React from 'react';
import axios from 'axios';
import {Link} from 'react-router-dom';
class Pcontent extends React.Component {
    constructor(props) {
        super(props);
        this.state = { 
            data:[],
            domain:'http://a.itying.com'
         };
    }
    getContent=()=>{
        let url='http://a.itying.com/api/productcontent'
        console.log(this.props)
        axios.get(`${url}?id=${this.props.match.params.id}`)
            .then((res)=>{
                console.log(res.data.result);
                this.setState({
                    data:res.data.result
                })
            }).catch((err)=>{
                console.log(err)
            })
    }
    componentDidMount(){
        this.getContent()
    }
    render() {
        return (
            <div style={{padding:'40px'}}>
                这里Pcontent
                <hr/>
                <Link to="/">返回</Link>
                {
                    this.state.data.map((item,index)=>{
                        return (
                            <div key={index} style={{padding:'20px 50px'}}>
                                        <p>类型 ：{item.catename}</p>
                                        <p>菜名：{item.title}</p>
                                        <p>规格：{item.description}</p>
                                        <p><img  style={{width:'120px',height:'120px',paddingRight:'10px'}} src={`${this.state.domain}/${item.img_url}`} /></p>
                                        <h4>简介：</h4>
                                        <p dangerouslySetInnerHTML={{__html:item.content}} />
                            </div>
                        )
                    })
                }
            </div>
        );
    }
}

export default Pcontent;