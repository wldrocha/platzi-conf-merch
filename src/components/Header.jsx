import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
import '../styles/components/Header.css'
import AppContext from '../context/AppContext'

const Header = () => {
  const {
    state: { cart },
  } = useContext(AppContext)
  return (
    <header className="Header">
      <h1 className="Header-tittle">
        <Link to="/">PlatziConf Merch</Link>
      </h1>
      <div className="Header-checkout">
        <Link to="/checkout"> Checkout</Link>
      </div>
      {cart.length > 0 && <div className="Header-alert">{cart.length}</div>}
    </header>
  )
}

export default Header
