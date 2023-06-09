import React from 'react'
import { Link} from "react-router-dom";
import {ShoppingCart} from 'phosphor-react'

function Navabar() {
  return (
    <div className='navbar'>
        <div className='links'>
            <Link to="/pro">Shop</Link>
            <Link to="/cart">
                <ShoppingCart size={32}></ShoppingCart>
            </Link>
        </div>
    </div>
  )
}

export default Navabar