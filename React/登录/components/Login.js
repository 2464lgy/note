import React from 'react';
import {Redirect} from 'react-router-dom';
class Login extends React.Component {
    constructor(props) {
        super(props);
        this.state = { 
            loginFlag:false
         };
    }
    doLogin=(e)=>{
        e.preventDefault();//阻止表单默认提交行为
        let username=this.refs.username.value;
        let password=this.refs.password.value;
        console.log(username,password)
        if(username=='admin'&&password=='123456'){
            //登录成功 跳转页面
            this.setState({
                loginFlag:true
            })
        }else{
            alert('登录失败')
        }
    }
    render() {
        if(this.state.loginFlag){
            return <Redirect to={{pathname:"/"}} />  //这里修改url
        }
        return (
            <div>
                <form onSubmit={this.doLogin}>
                    <input type="text" ref='username'/>
                    <input type="password" ref='password'/>
                    <input type="submit" value='执行登录' />
                </form>
                {/* <button>执行登录</button> */}
            </div>
        );
    }
}

export default Login;