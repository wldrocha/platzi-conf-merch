import React from 'react'
import '../styles/components/Payment.css'
import '../styles/components/Information.css'

const Payment = () => {
  const navigate = useNavigate()
  return (
    <div className="Payment">
      <div className="Payment-content">
        <h3>Resumen del Pedido</h3>
        <button
          type="button"
          className="Payment-buttons"
          onClick={() => navigate(`/checkout/payment`)}
        >
          {' '}
          Pago con paypal{' '}
        </button>
      </div>
    </div>
  )
}
export default Payment
