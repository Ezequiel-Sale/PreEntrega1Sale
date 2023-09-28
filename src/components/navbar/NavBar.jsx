import React from 'react'
import './navbar.css'
import CartWidget from '../cartWidget/CartWidget'

function NavBar() {
  return (
    <>
    <header className='container'>
        <nav className='navbar'>
            <span>
                Sower
            </span>
            <div className='links'>
              <a href="">link 1</a>
              <a href="">link 2</a>
              <a href="">link 3</a>
            <CartWidget />
            </div>
        </nav>
    </header>
    </>
  )
}

export default NavBar