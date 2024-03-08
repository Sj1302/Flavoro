import {  configureStore } from '@reduxjs/toolkit'
import CartSlice from './Slices/CartSlice';
import ComponentbuttonSlice from './Slices/ComponentbuttonSlice';
import SearchSlice from './Slices/SearchSlice';

const store = configureStore({
    reducer: {cart: CartSlice,
        componentButton:ComponentbuttonSlice,
        search:SearchSlice,
    },
})

export default store;

