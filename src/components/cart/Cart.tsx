import React from 'react'
import { NavCart } from "../../types/Cart";
import './Cart.css'

const Cart = (navCart: NavCart) => {
  return (
    <div className="cart">
      <span>{navCart.items?.length ?? 0} Items / ${navCart.total}</span>
    </div>
  )
}

export default Cart
