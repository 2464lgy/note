import React from 'react';
import logo from './assets/images/logo.svg';
import { BrowserRouter as Router,Route,Link} from 'react-router-dom';
import Home from './components/Home';
import Pcontent from './components/Pcontent';
import Login from './components/Login';
import AuthExample from './components/Example';
class App extends React.Component {
  constructor(props){
      super(props);

      this.state={
        flag:true,
        title:'我是父组件的值'
      }
  }
  
  render(){
    return (
      <div className="App">
        {/* <AuthExample/> */}
        <Router>
          <ul>
            <li>
              <Link to='/'>Home</Link>
            </li>
            <li>
              <Link to='/pcontent'>Pcontent</Link>
            </li>
          </ul>
          <Route exact path='/' component={Home} />
          <Route path='/login' component={Login} />
          <Route path='/pcontent/:id' component={Pcontent} />
        </Router>
      </div>
    )
  }
}

export default App;
  