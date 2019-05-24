import React from 'react';
class Content extends React.Component {
    constructor(props) {
        super(props);
        this.state = {  
            url:'',
            urlObj:{
                actor1:'https://baike.baidu.com/item/%E5%85%8B%E9%87%8C%E6%96%AF%C2%B7%E5%B8%95%E6%8B%89%E7%89%B9/891886',
                actor2:'https://baike.baidu.com/item/%E4%BD%90%E4%BC%8A%C2%B7%E7%B4%A2%E5%B0%94%E8%BE%BE%E5%A8%9C/6131187',
                actor3:'https://baike.baidu.com/item/%E5%B8%83%E8%8E%B1%E5%BE%B7%E5%88%A9%C2%B7%E5%BA%93%E7%8F%80/960182',
                actor4:'https://baike.baidu.com/item/%E8%8C%83%C2%B7%E8%BF%AA%E5%A1%9E%E5%B0%94/3620364',
                actor5:'https://baike.baidu.com/item/%E8%BF%88%E5%85%8B%E5%B0%94%C2%B7%E9%B2%81%E5%85%8B/1484098'
            }
        };
    }
   
  
    componentWillMount(prevProps,nextProps,snapshot){
             console.log(this.props.match.params.id);
             console.log(prevProps);
             console.log(nextProps);
             console.log(snapshot);
        //   this.changeUrl()
    }
    render() {

        return (
            <div style={{width:'100%',height:'100%',marginTop:'-200px'}}>
                {this.props.match.params.id}
                <iframe style={{width:'100%',height:'100%'}} src={this.state.urlObj[this.props.match.params.id]}>

                </iframe>
            </div>
        );
    }
}

export default Content;