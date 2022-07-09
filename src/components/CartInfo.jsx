import React from 'react'
import axios from 'axios'
import getConfig from '../utils/getConfig'
import { useDispatch } from 'react-redux'
import { getAllCartProducts } from '../store/slices/cart.slice'

const CartInfo = ({productCart}) => {

    const dispatch = useDispatch()

    const deleteProductFromCart = () => {
        const URL = `https://ecommerce-api-react.herokuapp.com/api/v1/cart/${productCart.id}`

        axios.delete(URL, getConfig())
            .then(res => {
                console.log(res.data)
                dispatch(getAllCartProducts(null))
            })
            .catch(error => console.log(error.data))
    }

  return (
    <article className='bg__cart'>
        <div className='cart__card'>
            <div className='primaryInfo__cart'>
                <p>{productCart.brand}</p>
                <h4>{productCart.title}</h4>
            </div>
            <div className='secondaryInfo__cart'>
                <p>Total:</p>
                <h4>USD: {productCart.price * productCart.productsInCart.quantity}</h4>
            </div>
            <div className='thirdInfo__cart'>
                <p>Quantity:</p>
                <h4>{productCart.productsInCart.quantity}</h4>
            </div>
        </div>
        <hr />
        <div className='trash__button'>
            <button onClick={deleteProductFromCart} ><ion-icon name="trash-outline"></ion-icon></button>
        </div>
    </article>
  )
}

export default CartInfo