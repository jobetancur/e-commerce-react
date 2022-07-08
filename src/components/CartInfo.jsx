import React from 'react'

const CartInfo = ({productCart}) => {

    console.log(productCart);

  return (
    <article className='bg__cart'>
        <div className='cart__card'>
            <div className='primaryInfo__cart'>
                <p>{productCart.brand}</p>
                <h3>{productCart.title}</h3>
            </div>
            <div className='secondaryInfo__cart'>
                <p>Total:</p>
                <h3>USD: {productCart.price * productCart.productsInCart.quantity}</h3>
            </div>
            <div className='thirdInfo__cart'>
                <p>Quantity:</p>
                <h3>{productCart.productsInCart.quantity}</h3>
            </div>
            </div>
        <div className='trash__button'>
            <button><ion-icon name="trash-outline"></ion-icon></button>
        </div>
    </article>
  )
}

export default CartInfo