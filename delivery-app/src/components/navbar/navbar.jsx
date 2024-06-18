import React from 'react'
import './navbar.css'
const navbar = () => {
  return (
    <div className='navbar'>
      <img src="logo.png" alt="" className="logo" />
      <ul className="navbar-menu">
        <li>Home</li>
        <li>Menu</li>
        <li>Mobile App</li>
        <li>Contact Us</li>
      </ul>
      <div className="navbar-right">
        <img src="/assets/search_icon.png" alt ="" />
        <div className="navbar-search-icon">
          <img src="/assets/basket_icon.png" alt="basket icon"></img>
          <div className="dot"></div>
        </div>
      </div>
    </div>
  )
}

export default navbar
