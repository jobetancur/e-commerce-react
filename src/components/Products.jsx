import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getAllProducts } from '../store/slices/products.slice'
import InputSearch from './InputSearch'
import ProductsCard from './ProductsCard'

const Products = () => {

  const products = useSelector (state => state.products)

  return (
    <div className='products'>
      <InputSearch />
        {
          products?.map(product => (
            <ProductsCard 
              key={ product.id }
              product={ product }
            />
          ))
        }
    </div>
  )
}

export default Products