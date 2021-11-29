import React from 'react'
import '../styles/components/Payment.css'

const Payment = () => {
  return (
    <div className="Payment">
      <div className="Payment-content">
        <h3>Resumen del Pedido</h3>
        <button type="button" className="Payment-buttons"> Pago con paypal </button>
      </div>
    </div>
  )
}
export default Payment
