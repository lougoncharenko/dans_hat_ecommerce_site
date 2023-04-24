import React from 'react'
import { Container, Row, Col } from 'reactstrap';
import CartHeader from '../components/CartHeader/CartHeader';

export interface ICartProps {};

const Cart: React.FunctionComponent<ICartProps> = props => {
  return (
    <>
    <CartHeader />
    <Container
    style={{
      display: "flex",
      justifyContent: "center"
    }}>
    <Row>
      <Col lg='9'>
        {
          <table className='table bordered'>
          <thead>
            <tr>
              <th>Image</th>
              <th>Product</th>
              <th>Cost</th>
              <th>Quantity</th>
              <th>Delete</th>
            </tr>
          </thead>
          <tbody>
              <tr>
              <th>
                <img 
                style ={{
                  width: "50px",
                  height: "50px",
                  objectFit: "cover",
                }}
                src="https://cdn.shopify.com/s/files/1/0506/6774/9566/products/havana-hat-tan-front-ss20-2500px_7920e1df-9840-4fef-b414-824a1f252f60_800x.jpg?v=1630616903" 
                alt="product name" /></th>
              <th>Product Name</th>
              <th>$30.99</th>
              <th>1</th>
              <th>
                <img
                style ={{
                  width: "30px",
                  height: "30px",
                  objectFit: "cover",
                }}
                src="https://cdn-icons-png.flaticon.com/512/3405/3405244.png"
                alt='delete-icon'
                />
              </th>
            </tr>
          </tbody>
        </table>
        }
  
      </Col>
      <Col lg='3'></Col>
    </Row>
  </Container>
  </>
  )
}

export default Cart