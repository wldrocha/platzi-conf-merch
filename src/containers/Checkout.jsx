import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
import AppContext from '../context/AppContext'
import '../styles/components/Checkout.css'

const Checkout = () => {
  const {
    state: { cart },
    removeFromCart,
  } = useContext(AppContext)

  const handleRemove = product => () => {
    removeFromCart(product)
  }

  const handleSumTotal = () => {
    const reducer = (acum, currVal) => acum + currVal.price
    const sum = cart.reduce(reducer, 0)
    return sum
  }

  return (
    <div className="Checkout">
      <div className="Checkout-content">
        <h3>{cart.length > 0 ?  'Lista de Pedidos:': 'Sin pedidos :('}</h3>
        {cart.map((item) => (
          <div className="Checkout-item">
            <div className="Checkout-element">
              <h4>{item.title}</h4>
              <span>$ {item.price}</span>
            </div>
            <button type="button" onClick={handleRemove(item)}>
              eliminar2
            </button>
          </div>
        ))}
      </div>
      {cart.length > 0 && (
      <div className="Checkout-sidebar">
        <h3>Precio Total: $ {handleSumTotal()}</h3>
        <Link to="/checkout/payment">
          <button type="button">Continuar pedido</button>
        </Link>
      </div>
      )}
    </div>
  )
}

export default Checkout
