import React from 'react'
import "./Header.scss"
import like from "../../assets/svg/like.svg"
import Carzina from "../../assets/image/carzina.png"
import { Link } from 'react-router-dom'
import { useSelector } from 'react-redux'
import { useTranslation } from 'react-i18next'

function Header() {
  const { items } = useSelector((state) => state.favorite)
  const { t, i18n } = useTranslation()

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
        <div className='nav-left'>
          <h1>Exlusive</h1>
          <ul>
            <li> <Link to="/">{t("home")}</Link></li>
            <li>Contact</li>
            <li><Link to="/">{t("about")}</Link></li>
            <li><Link to="/singUp">{t("singUp")}</Link></li>
          </ul>
        </div>
        <div className='nav-right'>
          <div>
            <input type="text" placeholder='What are you looking for?' />
          </div>
          <Link to="/wishlist" className='.Oks'>
            <div><img src={like} alt="" />
              <p>{items.length}</p></div>
          </Link>
          <Link to="/wishlist">
            <div className='.Oks'><img src={Carzina} alt="" />
              <p>{items.length}</p></div>
          </Link>
        </div>
      </nav>
    </header>
  )
}

export default Header
