import React from 'react';
import Info from './User/Info';
import Main from './User/Main';
import {Link,Route} from 'react-router-dom';
class User extends React.Component {
    constructor(props) {
        super(props);
        this.state = { 
            title:'User模块'
         };
    }
    componentDidMount(){
        console.log(this.props.match.url)
    }
    render() {
        return (
            <div>
                <h1>{this.state.title}</h1>
                <div className='content'>
                    <div className="left">
                        左侧
                        <hr/>
                        <ul>
                            <li>
                                <Link to='/user/'>个人中心</Link>
                            </li>                            
                            <li>
                                <Link to='/user/info'>用户信息</Link>
                            </li>
                        </ul>
                    </div>
                    <div className="right">
                        右侧
                        <hr/>
                        <Route exact path='/user/' component={Main}/>
                        <Route path='/user/info' component={Info} />
                    </div>
                </div>
            </div>
        );
    }
}

export default User;