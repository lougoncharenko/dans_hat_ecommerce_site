import {createSlice, PayloadAction} from '@reduxjs/toolkit'
import { NewItem } from '../../interfaces/NewItem'
import { InitialState } from '../../interfaces/InitialState'
import { CartItems } from '../../interfaces/CartItems'

const initialState:InitialState = {
  cartItems: [],
  totalAmount:0,
  totalQuantity: 0
}

const cartSlice = createSlice({
  name: 'cart',
  initialState, 
  reducers: {
    setCart: (state: any, action: PayloadAction<NewItem>) => {
      state.cartItems = action.payload;
      state.totalQuantity++;
    },
    addItems(state, action: PayloadAction<NewItem>) {
      const newItem:NewItem = action.payload
      const existingItem = state.cartItems.find((item: { id: number })=> item.id === newItem.id);

      state.totalQuantity++;

      if(!existingItem){
        state.cartItems.push({
          id: newItem.id,
          name: newItem.name,
          image: newItem.image,
          price: newItem.price,
          quantity: 1,
          totalPrice: newItem.cost,
        })
      }
      else{
        existingItem.quantity++;
          existingItem.totalPrice = Number(existingItem.totalPrice) + Number(newItem.price)
      }
      console.log(state.totalQuantity);
      console.log(state.cartItems);
      console.log(newItem);
      console.log(state)
      state.totalAmount = 500;

      // return state;
    }
      // addItem:(state, action: PayloadAction<NewItem>)=>{
      //     const newItem:NewItem = action.payload
      //     const existingItem = state.cartItems.find((item: { id: number })=> item.id === newItem.id);

      //     state.totalQuantity++

      //     if(!existingItem){
      //         state.cartItems.push({
      //             id: newItem.id,
      //             name: newItem.name,
      //             image: newItem.image,
      //             price: newItem.price,
      //             quantity: 1,
      //             totalPrice: newItem.cost
      //         })
      //     }
      //     else{
      //        existingItem.quantity++
      //         existingItem.totalPrice = Number(existingItem.totalPrice) + Number(newItem.price)
      //     }
      //    console.log(state.totalQuantity);
      //    console.log(state.cartItems);
      //    console.log(newItem);
      //    console.log(state)

      //    return state;
      // },
  },
});

export const { addItems, setCart } = cartSlice.actions

export default cartSlice.reducer