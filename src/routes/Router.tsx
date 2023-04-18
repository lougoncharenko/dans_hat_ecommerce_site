import {Routes, Route, Navigate, BrowserRouter} from 'react-router-dom'
import React from 'react';
import Home from '../pages/Home';
import Cart from '../pages/Cart';
import ProductDetail from '../pages/ProductDetail';
import Products from '../pages/Products';

export interface IRouterProps {};

const Router: React.FunctionComponent<IRouterProps> = (props) => {
  return (
    <BrowserRouter>
    <Routes>
      <Route path="/" element ={<Navigate to='/home' />} />
      <Route path="home" element={<Home/>}/>
      <Route path="products" element={<Products/>}/>
      <Route path="products/:id" element={<ProductDetail/>}/>
      <Route path="cart" element={<Cart/>} />
    </Routes>
    </BrowserRouter>


  )
}

export default Router;

// const Router = () => {
//   return (
//     <Routes>
//     <Route path="/" element ={<Navigate to='/home' />} />
//     <Route path="home" element={<Home/>}/>
//     <Route path="products" element={<Products/>}/>
//     <Route path="products/:id" element={<ProductDetail/>}/>
//     <Route path="cart" element={<Cart/>} />
//   </Routes>
//   )
// }

// export default Router