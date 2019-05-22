import React,{Component} from "react";
import {Switch,Route,Redirect} from "react-router-dom";
import Index from "../view/index/index";
import Book from "../view/book/index"
import User from "../view/user/index"
import About from "../view/about/index"
import Details from "../view/details/index"

//Redirect重定向
class RouterIndex extends Component{
    render(){
        return (
            <Switch>
                <Route exact path="/" render={()=>(
                    <Redirect to="/index/all" />
                    
                )} />
                
                <Route exact path="/index/:id" component={Index} />
                <Route path="/book" component={Book} />
                <Route path="/user/:id" component={User} />
                <Route path="/about" component={About} />
                <Route path="/details/:id" component={Details} />

            </Switch>
        )
    }
}
export default RouterIndex;