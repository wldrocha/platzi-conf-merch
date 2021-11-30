import React from 'react'
import '../styles/components/Products.css'

const Product = ({ product, handleAddTocart }) => {
  return (
    <div className="Products-item">
      <img src={product.image} alt={product.title} />
      <div className="Product-item-info">
        <h2>
          {product.title}
          <span>$ {product.price}</span>
        </h2>
        <p>{product.description}</p>
        <button type="button" onClick={handleAddTocart(product)}>
          Comprar
        </button>
      </div>
    </div>
  )
}

export default Product
