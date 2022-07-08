import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { filterNameThunk } from '../store/slices/products.slice'

const SearchBox = () => {

    const [ search, setSearch ] = useState("");

    const dispatch = useDispatch();

    const handleSearch = e => {
        e.preventDefault();
        dispatch(filterNameThunk(search));
    }

    return (
        <div className='search-box'>
            <form className="input" onSubmit={handleSearch}>
                <input 
                    type="text" 
                    placeholder="What are you looking for?" 
                    value={search}
                    onChange={e => setSearch(e.target.value)}
                />
                <button>
                  <ion-icon name="search-outline"></ion-icon>
                </button>
            </form>
        </div>
    );
};

export default SearchBox;