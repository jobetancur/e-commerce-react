import { useRef, useEffect } from 'react'
import './App.css'
import { Link, Route, Routes } from 'react-router-dom'
import Home from './components/Home'
import Products from './components/Products'
import Login from './components/Login'
import ProtectedRoutes from './components/ProtectedRoutes'
import Cart from './components/Cart'
import Purchases from './components/Purchases'
import Header from './components/Header'
import ProductInfo from './components/ProductInfo'
import { useDispatch, useSelector } from 'react-redux'
import { getAllProducts } from './store/slices/products.slice'
import axios from 'axios'
import Footer from './components/Footer'

function App() {

  const dispatch = useDispatch ()

  useEffect(() => {
    dispatch(getAllProducts())
  }, [])

  //Elemento de control de cambio de menú.

  const navbar = useRef()

  const onClick = e => {
    navbar.current.classList.toggle('activate');
    const navbarlist = navbar.current.children
    if(e.target.classList.contains('icon')){
      for(let i= 0;i < navbarlist.length; i++){
        navbarlist[i].classList.remove('activate')
      }
      e.target.parentElement.parentElement.classList.add('activate')
    } else {
      for(let i= 0;i < navbarlist.length; i++){
        navbarlist[i].classList.remove('activate')
      }
      e.target.parentElement.parentElement.parentElement.classList.add('activate')
    }
  }

  
  useEffect(() => {
    const URL = 'https://ecommerce-api-react.herokuapp.com/api/v1/users'

    const newUser = {
      firstName: "Alejo",
      lastName: "Betancur",
      email: "alejo@gmail.com",
      password: "pass1234",
      phone: "1234567891",
      role: "admin"
    }

    axios.post(URL, newUser)
      .then(res => console.log(res.data))
      .catch(error => console.log(error.data))
  },[])

  return (
    <div className="App">
      {/* NavBar */}
      <nav className='navbar'>
        {/* <img src={logo1} alt="poke nav" /> */}
        <div className='navigation' >
          <ul ref={navbar}>
            <li className='list activate'  onClick={onClick} >
              <Link className='link' to='/' >
                <span className='icon'>
                  <ion-icon name="home-outline"></ion-icon>
                </span>
                <span className='text'>Home</span>
              </Link>
            </li>
            <li className='list'  onClick={onClick}>
              <Link className='link' to='/products'>
                <span className='icon'>
                  <ion-icon name="storefront-outline"></ion-icon>
                </span>
                <span className='text'>Products</span>
              </Link>
            </li>
            <li className='list'  onClick={onClick}>
              <Link className='link' to='/login'>
                <span className='icon'>
                  <ion-icon name="log-in-outline"></ion-icon>
                </span>
                <span className='text'>Login</span>
              </Link>
            </li>
            <li className='list'  onClick={onClick}>
              <Link className='link' to='/cart'>
                <span className='icon'>
                  <ion-icon name="cart-outline"></ion-icon>
                </span>
                <span className='text'>Cart</span>
              </Link>
            </li>
            <li className='list'  onClick={onClick} >
              <Link className='link' to='/purchases'>
                <span className='icon'>
                  <ion-icon name="pricetags-outline"></ion-icon>
                </span>
                <span className='text'>Purchases</span>
              </Link>
            </li>
            <div className='indicator'></div>
          </ul>
        </div>
      </nav>
    
      <Routes>
        <Route path='/' element={ <Home /> } />
        <Route path='/products' element={ <Products /> } />
        <Route path='/products/:id' element={ <ProductInfo /> } />
        <Route path='/category/:name' element={ <Products /> } />
        <Route path='/login' element={ <Login /> } />

        <Route element={ <ProtectedRoutes isLogged={true} /> } >
          <Route path='/cart' element={ <Cart /> } />
          <Route path='/purchases' element={ <Purchases /> } />
        </Route>
      </Routes>
      <Footer/>
    </div>
    
  )
}

export default App
