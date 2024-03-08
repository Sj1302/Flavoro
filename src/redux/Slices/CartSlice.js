import { createSlice } from '@reduxjs/toolkit';

const CartSlice = createSlice({
  name: 'cart',
  initialState: {
    cart: []
  },
  reducers: {
    addToCart: (state, action) => {
      const existingItem = state.cart.find(item => item.id === action.payload.id);
      if (existingItem) {
        state.cart = state.cart.map(item =>
          item.id === action.payload.id ? { ...item, qnty: item.qnty + 1 } : item
        );
      } else {
        state.cart.push(action.payload);
      }
    },
    deleteFromCart: (state, action) => {
      state.cart = state.cart.filter(item => item.id !== action.payload.id);
    },
    emptycart: (state, action) => {
      
      state.cart =action.payload
        
    },
    updateQuantity: (state, action) => {
      const { id, qnty } = action.payload;
      state.cart = state.cart.map(item =>
        item.id === id ? { ...item, qnty } : item
      );
    }
  }
});

export const { addToCart, deleteFromCart, updateQuantity,emptycart } = CartSlice.actions;
export default CartSlice.reducer;
