import React, { useRef } from 'react'
import logo from '../static/logo.svg'
import menu from '../static/menu.svg'

const Header = () => {
  const menuItems = useRef(null)
  let isClicked = false
  let menuItemsStyle
  
  const menuClick = () => {
    isClicked ? isClicked = false : isClicked = true

    isClicked
    ? menuItemsStyle = { display: 'block' }
    : menuItemsStyle = { display: 'none' }
  }
  return (
    <header>
      <div className="wrapper">
        <img src={logo} alt="" />
        <img onClick={() => { menuClick() }} className='menuIcon' src={menu} alt="" />
        <div ref={menuItems} style={menuItemsStyle} className="menu">
          <a href='/'>item</a>
        </div>
      </div>
    </header>
  )
}

export default Header