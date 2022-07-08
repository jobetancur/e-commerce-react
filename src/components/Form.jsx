import axios from 'axios'
import React, { useState } from 'react'
import { useForm } from 'react-hook-form'
import { useNavigate } from 'react-router-dom'

const Form = () => {

    const [isError, setIsError] = useState(false)

    const { handleSubmit, reset, register } = useForm ()

    const navigate = useNavigate()

  const submit = data => {
    console.log(data);
    const URL = 'https://ecommerce-api-react.herokuapp.com/api/v1/users/login'
    axios.post(URL, data)
      .then(res => {
        localStorage.setItem('token', res.data.data.token)
        navigate('/purchases')
      })
      .catch(error => {
        localStorage.setItem('token', '')
        setIsError(true)
        setTimeout(() => {
          setIsError(false)
        }, 1000)
      })
      reset({
        email: '',
        password: ''
      })
  }

  return (
    <div>
        <form className="login__form" onSubmit={handleSubmit(submit)}>
        <ul className="login__test">
          <li>
            <b>Email: </b>alejo@gmail.com
          </li>
          <li>
            <b>Password: </b>pass1234
          </li>
        </ul>
        <h2>Enter your information</h2>
        <ul className="login__list">
          <li className="login__item">
            <label htmlFor="login-email" className="login__label">Email </label>
            <input 
            type="email" 
            className="login__input" 
            id='login-email' 
            { ...register('email') }
            />
          </li>
          <li className="login__item">
            <label htmlFor="login-pass" className="login__label">Password </label>
            <input 
            type="password" 
            className="login__input" 
            id='login-pass' 
            { ...register('password') }
            />
          </li>
        </ul>
        {
          isError && 'Wrong information, Try again...'
        }
        <button>Login</button>
      </form>
    </div>
  )
}

export default Form