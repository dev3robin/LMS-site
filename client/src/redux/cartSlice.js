import { createSlice } from '@reduxjs/toolkit';
const savedCart = JSON.parse(localStorage.getItem('cartItems'));

const initialState = {
  cartItems: savedCart || [],};

const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addToCart: (state, action) => {
      state.cartItems.push(action.payload);
      localStorage.setItem('cartItems', JSON.stringify(state.cartItems)); // ✅ persist
    },
    removeFromCart: (state, action) => {
      state.cartItems = state.cartItems.filter(item => item.id !== action.payload);
      localStorage.setItem('cartItems', JSON.stringify(state.cartItems)); // ✅ persist
    },
    clearCart: (state) => {
      state.cartItems = [];
      localStorage.removeItem('cartItems');
    },
  },
});

export const { addToCart, removeFromCart, clearCart } = cartSlice.actions;
export default cartSlice.reducer;
