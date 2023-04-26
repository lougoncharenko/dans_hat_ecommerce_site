import React from 'react'
import { useSelector } from 'react-redux';
import { Container, Row, Col } from 'reactstrap';
import CartHeader from '../components/CartHeader/CartHeader';
import { useAppSelector } from '../redux/hooks/hooks';


export interface ICartProps {};

const Cart: React.FunctionComponent<ICartProps> = () => {
  // const cartItems = useAppSelector((state:any) => {
  //   console.log(state);
  //   return state.cart.cartItems;
  // });

  const cartItems = useSelector((state: any) => state.cart.cartItems);
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
              cartItems.length === 0 ? (<h2 className='fs-4 text-center'>No items in the cart</h2>):
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
              {
                cartItems.map((item:any) => (
                  <tr>
                  <th><img className= "cart-item-image"src={item.image} alt={item.product_name} /></th>
                  <th>{item.name}</th>
                  <th>${item.price}</th>
                  <th>{item.quantity}</th>
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
                ))
              }
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

