import React from 'react';
import {
  Card, CardImg, CardText, CardBody,
  CardTitle, CardSubtitle, Button
} from 'reactstrap';

const ProductCard = ({product}) => {
  const addToCart=(product)=>{
    let products = [];
    if(localStorage.getItem('products')){
        products = JSON.parse(localStorage.getItem('products'));
    }
    products.push(product);
    localStorage.setItem('products', JSON.stringify(products));
  }
  return (
    <div className="col-sm-3">
      <Card className="m-1">
        <CardImg top width="100%" src={product.image} alt="Card image cap" />
        <CardBody>
          <CardTitle tag="h5">{product.name}</CardTitle>
          <CardSubtitle tag="h6" className="mb-2 text-muted">{product.category}</CardSubtitle>
          <CardText>
            <p><span>MRP: </span><del>RS {product.price} </del><b> RS {product.price-product.discount}</b></p>
            <p>{product.desc.slice(0,90)}...</p>
          </CardText>
          <Button onClick={()=>addToCart(product)}>Add To Cart</Button>
        </CardBody>
      </Card>
    </div>
  );
};

export default ProductCard;