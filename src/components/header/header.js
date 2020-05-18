import React, {useState, useEffect, useContext} from 'react'
import './header.scss'
import { Link } from "gatsby"
import { motion } from "framer-motion"

const Header = (props) => {
  return (
    <div className={`header`}>
      <div className="-wrapper">
        <div className="-container">
          <div className="header-content">
            <motion.h1 className="header-headline"><Link className="header-headlineLink" to="/">{props.blok.logo}</Link></motion.h1>
            <div className="header-menu">
              <ul className="header-menuList">
                {props.blok.menu.map((item, index) => (
                  <li key={index} className="header-menuListItem"><Link to={item.menu_link} activeClassName="is-active" className="header-menuListLink">{item.menu_label}</Link></li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Header