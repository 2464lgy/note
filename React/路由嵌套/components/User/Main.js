import React from 'react';
class Main extends React.Component {
    constructor(props) {
        super(props);
        this.state = { 
            title:'Main组件'
         };
    }
    render() {
        return (
            <div>
                <h3>{this.state.title}</h3>
            </div>
        );
    }
}

export default Main;