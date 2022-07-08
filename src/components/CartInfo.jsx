import React from 'react'

const CartInfo = ({productCart}) => {

    console.log(productCart);

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
            <button><ion-icon name="trash-outline"></ion-icon></button>
        </div>
    </article>
  )
}

export default CartInfo