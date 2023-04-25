import { configureStore } from '@reduxjs/toolkit';
import cartSlice from '../cartSlice/cartSlice';


// The Redux store is created using the configureStore function from Redux Toolkit.
// configureStore requires that we pass in a reducer argument.
const store = configureStore({
  reducer: {
   cart: cartSlice,
  },
});

export default store;