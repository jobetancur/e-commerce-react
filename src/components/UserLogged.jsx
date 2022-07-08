import React from 'react'

const UserLogged = () => {

  const token = localStorage.removeItem('token')

  const onClick = () => {
    token
  }

  return (
    <div className='logged'>
        <i class="fa-solid fa-user-check fa-4x"></i>
        <h2>User Logged</h2>
        <button onClick={onClick} >Logout</button>
    </div>
  )
}

export default UserLogged