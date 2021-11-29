import React from 'react'
import initialState from '../initalState.js'
import Products from '../components/Products.jsx'


const Home = () => {
  return (
    <div>
      <Products products={initialState.products}/>
    </div>
  )
}

export default Home
