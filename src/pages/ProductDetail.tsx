import React from 'react';
import { Container, Row, Col} from 'reactstrap';
import { Stack, Typography} from '@mui/material';
import {MediaCard} from '@shopify/polaris';
const image = "https://cdn.shopify.com/s/files/1/0506/6774/9566/products/havana-hat-tan-front-ss20-2500px_7920e1df-9840-4fef-b414-824a1f252f60_800x.jpg?v=1630616903";
const product_name = 'Product name'
const description = "Product Description"

export interface IProductDetailsProps {};

const ProductDetails: React.FunctionComponent<IProductDetailsProps> = props => {
  const addToCart = ()=> {
    alert('Add to cart')
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
        <img src={image} alt={product_name} loading="lazy" className="detail-image" height="500px" width="500px"/>
        <Stack sx={{ gap: { lg: '35px', xs: '20px' } }}>
          <Typography sx={{ fontSize: { lg: '50px', xs: '30px' } }} fontWeight={700} textTransform="capitalize">
            {product_name}
          </Typography>
          <Typography sx={{ fontSize: { lg: '30px', xs: '15px' } }} fontWeight={700} >
            $24.99
          </Typography>
          <button
          style={{ width: "100px", marginBottom: "15px", backgroundColor: "green", color: "white", borderRadius: "50px", padding: "5px"}}
          onClick={addToCart}
          >Add to cart</button>
          <Typography sx={{ fontSize: { lg: '18px', xs: '10px' } }} color="#4F4C4C">
          {description}
          </Typography>
        </Stack>
      </Stack>

    </Container>
  )
}

export default ProductDetails