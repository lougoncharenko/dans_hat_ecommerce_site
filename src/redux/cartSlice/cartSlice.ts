import {createSlice} from '@reduxjs/toolkit'
import { NewItem } from '../../interfaces/NewItem'
import { InitialState } from '../../interfaces/InitialState'
import { CartItems } from '../../interfaces/CartItems'

//cart will always be empty when app is refreshed
const initialState:InitialState = {
  cartItems:[],
  totalAmount:0,
  totalQuantity:0
}

const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers : {
    addItem:(state,action) => {
      const newItem:NewItem = action.payload
      const existingItem = state.cartItems.find((item: { id: number; }) => item.id === newItem.id);
      state.totalQuantity++

      //if item isn't in cart, this adds a new item to cart
      if(!existingItem){
        state.cartItems.push({
            id: newItem.id,
            productName: newItem.productName,
            image: newItem.image,
            price: newItem.price,
            quantity: 1,
            totalPrice: newItem.cost
        })
    }
      else {
        //otherwise the item quantity increases
        existingItem.quantity++
        existingItem.totalPrice = Number(existingItem.totalPrice) + Number(newItem.price)
      }
      state.totalAmount = state.cartItems.reduce((total:any,item:CartItems) => 
      total + Number(item.price) * Number(item.quantity)
      );
          console.log(state.totalQuantity);
           console.log(state.cartItems);
           console.log(newItem);
           console.log(state.cartItems);
           
                     
    },
  },
});

export const cartActions = cartSlice.actions
//export const {addItem, deleteItem} = cartSlice.actions

export default cartSlice.reducer

//later on add deleteItem
    // deleteItem:(state,action)=> {
    //   const deletedItem:DeletedItem = action.payload
    //   const existingItem = state.cartItems.find((item: { id: number; }) => item.id === deletedItem.id);
    //   state.totalQuantity--
    //   // fill out rest of the logic later
    //   //if item exists logic, then remove item by splice
    //   //update the totalAmount
    // },