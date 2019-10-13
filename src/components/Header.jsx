import React from 'react'
import logo from '../static/logo.svg'

const Header = () => {
  return (
    <header>
      <div className="wrapper">
        <img src={logo} alt=""/>
        <div className="menu">
          <a href='/'>item</a>
        </div>
      </div>
    </header>
  )
}

export default Header