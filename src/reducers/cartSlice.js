import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from 'axios';

const url = 'http://localhost:3001/posts';
export const fetchData = createAsyncThunk(
    'cart/fetchCart',
    async () => {
        const { data } = await axios
            .get(url);
        return data
    }
)
const initialState = {
    cartItems: [],
    items: [],
    start: 0,
    end: 6,
    isLoading: true,
};

const cartSlise = createSlice({
    name: 'cart',
    initialState,

    reducers: {
        showCartPost: (state) => {
            state.cartItems = state.items.slice(state.start, state.end)
        },
    },
    extraReducers: (builder) => {
        builder
            .addCase(fetchData.pending, (state) => {
                state.status = 'loading';
                state.items = [];
            })
            .addCase(fetchData.fulfilled, (state, action) => {
                state.items = action.payload;
                state.status = 'success';
                state.cartItems = state.items.slice(state.start, state.end);
            })
            .addCase(fetchData.rejected, (state) => {
                state.status = 'error';
                state.items = [];
            })
    }
});
export const {
    showCartPost,



} = cartSlise.actions
export default cartSlise.reducer;