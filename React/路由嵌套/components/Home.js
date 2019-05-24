import React from 'react';
import {Link,Route} from 'react-router-dom';
import Content from './Home/Content';
class Home extends React.Component {
    constructor(props) {
        super(props);
        this.state = { 
            title:'Home模块'
         };
    }
    componentDidMount(){
        console.log(this.props.match.url)
    }
    render() {
        return (
            <div>
                <h1>{this.state.title}</h1>
                <h3>银河护卫队</h3>
                <ul style={{float:'left',width:'10%'}}>
                    <li>
                        <Link to={`${this.props.match.url}/home/actor1`}>克里斯·帕拉特 饰 彼得·奎尔</Link>
                    </li>
                    
                    <li>
                        <Link to={`${this.props.match.url}/home/actor2`}>佐伊·索尔达娜 饰 卡魔拉</Link>
                    </li>
                    
                    <li>
                        <Link to={`${this.props.match.url}/home/actor3`}>布莱德利·库珀 饰 火箭浣熊</Link>
                    </li>
                    
                    <li>
                        <Link to={`${this.props.match.url}/home/actor4`}>范·迪塞尔 饰 格鲁特</Link>
                    </li>
                    
                    <li>
                        <Link to={`${this.props.match.url}/home/actor5`}>迈克尔·鲁克 饰 勇度</Link>
                    </li>
                </ul>
                <div style={{float:'left',width:'80%',height:'800px'}}>
                    <Route exact path={`${this.props.match.url}/home/:id`} component={Content}/>
                </div>
            </div>
        );
    }
}

export default Home;