import React from 'react';
import {Link,Route} from 'react-router-dom';
import Content from './Content';
class News extends React.Component {
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
        console.log(this.props)
        return (
            <div>
                我是新闻组件
                <ul>
                    {
                        this.state.list.map((item,index)=>{
                            return (
                                <li key={index}>
                                     {/* <Link to='/content'>{item.title}</Link> */}
                                    <Link to={`${this.props.match.url}/${item.aid}/${item.title}`}>{item.title}</Link>
                                </li>
                            )
                        })
                       
                    }
                </ul>
                <ul>
                    <li>直接用content填充News页面</li>
                    {
                         this.state.list.map((item,index)=>{
                            return (
                                <li key={index}>
                                     {/* <Link to='/content'>{item.title}</Link> */}
                                    <Link to={`content/${item.aid}/${item.title}`}>{item.title}</Link>
                                </li>
                            )
                        })
                    }
                </ul>
                {/* <Route path='/content' component={Content} /> */}
                {/* <Route path={`${this.props.match.url}/:aid`} /> */}

                <Route
                    exact
                    path={this.props.match.url}
                    render={() => <h3>Please select a topic.</h3>}
                />
            </div>
        );
    }
}

export default News;