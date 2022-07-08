import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useDispatch } from 'react-redux'
import { useParams } from 'react-router-dom'
import { getAllCartProducts } from '../store/slices/cart.slice'
import getConfig from '../utils/getConfig'
import SimilarProducts from './SimilarProducts'

const classImg = ['', 'second-img', 'third-img']

const ProductInfo = () => {

    const [counter, setCounter] = useState(1)
    const [indexClass, setIndexClass] = useState(0)
    const [productInfo, setProductInfo] = useState()
    const {id} = useParams()
    const dispatch = useDispatch ()


    const addToCart = e => {
        e.stopPropagation
        const URL = 'https://ecommerce-api-react.herokuapp.com/api/v1/cart'
        const addProduct = {
            id: productInfo.id,
            quantity: counter
        }
        axios.post(URL, addProduct, getConfig() )
            .then(res => {
                console.log(res.data)
                dispatch(getAllCartProducts())
            })
            .catch(error => console.log(error.data))
    }

    useEffect (() => {
        const URL = `https://ecommerce-api-react.herokuapp.com/api/v1/products/${id}`
        axios.get(URL)
            .then(res => setProductInfo(res.data.data.product))
            .catch(error => console.log(error))
    }, [id])

    console.log(productInfo);

    const clickPrev = () => {
        const prevClass = indexClass - 1
        if(prevClass < 0){
            setIndexClass(classImg.length -1)
        } else {
            setIndexClass(prevClass)
        }
    }

    const clickNext = () => {
        const nextClass = indexClass +1
        if(nextClass >= classImg.length){
            setIndexClass(0)
        } else {
            setIndexClass(nextClass)
        }
    }

    const minusOne = () => {
        const minus = counter -1
        if( minus >= 1 ){
            setCounter(minus)
        }
    }

    const plusOne = () => setCounter(counter +1)

  return (
    <article className='productid'>
        <div className='product__container'>
            <div className='image__box'>
                <div className='slider'>
                    <div onClick={clickPrev} className='slider__prev'>&#60;</div>
                    <div className={`slider__container ${classImg[indexClass]}`}>
                        {
                           productInfo?.productImgs.map(imgSrc => (
                            <img 
                            key={imgSrc}
                            src={imgSrc} 
                            alt="Images"
                            className='slider__imgs' 
                            />
                            ))
                        }
                    </div>
                    <div className='slider__next' onClick={clickNext}>&#62;</div>
                </div>
            </div>
            <div className='text__container'>
                <h2>{productInfo?.title}</h2>
                <div className='product__description'>
                    <p>{productInfo?.description}</p>
                </div>
                <div className='product__controls'>
                    <div className='product__price'>
                        <p>Price:</p>
                        <p className='product__price__number'><b>USD {Math.trunc(productInfo?.price)}</b></p>
                    </div>
                    <div className='product__quantity'>
                        <p className='product__quantity__title'>Quantity</p>
                        <div className='product__counter'>
                            <button onClick={minusOne} ><ion-icon name="remove-outline"></ion-icon></button>
                            <div>{counter}</div>
                            <button onClick={plusOne} ><ion-icon name="add-outline"></ion-icon></button>
                        </div>
                    </div>
                </div>
                <div className='product__button details__price__button'>
                    <button onClick={addToCart}><ion-icon name="cart-outline"></ion-icon> Add to cart</button>
                </div>
            </div>
        </div>
        <SimilarProducts product={productInfo} />
    </article>
  )
}

export default ProductInfo