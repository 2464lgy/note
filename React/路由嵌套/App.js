import React from 'react';
import { BrowserRouter as Router,Route,Link,Redirect} from 'react-router-dom';
import Home from './components/Home';
import User from './components/User';
import './assets/css/index.css'
class App extends React.Component{
    constructor(args){
        super(args);
        this.state={
            title:'APP模块'
        }
    }
    render(){
        return (
            <div className="App">
                <h1>{this.state.title}</h1>
                <Router>
                    <ul>
                        <li>
                            <Link to='/home'>首页</Link>
                        </li>
                        <li>
                            <Link to='/user'>用户</Link>
                        </li>
                    </ul>
                    <Route  path='/home' component={Home} />
                    <Route path='/user' component={User} />
                </Router>

            </div>
        )
    }
}
export default App;