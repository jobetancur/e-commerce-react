import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
import ProductsCard from './ProductsCard'

const SimilarProducts = ({product}) => {

    const [filterProducts, setFilterProducts] = useState()

    const allProducts = useSelector (state => state.products)

    // console.log(allProducts);

    useEffect(() => {
        if(allProducts.length !== 0){
            const filter = allProducts.filter(e => e.category.name === product?.category)
            setFilterProducts(filter)
        }
    },[product])
    
    console.log(filterProducts);

  return (
    <article className='similar__products'>
        <h2 className='similar__products__title'>Dicover similar products</h2>
        {
            filterProducts?.map(e => {
                if(e.title !== product.title){
                    return <ProductsCard 
                                key={e.id}
                                product={e}
                    />
                }
            })
        }
    </article>
  )
}

export default SimilarProducts