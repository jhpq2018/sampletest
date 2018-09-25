import React, {Component} from 'react';
import Product from './Product/Product';
import Header from './Header';


class Container extends Component {
    constructor() {
        super();
        this.state = {
            data: []
        }
    }

    componentDidMount(){
        fetch('products.json')
        .then(response => response.json())
        .then(response => this.setState({data:response}));
    }

    render() {
        const style = {
            boxShadow:'0px 5px 10px gray',
            margin:'0 auto',
            backgroundColor:"white",
            float:"left",
            display:'inline-block',
            position:'absolute',
            zIndex:'2'
        };

        return (
            <div style={style}>
                <Header/>
                {
                    this.state.data.map(x => <Product data={x} />)
                }
            </div>
        );
    }
}

export default Container;