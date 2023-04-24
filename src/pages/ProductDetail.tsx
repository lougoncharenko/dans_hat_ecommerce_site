import React from 'react';
import { Container, Row, Col} from 'reactstrap';
import { Stack, Typography} from '@mui/material';
import {MediaCard} from '@shopify/polaris';
import { Product } from '../types/types';

export interface IProductDetailsProps {
  productDetail: number | null;
  products: Product[];
}

const ProductDetails: React.FunctionComponent<IProductDetailsProps> = ({ productDetail, products }) => {
  const addToCart = ()=> {
    alert('Add to cart')
  }

  // find the product with the matching id
  const product = products.find((p) => p.id === productDetail);

  if (!product) {
    return <div>Product not found</div>;
  }

  return (
    <Container
      style ={{
        backgroundColor: 'white',
        margin: "35px",
        borderRadius: '30px',
        borderColor: 'black',
        borderWidth: "13px",
        boxShadow: '5px 5px 5px 5px black',
        display: 'flex',
        justifyContent: 'center',
      }}>
      <Stack gap="60px" sx={{ flexDirection: { lg: 'row' }, p: '20px', alignItems: 'center' }}>
        <img src={product.image} alt={product.name} loading="lazy" className="detail-image" height="500px" width="500px"/>
        <Stack sx={{ gap: { lg: '35px', xs: '20px' } }}>
          <Typography sx={{ fontSize: { lg: '50px', xs: '30px' } }} fontWeight={700} textTransform="capitalize">
            {product.name}
          </Typography>
          <Typography sx={{ fontSize: { lg: '30px', xs: '15px' } }} fontWeight={700} >
            ${product.price.toFixed(2)}
          </Typography>
          <button
            style={{ width: "100px", marginBottom: "15px", backgroundColor: "green", color: "white", borderRadius: "50px", padding: "5px"}}
            onClick={addToCart}
          >Add to cart</button>
          <Typography sx={{ fontSize: { lg: '18px', xs: '10px' } }} color="#4F4C4C">
            {product.description}
          </Typography>
        </Stack>
      </Stack>
    </Container>
  )
}

export default ProductDetails
