import { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
import { useParams } from 'react-router-dom'
import InputSearch from './InputSearch'
import InputSelect from './InputSelect'
import ProductsCard from './ProductsCard'

const Products = () => {

  const [productsFilter, setProductsFilter] = useState()
  const products = useSelector (state => state.products)

  const {name} = useParams()

  useEffect(() => {
    if(name){
      setProductsFilter(products?.filter(e => e.category.name === name))
    } else {
      setProductsFilter(products)
    }
  },[name])

  return (
    <div className='products'>
      <div className='inputs__search'>
        <InputSearch />
        <InputSelect />
      </div>
        {
          productsFilter?.map(product => (
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