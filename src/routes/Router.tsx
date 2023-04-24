import {Routes, Route, Navigate, BrowserRouter} from 'react-router-dom'
import React, {useState} from 'react';
import { Product } from '../types/types';
import Home from '../pages/Home';
import Cart from '../pages/Cart';
import ProductDetail from '../pages/ProductDetail';
import Products from '../pages/Products';
import { products } from '../data/products';

export interface IRouterProps {};

const Router: React.FunctionComponent<IRouterProps> = (props) => {
  const [productDetail, setProductDetail] = useState<number | null>(null);

  return (
    <BrowserRouter>
    <Routes>
      <Route path="/" element ={<Navigate to='/home' />} />
      <Route path="home" element={<Home/>}/>
      <Route path="products" element={<Products products={products} setProductDetail={ setProductDetail }/>}/>
      <Route path="products/:id" element={<ProductDetail productDetail={ productDetail } products={products} />}/>
      <Route path="cart" element={<Cart/>} />
    </Routes>
    </BrowserRouter>


  )
}

export default Router;
