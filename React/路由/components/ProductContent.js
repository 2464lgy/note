import React from 'react'
import url from 'url';
class ProductContent extends React.Component {
    constructor(props) {
        super(props);
        this.state = { 
            item:{}
         };
    }
    componentDidMount(){
        console.log(this.props.location.search);
        console.log(url.parse(this.props.location.search,true).query);
        let query=url.parse(this.props.location.search,true).query;
        this.setState({
            item:query
        })
    }
    render() {
        return (
            <div>
                <h1>商品详情</h1>
                {/* <h3>{this.props.match.params.title}</h3> */}
                <h3>{this.state.item.title}</h3>
            </div>
        );
    }
}

export default ProductContent;