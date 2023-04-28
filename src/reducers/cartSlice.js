import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    cartItems: [],
};

const cartSlise = createSlice({
    name: 'cart',
    initialState,

    reducers: {
        setCartItems: (state, action) => {
            state.cartItems = action.payload;
        },
    },
});
export const {
    setCartItems,



} = cartSlise.actions
export default cartSlise.reducer;