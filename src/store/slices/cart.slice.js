import { createSlice } from '@reduxjs/toolkit';
import axios from 'axios';
import getConfig from '../../utils/getConfig';

export const cartSlice = createSlice({
    name: 'cart',
    initialState: null,
    reducers: {
        setCartGlobal: (state, action) => action.payload
    }
})

export const { setCartGlobal } = cartSlice.actions;

export const getAllCartProducts = () => (dispatch) => {
    const URL = 'https://ecommerce-api-react.herokuapp.com/api/v1/cart'
    return axios.get(URL, getConfig())
        .then(res => dispatch(setCartGlobal(res.data.data.cart.products)))
        .catch(error => console.log(error.data))
}

export default cartSlice.reducer;
