import React, { useRef, useState } from 'react'
import logo from '../static/logo.svg'
import menu from '../static/menu.svg'

const Header = () => {
  const menuItems = useRef(null)
  const [isClicked, setIsClicked] = useState(false)
  const [menuItemsStyle, setMenuItemsStyle] = useState(undefined)
  
  const menuClick = () => {
    isClicked ? setIsClicked(false) : setIsClicked(true)

    !isClicked
    ? setMenuItemsStyle({ display: 'block' })
    : setMenuItemsStyle({ display: 'none' })
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