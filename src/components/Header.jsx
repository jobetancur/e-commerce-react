import React from 'react'
import favicon from '../favicon.png'

const Header = () => {
  return (
    <header className='header'>
        <img src={favicon} alt="Orange Store Picture" />
        <h2>Orange Tech</h2>
    </header>
  )
}

export default Header