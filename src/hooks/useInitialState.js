import React, { useState } from 'react'
import initialState from '../initalState'

const useInitialState = () => {
    const [state, setState] = useState(initialState)

    const addToCart = payload => {
        setState({
            ...state,
            cart: [...state.cart, payload]
        })
    }

    const removeFromCart = payload => {
        setState({
            ...state,
            cart: state.cart.filter(item => item.id !== payload.id)
        })
    }

    return {
        addToCart,
        removeFromCart,
        state
    }
}

export default useInitialState