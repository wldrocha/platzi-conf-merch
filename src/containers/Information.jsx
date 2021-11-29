import React from 'react'
import '../styles/components/Information.css'

const Information = () => {
  return (
    <div className="information">
      <div className="Information-content">
        <div className="Information-head">
          <h2>Informacion de contacto:</h2>
        </div>
        <div className="Information-form">
          <form>
            <label htmlFor="name">Nombre completo</label>
            <input type="text" name="name" id="name" placeholder="Nombre completo" />
            <label htmlFor="email">Correo electronico</label>
            <input type="text" name="email" id="email" placeholder="Correo electronico" />
            <label htmlFor="address">Direccion</label>
            <input type="text" name="address" id="address" placeholder="Direccion" />
            <label htmlFor="apt">Apto</label>
            <input type="text" name="apt" id="apt" placeholder="Apto" />
            <label htmlFor="city">Ciudad</label>
            <input type="text" name="city" id="city" placeholder="Ciudad" />
            <label htmlFor="country">Pais</label>
            <input type="text" name="country" id="country" placeholder="Pais" />
            <label htmlFor="state">Estado</label>
            <input type="text" name="state" id="state" placeholder="Estado" />
            <label htmlFor="cp">Codigo postal</label>
            <input type="text" name="cp" id="cp" placeholder="Codigo postal" />
            <label htmlFor="phone">Telefono</label>
            <input type="text" name="phone" id="phone" placeholder="Telefono" />
          </form>
        </div>
        <div className="Information-buttons">
          <button type="button" className="Information-back">Regresar</button>
          <button type="button" className="Information-back">pagar</button>
        </div>
      </div>
      <aside className="Information-sidebar">
        <h3>Pedido:</h3>
        <div className="Information-item">
          <div className="Information-element">
            <h4>Item name</h4>
            <span>$10</span>
          </div>
        </div>
      </aside>
    </div>
  )
}
export default Information
