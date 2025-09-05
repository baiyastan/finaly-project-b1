import React from 'react'
import "./Header.scss"
import like from "../../assets/svg/like.svg"
import Carzina from "../../assets/image/carzina.png"
import { Link } from 'react-router-dom'
import { useSelector } from 'react-redux'
import { useTranslation } from 'react-i18next'

function Header() {
  const {items} = useSelector((state) => state.favorite)
  const {t, i18n} = useTranslation()

  function change(e) {
    let lng = e.target.value;
    i18n.changeLanguage(lng)
  }
  return (
    <header className='header'>
      <div className='top-header'>
        <div className='header-select'>
          <p>Summer Sale For All Swim Suits And Free Express Delivery - OFF 50%!</p>
          <select onChange={change}>
            <option value="kg">KGZ</option>
            <option value="en">ENG</option>
            <option value="ru">RUS</option>
          </select>
        </div>
      </div>
      <nav className='navbar'>
        <Link to="/">{t("home")}</Link>
        <Link to="/">{t("about")}</Link>
        <Link to="/wishlist">
          <div><img src={like} alt="" />
          <p>{items.length}</p></div>
        </Link>
        <Link to="/wishlist">
          <div><img src={Carzina} alt="" />
          <p>{items.length}</p></div>
        </Link>
      </nav>
    </header>
  )
}

export default Header
