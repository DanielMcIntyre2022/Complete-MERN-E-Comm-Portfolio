import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    cartItems: [],
    amount: 0, 
    total: 0, 
    isLoading: true
};

const cartSlice = createSlice({
    name: 'cart',
    initialState, 
    reducers: {
        increase:(state, {payload}) => {
            const cartItem = state.cartItems.find((item) => item._id === payload._id)
            cartItem.amount = cartItem.amount +1;
        }
    }
});

// export const { increase } = cartItems.actions;
export default cartSlice.reducer;