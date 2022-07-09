import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import Select from 'react-select'
import axios from 'axios'


const InputSelect = () => {

    const [filter, setFilter] = useState()
    const [filterSelected, setFilterSelected] = useState()

    const navigate = useNavigate()

    const clickOption = () => navigate (`/category/${filterSelected}`)
    const removeFilter = () => navigate ('/products')

    useEffect(() => {
        const URL = 'https://ecommerce-api-react.herokuapp.com/api/v1/products/categories'
        axios.get(URL)
            .then(res => setFilter(res.data?.data.categories))
            .catch(error => console.log(error))
    },[])

    const categories = []

    for( let i = 0; i < filter?.length; i++ ){
        categories.push(
            {
                label: filter[i].name,
                value: filter[i].name
            }
        )
    }

    const handleSelectChange = ({value}) => {
        console.log(value);
        setFilterSelected(value)
    }

  return (
    <div className='filter__categories'>
        <Select 
            options={categories}
            onChange={handleSelectChange}
            className='filter__categories__selector'
        />
        <button onClick={clickOption} ><ion-icon name="filter-outline"></ion-icon> Filter</button>
        <button onClick={removeFilter} > Regroup</button>
    </div>
  )
}

export default InputSelect