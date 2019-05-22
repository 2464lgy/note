import React from 'react';
class Content extends React.Component {
    constructor(props) {
        super(props);
        this.state = {  };
    }
    componentDidMount(){
        //页面渲染完毕调用
    }
    render() {
        console.log(this.props)
        return (
            <div>
                我是新闻详情{this.props.match.params.aid}
                <h3>
                    {this.props.match.params.title}
                </h3>
            </div>
        );
    }
}

export default Content;