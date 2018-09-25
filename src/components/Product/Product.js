import React from 'react';
import './Product.css';
import { Button, Title, List, Price, Card} from './common';  

const Product = ({data}) => {
    return  (
        <div className="product">
            <div className="product-container">
                <Card align="center">
                    <Title>{data.Title}</Title>
                </Card>
                <Card align="center">
                    <Price>{data.Price}</Price>
                </Card>
                <Card align = "center">
                    <Button onPress={()=> alert('You bought the '+ data.Title)}>Buy Now</Button>
                </Card>
                <Card>
                    <List>{data.List}</List>
                </Card>
            </div>
        </div>
    );
}

export default Product;