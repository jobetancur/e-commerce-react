import { useSelector } from 'react-redux'
import InputSearch from './InputSearch'
import ProductsCard from './ProductsCard'

const Products = () => {

  const products = useSelector (state => state.products)

  return (
    <div className='products'>
      <div className='inputs__search'>
        <InputSearch />
      </div>
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