import React  from 'react';
import axios from 'axios';
import {Link} from 'react-router-dom';

class Home extends React.Component {
    constructor(props) {
        super(props);
        this.state = { 
            list:[],
            domain:'http://a.itying.com'
         };
    }

    requestData=()=>{
        axios.get('http://a.itying.com/api/productlist')
            .then((res)=>{
                console.log(res.data)
                this.setState({
                    list:res.data.result   
                })
            }).catch(function(){

            })
    }
    componentDidMount(){
        this.requestData()
    }
    render() {
        return (
            <div className='home'>
                <div className='list'>
                这里是HOME组件
                <hr/>
                <button><Link to="/login">跳转到登录</Link></button>
                     <ul>
                    {
                        this.state.list.map((item,index)=>{
                            return( item.list.length>0?
                                // (item.list.length==1? 
                                //     <li key={index}>
                                //           <h2>{item.title}</h2>
                                //         <Link to={`/pcontent/${item.list[0].cate_id}`} >{item.list[0].title}</Link>
                                //     </li>
                                //     :
                                    ( <li key={index} style={{padding:'20px'}}>
                                        <h2>{item.title}</h2>
                                        <ul>
                                            {
                                                item.list.map((item,index)=>{
                                                    return (

                                                        <li key={index} style={{padding:'10px'}}>
                                                            <Link style={{width:'200px',display:'block'}} to={`/pcontent/${item._id}`} >{item.title}</Link>
                                                            <img style={{width:'120px',height:'120px',paddingRight:'10px'}} src={`${this.state.domain}/${item.img_url}`}/>
                                                            <span>价格：{item.price}</span>
                                                        </li>
                                                    )
                                                })
                                            }
                                        </ul>
                                     </li>):''
                            )
                      
                            
                        })
                    }
                </ul>
                </div>    
            </div>
        );
    }
}

export default Home;