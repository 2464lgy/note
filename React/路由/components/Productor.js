import React from 'react';
import {Link,Route} from 'react-router-dom';
class Productor extends React.Component {
    constructor(props) {
        super(props);
        this.state = { 
            list:[
                {
                    aid:'001',
                    title:'新闻一'
                },{
                    aid:'002',
                    title:'新闻二'
                },{
                    aid:'003',
                    title:'新闻三'
                },{
                    aid:'004',
                    title:'新闻四'
                }
            ]
         };
    }
    render() {
        return (
            <div>
                我是产品
                <ul>
                    {
                        this.state.list.map((item,index)=>{
                            return (
                                <li key={index}>
                                    {/* <Link to={`/product/${item.aid}/${item.title}`}>{item.title}</Link> */}
                                    <Link to={`/productorContent?aid=${item.aid}&title=${item.title}`}>{item.title}</Link>

                                </li>
                            )
                        })
                    }
                </ul>
            </div>
        );
    }
}

export default Productor;