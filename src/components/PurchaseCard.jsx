import React from 'react'
import { useNavigate } from 'react-router-dom'

const PurchaseCard = ({purchase}) => {

    const options = { year: 'numeric', month: 'long', day: 'numeric' }
    const date = new Date(purchase.createdAt).toLocaleDateString('en-us', options)

    // console.log(purchase);

    const navigate = useNavigate ()

  return (
    <article className='purchase__card'>
        <p><b>Date of purchase: </b>{date}</p>
        <hr />
        <ul className='purchase__products__list'>
            {
                purchase.cart.products.map(productItem => (
                    <tr
                        key={productItem.id}
                        onClick={() => navigate(`/products/${productItem.id}`)}
                        className='product__purchase'
                    >
                        <td className='purchase__name'>
                            {productItem.title}
                        </td>
                        <td className='purchase__quantity'>
                            {productItem.productsInCart.quantity}
                        </td>
                        <td className="purchase__price">
                            USD {productItem.price * productItem.productsInCart.quantity}
                        </td>
                    </tr>
                ))
            }
        </ul>

    </article>
  )
}

export default PurchaseCard