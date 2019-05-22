import React from 'react';
import logo from './assets/images/logo.svg';
import { BrowserRouter as Router,Route,Link} from 'react-router-dom';
// import './assets/css/App.css';
import Home from './components/Home';
import New from './components/News';
import Productor from './components/Productor';
import Content from './components/Content';
import ProductContent from './components/ProductContent';
// import BasiceExample from './components/example';
class App extends React.Component {
  constructor(props){
      super(props);

      this.state={
        flag:true,
        title:'我是父组件的值'
      }
  }
  setFlag=()=>{
    this.setState({
      flag:!this.state.flag
    })
  }
  render(){
    return (
      <div className="App">
        <Router>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            
            <li>
              <Link to="/news">News</Link>
            </li>
            <li>
              <Link to="/productor" >Productor</Link>
            </li>
          </ul>
          <Route exact path="/" component={Home} />
          <Route path="/news" component={New} />
          <Route path="/productor" component={Productor} />
          <Route path="/news/:aid/:title" component={Content} />
          <Route path="/content/:aid/:title" component={Content} />
          <Route path='/productor/:aid/:title' component={ProductContent} />
          <Route path='/productorContent' component={ProductContent} />
          {/* <Route
                    exact
                    path="/content"
                    render={() => <h3>Please select a topic.</h3>}
                /> */}

        </Router>
      
      </div>
    )
  }
}

export default App;
  