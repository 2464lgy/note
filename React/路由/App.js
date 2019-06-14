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
  
















  $scope.valueScope=[
    {
      max:255,
      min:0,
    },
    {
      max:255,
      min:0,
    },
    {
      max:255,
      min:0,
    },
    {
      max:255,
      min:0,
    }
  ]
  const CidrCheck=(CidrBlock)=>{
    let strArr=CidrBlock.split('/');
    let num=0;
    if(strArr[1]<8){
       num=strArr[1];
    }else{
      num=strArr[1]-0+parseInt(strArr[1]/8)-1;
    }
    let strArr2= strArr[0].split('.').map(item=>{
      return ('00000000'+(Number(item)).toString(2)).substr(-8.8); //转换为二进制数且不足八位补零
    })
    console.log(strArr2);
    console.log(num);
    console.log(strArr2.join('/').substr(0,num))
    let fixedValue=strArr2.join('/').substr(0,num).split('/');//这里是固定的前几位
    let length=fixedValue.length;
    let  valueScope=fixedValue.map((item,index)=>{
      if(index<length-1){
        let max=parseInt((item+'0000000').substr(0,8),2);
        return {
          max:max,
          min:max,
        } 
      }else{
        let max=parseInt((item+'0000000').substr(0,8),2);
        return {
          max:max,
          min:0,
        }
      }      
    })
    if(valueScope.length<4){
      for(let i=5;i>valueScope.length;i--){
        valueScope.push(
          {
            max:255,
            min:0,
          }
        )
      }
    }
    $scope.valueScope=valueScope;
    console.log($scope.valueScope)
  }









        <div class="col-sm-2">
        <input type="text" class="form-control" ng-model="modal.first" ng-disabled="modal.IPType==='fromEcs'" ng-pattern="/^\d{1,3}$/" ui-validate="{a:'$value<=255',b:'$value>=1'}" required>
        <input type="text" class="form-control" ng-model="modal.first" ng-disabled="modal.IPType==='fromEcs'"   ui-validate="{{+valueScope[0].max}}?{a:'$value<= {{+valueScope[0].max}}',b:'$value>={{+valueScope[0].min}}'}:{}"  required>
      </div>
      <div class="col-sm-2">
        <input type="text" class="form-control" ng-model="modal.second" ng-disabled="modal.IPType==='fromEcs'" ng-pattern="/^\d{1,3}$/" ui-validate="{a:'$value<=255',b:'$value>=0'}" required>
        <input type="text" class="form-control" ng-model="modal.second" ng-disabled="modal.IPType==='fromEcs'" ng-pattern="/^\d{1,3}$/" ui-validate="{a:'$value<={{valueScope[1].max}}',b:'$value>={{valueScope[1].min}}'}" required>
      </div>
      <div class="col-sm-2">
        <input type="text" class="form-control" ng-model="modal.third" ng-disabled="modal.IPType==='fromEcs'" ng-pattern="/^\d{1,3}$/" ui-validate="{a:'$value<=255',b:'$value>=0'}" required>
        <input type="text" class="form-control" ng-model="modal.third" ng-disabled="modal.IPType==='fromEcs'" ng-pattern="/^\d{1,3}$/"  ui-validate="{a:'$value<={{valueScope[2].max}}',b:'$value>={{valueScope[2].min}}'}" required>
      </div>
      <div class="col-sm-2">
        <input type="text" class="form-control" ng-model="modal.forth" ng-disabled="modal.IPType==='fromEcs'" ng-pattern="/^\d{1,3}$/" ui-validate="{a:'$value<=255',b:'$value>=0'}" required>
        <input type="text" class="form-control" ng-model="modal.forth" ng-disabled="modal.IPType==='fromEcs'" ng-pattern="/^\d{1,3}$/"  ui-validate="{a:'$value<={{valueScope[1].max}}',b:'$value>={{valueScope[1].min}}'}" required>
      </div>