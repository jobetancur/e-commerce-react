import axios from 'axios'
import React, { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { getAllCartProducts } from '../store/slices/cart.slice'
import getConfig from '../utils/getConfig'

const ProductsCard = ({product}) => {

    const navigate = useNavigate ()
    const clickCard = () => navigate ( `/products/${product.id}` )

    const dispatch = useDispatch ()

    const addProductCart = e => {
        e.stopPropagation

        const URL = 'https://ecommerce-api-react.herokuapp.com/api/v1/cart'
        
        const objectProduct = {
            id: product.id,
            quantity: 1
        }
        axios.post(URL, objectProduct, getConfig())
            .then(res => {
                console.log(res.data)
                dispatch(getAllCartProducts())
            })
            .catch(error => console.log(error.response.data))
    }

  return (
    <div className='card'>
        <div className='imgBx'>                
            <img src={product.productImgs[0]} alt="Image 1" /> 
        </div>
        
        <div className='content'>
            <div className='details'>
                <h2>{product.title}</h2>
                <div className='details__price__title'>
                    <p>Price:</p>
                </div>
                <div className='details__price__number'>
                    <p><b>USD {Math.trunc(product.price)}</b></p>
                </div>
                <div className='details__price__button'>
                    <button onClick={clickCard} ><ion-icon name="balloon-outline"></ion-icon> View product</button>
                    <button onClick={addProductCart} ><ion-icon name="cart-outline"></ion-icon> Add to cart</button>
                </div>
            </div>
        </div>
    </div>
  )
}

export default ProductsCard