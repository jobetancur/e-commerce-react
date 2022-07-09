import axios from 'axios'
import { useSelector } from 'react-redux'
import getConfig from '../utils/getConfig'
import CartInfo from './CartInfo'
import { useDispatch } from 'react-redux'
import { setCartGlobal } from '../store/slices/cart.slice'

const Cart = () => {

    const cart = useSelector(state => state.cart)

    const dispatch = useDispatch ()

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
        .then(res => {
          console.log(res.data)
          dispatch(setCartGlobal(null))
        })
        .catch(error => console.log(error.data))
    }

    let totalPriceCart = 0
    if(cart){
      const cb = (acc, cv) => {
        return acc + (parseFloat(cv.price) * cv.productsInCart.quantity)
      }
      totalPriceCart = cart.reduce(cb, 0)
    }

  return (
    <div className='cart'>
      <div className='confirm__purchase'>
        <button onClick={postPurchase}><ion-icon name="cash-outline"></ion-icon> Confirm Purchase </button>
      </div>
      <h2>My Cart</h2>
      <div className='total__cart'>
        <p>Total in your cart:</p>
        <h3>USD {totalPriceCart}</h3>
      </div>
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