import axios from 'axios'
import React, { useEffect } from 'react'
import { useSelector } from 'react-redux'
import getConfig from '../utils/getConfig'
import CartInfo from './CartInfo'

const Cart = () => {

    const cart = useSelector(state => state.cart)

    const postPurchase = () => {

      const URL = 'https://ecommerce-api-react.herokuapp.com/api/v1/purchases'

      const objPurchase = {
        street: "Green St. 1456",
        colony: "Southwest",
        zipCode: 12345,
        city: "USA",
        references: "Some references"
      }

      axios.post(URL, objPurchase, getConfig())
        .then(res => console.log(res.data))
        .catch(error => console.log(error.data))
    }

  return (
    <div className='cart'>
      <div className='confirm__purchase'>
        <button onClick={postPurchase}><ion-icon name="cash-outline"></ion-icon> Confirm Purchase </button>
      </div>
      <h2>My Cart</h2>
      {
        cart?.map (productCart => (
          <CartInfo 
            key={productCart.id}
            productCart={productCart}
          />
        ))
      }
    </div>
  )
}

export default Cart