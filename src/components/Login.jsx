import React, { useEffect, useState } from 'react'
import Form from './Form'
import UserLogged from './UserLogged'

const Login = () => {

  const [token, setToken] = useState('')

  const changedToken = localStorage.getItem('token')

  useEffect(() => {
    setToken(changedToken)
  }, [changedToken])

  return (
    <div className="login">
      
      {
        token ?
          <UserLogged/>
            :
          <Form />
      }

    </div>

  )
}

export default Login