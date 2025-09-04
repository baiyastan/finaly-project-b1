import React from 'react'
import "./Header.scss"
import like from "../../assets/svg/like.svg"
import { Link } from 'react-router-dom'

function Header() {
  return (
    <header className='header'>
      <div className='top-header'>
        <div className='header-select'>
          <p>Summer Sale For All Swim Suits And Free Express Delivery - OFF 50%!</p>
          <select>
            <option value="kg">KGZ</option>
            <option value="en">ENG</option>
            <option value="ru">RUS</option>
          </select>
        </div>
      </div>
      <nav className='navbar'>
        <Link to="/wishlist">
          <img src={like} alt="" />
        </Link>
      </nav>
    </header>
  )
}

export default Header
