import React from 'react';
class Info extends React.Component {
    constructor(props) {
        super(props);
        this.state = { 
            title:'Info组件'
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

export default Info;