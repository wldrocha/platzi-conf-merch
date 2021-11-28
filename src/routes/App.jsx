import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'

import {
  Checkout,
  Information,
  Home,
  Payment,
  Success,
  NotFound,
} from '../containers'

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/checkout" element={<Checkout />} />
        <Route path="/checkout/information" element={<Information />} />
        <Route path="/checkout/payment" element={<Payment />} />
        <Route path="/checkout/success" element={<Success />} />
        <Route element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
